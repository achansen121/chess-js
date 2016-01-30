var type_checker=require("type_checker");
var board_util=require("../board_util.js");
var assert=require("assert")
var piece=require("../piece.js")
var position=require("../position.js")

module.exports=function undo_move () {
  assert(arguments.length==0)

  var pmove=this.history.pop();
  
  // assert(pmove.uclone);
  if(pmove.uclone)
    assert(Object.keys(pmove.uclone).length)
  
  var mvdesc=pmove.mvdesc;
  
  var sid=pmove.source_id;
  assert(sid && sid in this.bypid);
  
  var tid=pmove.target_id;
  
  var tobj;
  
  if(tid){
    tobj=this.bypid[tid];
    assert(tobj.taken);
    delete tobj.taken;
  }
  var sobj=this.bypid[sid];
  
  if(mvdesc.promo){
    var preo=this.bypid[pmove.prepromo_id];
    
    assert(preo,"per obj");
    assert(preo.moved,"pre obj had not moved?")
    assert(sobj.moved,"post obj had not moved?")
    this.forget_piece(sobj);
    this.add_piece(preo,pmove.mvdesc.from)
    sobj=preo;
    // sobj.moved--;
    assert(sobj.moved,"obj had not moved?")
  } else{
    assert(sobj.moved>0)
    
    sobj.moved--;
    if(mvdesc.isjump)
      delete sobj.jumped;
    this.move_piece(sobj,mvdesc.from.toString());
  }
  
  if(mvdesc.castle){
    
    var castlekey=sobj.color+" castled";
    this[castlekey]--;
    assert(this[castlekey]===0);
    
    assert(mvdesc.rook_from&&mvdesc.rook_to)
    var rook=this.positions[mvdesc.rook_to.toString()];
    assert(rook);
    this.move_piece(rook,mvdesc.rook_from)
    rook.moved--;
    assert(rook.moved==0)
  }
  
  if(tobj){
    assert(pmove.target_loc);
    
    assert(this.taken[this.taken.length-1]==tobj.id)
    this.taken.pop();
    delete tobj.taken;
    this.add_piece(tobj,pmove.target_loc);
  }

  this.turn=board_util.opposite_color(this.turn);
  
  if(pmove.uclone)
    assert(this.compare(pmove.uclone));
  
  this.supressemit-=1;
  
  return true;
};
var prev=null;
