
var type_checker=require("type_checker");
var board_util=null;
var assert=require("assert")

var fs=require("fs");

var imgs={};

imgs.bishop=require("./img/bishop.svg");
imgs.king=require("./img/king.svg");
imgs.knight=require("./img/knight.svg");
imgs.rook=require("./img/rook.svg");
imgs.pawn=require("./img/pawn.svg");
imgs.queen=require("./img/queen.svg");

var unicode={};
unicode["white king"]="\u2654";
unicode["white queen"]="\u2655";
unicode["white rook"]="\u2656";
unicode["white bishop"]="\u2657";
unicode["white knight"]="\u2658";
unicode["white pawn"]="\u2659";
unicode["black king"]="\u265A";
unicode["black queen"]="\u265B";
unicode["black rook"]="\u265C";
unicode["black bishop"]="\u265D";
unicode["black knight"]="\u265E";
unicode["black pawn"]="\u265F";

var div_temp=null;
var window=(function () {return this;})();
var get_temp_div=function () {
  if(div_temp)
    return div_temp;
  if(!window.document)
    throw new Error("document not found");
  
  div_temp=window.document.createElement("div")
  return div_temp;
};

var piece;
var config={}
piece=function(str){
  if(!config.configured)
    throw new Error("not configured call .config")
  type_checker.string(str)
  var pp=piece.parse_piece(str)
  if(!pp)
    throw new Error("invalid "+str)
  this.ispiece=true;
  this.moved=0;
  this.color=pp.color
  this._pname=pp.pname
};

piece.imgs=imgs;

piece.prototype.unicode=function () {
  var ts=this.toString();
  if(!(ts in unicode))
    throw new Error('not found')
  return unicode[ts];
};

piece.prototype.toJSON=function () {
  var onew={};
  for(var k in this){
    if(k=="html_piece")
      continue;
    if(typeof this[k]==typeof function(){})
      continue;
    onew[k]=this[k];
  }
  return onew;
}

piece.prototype.browser_element=function () {
  if(this.html_piece)
    return this.html_piece;
  var dt=get_temp_div();
  dt.innerHTML=imgs[this.pname];
  
  var svgele=dt.querySelector("svg");
  svgele.parentNode.removeChild(svgele);
  dt.innerHTML="";
  
  // console.error(imgs[this.pname]);
  
  Object.defineProperty(this,"html_piece",{
    enumerable:false,
    configurable:true,
    value:svgele
  });
  
  // console.log(this.pname);
  
  var pcolor=this.color;
  if(pcolor){
    var oppcolor=board_util.opposite_color(pcolor)
    svgele.setAttribute("class",""+this.pname+" "+pcolor)
    // var pth=[].slice.call(svgele.querySelectorAll("path,rect,circle"))
    // pth.forEach(function (p) {
    //   p.style.fill=pcolor;
    //   p.style.stroke=oppcolor;
    // })
  }
  
  return svgele;
};
Object.defineProperty(piece.prototype,"pname",{
  get:function (v) {
    return this._pname;
  },
  set:function (v) {
    if(config.valid_names(v)){
      this._pname=v;
      return v;
    }
    throw new Error("invalid name")
  }
})

piece.fromJSON=function(jstr) {
  var jo=JSON.parse(jstr)
  return Object.create(piece.prototype,jo);
}
piece.configure=function(bs){
  assert(!config.configured);
  type_checker.object(bs)
  type_checker.function(bs.valid_names)
  type_checker.function(bs.valid_colors)
  type_checker.object(bs.board_util)
  
  board_util=bs.board_util;
  config.valid_names=bs.valid_names;
  config.valid_colors=bs.valid_colors;
  config.configured=true;
  
  return true;
}

piece.valid_colors=function () {
  assert(config.configured);
  return config.valid_colors.apply(config,arguments);
};

piece.parse_piece=function (piece_name) {
  type_checker.string(piece_name)
  
  var m=/^([a-z]+) ([a-z]+)$/gi.exec(piece_name)
  if(!m)
    return false
  var color=m[1]
  var pname=m[2]
  if(!config.valid_colors(color))
    return false
  if(!config.valid_names(pname))
    return false
  return {
    color:color,
    pname:pname
  }
}

piece.interface=type_checker.define_interface({
  color:"",
  pname:""
},null)
piece.prototype.toString=function(){
  return this.color+" "+this.pname
};
piece.prototype.inspect=function () {
  return JSON.stringify(this)
}
//piece.prototype.toString;

module.exports=piece;