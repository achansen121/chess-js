
var type_checker=require("type_checker")
var assert=require("assert")
var piece=require("./piece.js")

var path=require("path");
var fs=require("fs")
var EE=require("events").EventEmitter;
var util=require("util")

var position=require("./position.js")
var dcopy=require("dcopy");

var board_util=require("./board_util.js");
var bconstants=require("./board_constants.js");



var window=(function (){return this;})();

var imgs=piece.imgs;
var indexes="bycolortype,bycolor,bycol,byrow,buttons,bypid".split(",");

var BoardState=function () {
  EE.call(this)
  var me=this;
  this.animating=0;
  this.positions={}
  this.history=[];
  this.bycolor={}
  this.bypid={};
  this["white castled"]=0;
  this["black castled"]=0;
  this.isboard=true;
  this.bytype={}
  this.supressemit=0;
  this.turn="white";
  indexes.forEach(function (pname) {
    me[pname]={};
  });
}
util.inherits(BoardState,EE);
BoardState.prototype.animation_notify=function (t) {
  this.animating++;
  this.emit("animating")
  var me=this;
  setTimeout(function () {
    me.animating--;
    if(!me.animating)
      me.emit("animated")
  },t*1E3);
};

BoardState.prototype.add_piece=function (which,loc) {
  var pcode
  if(typeof loc==typeof "")
    loc=new position(loc);
  if(loc!==null)
    type_checker.object(loc)
  
  var pobj
  if(typeof which==typeof ""){
    which=which.toLowerCase()
    pobj=new piece(which)
  } else{
    pobj=which;
    which=pobj.toString();
  }
  
  if(!pobj.id){
    var tryid=JSON.stringify([which,loc.toString(),this.history.length])
    assert(!(tryid in this.bypid))
    this.bypid[tryid]=pobj;
    pobj.id=tryid;
  }
  if(pobj.id in this.bypid){
    assert(this.bypid[pobj.id]==pobj)
  } else{
    this.bypid[pobj.id]=pobj;
  }
  
  if(loc===null){
    pobj.position=null;
    return pobj;
  }
  
  var where=loc.toString()
  if(where in this.positions && this.positions[where]){
    throw new Error(where+" is occupied by "+this.positions[where])
  }
  this.bycolor[pobj.color][where]=pobj
  this.bytype[pobj.pname][where]=pobj
  this.bycol[loc.x][where]=pobj
  this.byrow[loc.y][where]=pobj
  this.bycolortype[pobj.toString()][where]=pobj
  this.positions[where]=pobj
  pobj.position=loc;
  
  if(!this.supressemit)
    this.emit("add_piece",pobj,loc)
  
  
  return pobj;
}
BoardState.prototype.move_piece=function(pobj, loc){
  
  
  if(typeof loc==typeof "")
    loc=new position(loc);
  
  type_checker.object(loc);
  type_checker.object(pobj)
  
  this.supressemit+=1;
  var from=pobj.position.toString()
  this.remove_piece(pobj);
  this.add_piece(pobj,loc);
  this.supressemit-=1;
  if(!this.supressemit){
    this.emit("move_piece",new position(from),loc,pobj);
  }
};
BoardState.prototype.promote=function(pobj,topiece){
  type_checker.object(pobj);
  type_checker.string(topiece);
  if(pobj.position===null){
    console.log(pobj.id,pobj,bs)
    throw new Error("not on board?")
  }
  
  var pos=pobj.position;
  
  this.remove_piece(pobj);
  var np=pobj.color+" "+topiece;
  var pcopy=new position(pos.toString());
  
  var npobj=this.add_piece(np,pcopy);
  
  npobj.jumped=pobj.jumped;
  npobj.moved=pobj.moved;
  
  return npobj;
};
BoardState.prototype.forget_piece=function (pobj) {
  var rval=this.remove_piece(pobj);
  assert(rval);
  delete this.bypid[pobj.id];
  return true;
}
BoardState.prototype.remove_piece=function(pobj){
  type_checker.object(pobj)
  if(!pobj.position)
    throw new Error("not on board, no position")
  var where=pobj.position.toString()
  var pobj=this.positions[where]
  type_checker.uses_interface(pobj,piece.interface)
  
  window.lastbs=this;
  window.lastpobj=pobj;
  assert(pobj===this.bycolortype[pobj.toString()][where],pobj+" not at "+where)
  assert(pobj===this.bycolor[pobj.color][where]);
  assert(pobj===this.bytype[pobj.pname][where]);
  delete this.bycolor[pobj.color][where];
  delete this.bycolortype[pobj.toString()][where];
  delete this.bytype[pobj.pname][where];
  delete this.positions[where];
  delete this.bycol[pobj.position.x][where];
  delete this.byrow[pobj.position.y][where];
  
  pobj.position=null;
  
  if(!this.supressemit)
    this.emit("remove_piece",pobj,new position(where))
  
  
  return true
}

