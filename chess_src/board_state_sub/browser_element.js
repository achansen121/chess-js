
var window=(function(){return this;})();


var csstxt="";
if(process.title=="browser"){
  csstxt=require("../board.less")
}

var bsquare_click=function (bs) {
  return function (event) {
    event.preventDefault();
    bs.emit("bsquare_click",this.getAttribute("data-coord"),this);
  };
};


module.exports=function browser_element(parent) {
  if(process.title!="browser")
    throw new Error("not a browser")
  if(this.html_board)
    return this.html_board;
  
  var me=this;
  var document=window.document;
  var head=document.querySelector("head")
  var bsc=document.querySelector("#board_state_css")
  
  var anitime=.2;
  
  if(!bsc){
    bsc=document.createElement("style")
    bsc.appendChild(document.createTextNode(csstxt.toString()+".chessboard>svg{transition:left "+anitime+"s,top "+anitime+"s;}"))
    head.appendChild(bsc)
  }
  var hb=document.createElement("div")
  hb.className="chessboard";
  
  Object.defineProperty(this,"html_board",{
    enumerable:false,value:hb
  })
  
  var hpos={};
  
  
  Object.defineProperty(this,"html_board_pos",{
    enumerable:false,value:hpos
  })
  
  var fillsquare=function (piece,sqr) {
    var pcolor=null
    var pname="empty"
    var psvg=""
    if(piece){
      pname=piece.pname
      pcolor=piece.color
      psvg=imgs[pname]
    }
    sqr.innerHTML=psvg;
    if(pcolor){
      var oppcolor=board_util.opposite_color(pcolor)
      var svg_ele=sqr.querySelector("svg");
      svg_ele.setAttribute("class",""+pname+" "+pcolor)
    }
  }
  var svg_pos=function(piece,pos){
    var pbe=piece.browser_element();
    pbe.setAttribute("data-coord",pos);
    if(!pbe.parentNode)
      me.html_board.appendChild(pbe)
  }
  var square_map={};
  
  for(var i=1;i<=8;i++){
    for (var j = 1; j <= 8; j++) {
      var oddoreven=((i+j)%2 ? "odd" : "even")
      var btn=document.createElement("button");
      var sqr=document.createElement("div")
      sqr.className="bsquare "+oddoreven
      var posstr=j+"x"+i;
      me.buttons[posstr]=btn;
      btn.setAttribute("data-coord",posstr);
      btn.addEventListener("click",bsquare_click(me),false);
      sqr.setAttribute("data-coord",posstr);
      hpos[posstr]=sqr;
      var piece=this.positions[posstr];
      if(piece)
        svg_pos(piece,posstr)
      square_map[posstr]=sqr;
      hb.appendChild(btn);
      hb.appendChild(sqr);
    };
  }
  Object.defineProperty(this,"recent_square",{
    configurable:true,
    value:document.createElement("div"),
    enumerable:false
  });
  Object.defineProperty(this,"recent_source",{
    configurable:true,
    value:document.createElement("div"),
    enumerable:false,
  })
  // this.recent_square=;
  this.recent_square.appendChild(document.createElement("div"))
  this.recent_square.setAttribute("class","recent_move")
  
  this.recent_source.appendChild(document.createElement("div"))
  this.recent_source.setAttribute("class","recent_source")
  
  var set_new_recent=function (fp, np) {
    if(!fp){
      if(me.recent_source.parentNode)
        me.recent_source.parentNode.removeChild(me.recent_source);
    } else{
      me.recent_source.setAttribute("data-coord",fp);
      if(!me.recent_source.parentNode)
        me.html_board.appendChild(me.recent_source);
    }
    me.recent_square.setAttribute("data-coord",np);
    if(!me.recent_square.parentNode){
      me.html_board.appendChild(me.recent_square)
    }
  };
  this.on("add_piece",function (pobj,loc) {
    svg_pos(pobj,loc.toString())
    set_new_recent(null,loc.toString())
  })
  this.on("move_piece",function(from,to,pobj){
    var pbe=pobj.browser_element();
    pbe.setAttribute("data-coord",to.toString());
    set_new_recent(from.toString(),to.toString());
    me.animation_notify(anitime);
  })
  this.on("remove_piece",function (pobj,loc) {
    var pbe=pobj.browser_element()
    if(pbe.parentNode)
      pbe.parentNode.removeChild(pbe)
  })
  process.nextTick(function () {
    me.emit("html_board",me.html_board)
  });
  
  return hb;
};