var jcopy={};
"positions,history,animating,turn,taken".split(",").forEach(function (pname) {
  jcopy[pname]=true;
})
BoardState.prototype.toJSON=function () {
  var vcopy={};
  for(var k in jcopy){
    vcopy[k]=this[k];
  }
  return vcopy;
}
BoardState.prototype.initialize=function (optional) {
  this.animating=0;
  this.positions={}
  this.history=[];
  this.bycolor={}
  this.bytype={}
  this.bypid={};
  this.turn="white";
  var me=this;
  indexes.forEach(function (idx) {
    me[idx]={};
  });
  
  
  for(var c in bconstants.options.valid_colors){
    this.bycolor[c]={}
    for(var pn in bconstants.options.valid_names){
      this.bycolortype[c+" "+pn]={}
    }
  }
  this.bytype={}
  for(var pn in bconstants.options.valid_names){
    this.bytype[pn]={}
  }
  for (var i = 0; i < bconstants.size; i++) {
    var n=i+1;
    this.bycol[n]={}
    this.byrow[n]={}
  };
  this.taken=[]
  var me=this
  this.turn="white"
  bconstants.homerow.forEach(function (pname,i) {
    if(optional=="empty")
      return;
    var pi=i+1;
    [
      {which:"white "+pname,where:new position(pi,1)},
      {which:"white pawn",where:new position(pi,2)},
      {which:"black "+pname,where:new position(pi,8)},
      {which:"black pawn",where:new position(pi,7)}
    ].forEach(function (r) {
      if(optional==="nopawns"&&/pawn/gi.test(r.which))
        return;
      me.add_piece(r.which,r.where)
    })
  });
  this.emit("initialize")
}



BoardState.prototype.browser_element=require("./board_state_sub/browser_element.js");
BoardState.prototype.add_human=require("./board_state_sub/add_human.js");
BoardState.prototype.install_key_listeners=require("./board_state_sub/install_key_listeners.js");
BoardState.prototype.clone=require("./board_state_sub/clone.js");
BoardState.prototype.print=require("./board_state_sub/print.js");
BoardState.prototype._check_all=require("./board_state_sub/_check_all.js");
BoardState.prototype.flip_html_board=require("./board_state_sub/flip_html_board.js");
BoardState.prototype.undo_move=require("./board_state_sub/undo_move.js");
BoardState.prototype.valid_moves_by_color=require("./board_state_sub/valid_moves_by_color.js");
BoardState.prototype.valid_moves_by_pos=require("./board_state_sub/valid_moves_by_pos.js");
BoardState.prototype.valid_moves=require("./board_state_sub/valid_moves.js");
BoardState.prototype.perform_move=require("./board_state_sub/perform_move.js");
BoardState.prototype.check_check=require("./board_state_sub/check_check.js");

BoardState.fromJSON=function(bj){
  var btmp=JSON.parse(bj);
  
  
  var bs=new BoardState();
  bs.initialize("empty");
  
  Object.keys(btmp.positions).forEach(function (pos) {
    var pobj=btmp.positions[pos];
    pobj.__proto__=piece.prototype;
    var pnew=bs.add_piece(pobj.toString(),pobj.position.toString());
    for(var k in pobj){
      if(k=="position")
        continue;
      pnew[k]=pobj[k];
    }
  });
  
  bs.turn=btmp.turn;
  
  return bs;
};

board_util.configure();

module.exports=BoardState;
