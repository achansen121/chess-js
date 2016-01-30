var type_checker=require("type_checker");
var board_util=require("../board_util.js");
var assert=require("assert")
var piece=require("../piece.js")
var position=require("../position.js")

var perform_move_known_keys=(function () {
  var o={};
  "from,to,skipverify,rook_from,rook_to,castle,promo,enpassant,target,isjump,undoable".split(",")
  .forEach(function (k) {
    o[k]=true;
  })
  return o;
})();

module.exports=function perform_move (mvdesc) {
  type_checker.object(mvdesc);
  
  Object.keys(mvdesc).forEach(function (k) {
    assert(perform_move_known_keys[k],"Unknown key "+k);
  });
  
  
  var uclone=false;
  if(mvdesc.undoable){
    this.supressemit+=1;
  }
  
  var from=new position(mvdesc.from);
  var to=new position(mvdesc.to);
  
  var sourcepiece=this.positions[from.toString()]
  assert(sourcepiece,"no piece found at "+from);
  if(sourcepiece.color!==this.turn){
    var e=new Error(sourcepiece+" piece at "+sourcepiece.position+", turn is "+this.turn);
    console.log(sourcepiece,this.history,this.turn,mvdesc)
    throw e;
  }
  
  if(!mvdesc.skipverify){
    var possible=this.valid_moves_by_pos(from)
    var notfound=possible.every(function (e) {
      if(e.toString()==to.toString())
        return false;
      return true;
    })
    if(notfound)
      throw new Error("invalid move?")
  }
  var targetpiece=null;
  targetpiece=this.positions[to.toString()]
  if(mvdesc.enpassant){
    assert(!targetpiece)
    assert(mvdesc.target)
    targetpiece=this.positions[mvdesc.target.toString()]
  }
  var target_loc=null;
  if(targetpiece){
    target_loc=targetpiece.position.toString();
    this.remove_piece(targetpiece)
    this.taken.push(targetpiece.id)
    
    targetpiece.taken=true
  }
  if(mvdesc.isjump){
    sourcepiece.jumped=true;
  }
  var original=new piece(sourcepiece.toString());
  
  this.move_piece(sourcepiece,to)
  
  var prepromo_id=null;
  if(mvdesc.promo){
    assert(sourcepiece.id);
    prepromo_id=sourcepiece.id;
    sourcepiece=this.promote(sourcepiece,mvdesc.promo);
  }
  var rookpiece=null;
  if(mvdesc.castle){
    
    var castlekey=sourcepiece.color+" castled";
    assert(!this[castlekey])
    
    this[castlekey]++;
    
    assert(mvdesc.rook_to&&mvdesc.rook_from)
    rookpiece=this.positions[mvdesc.rook_from.toString()];
    assert(rookpiece);
    this.move_piece(rookpiece,mvdesc.rook_to);
    
    rookpiece.moved+=1;
  }
  sourcepiece.moved+=1;
  
  
  var notation=original.unicode()+from.notation();
  if(targetpiece){
    notation+="x";
  } else
    notation+="-";
  notation+=to.notation();
  
  var desc=original+" "+from+" to "+to;
  if(targetpiece)
    desc+=" takes "+targetpiece;
  if(mvdesc.castle){
    desc+=" castling"
  }
  if(mvdesc.promo){
    desc+=" promote to "+mvdesc.promo;
  }
  
  // assert(targetpiece.id&&sourcepiece.id)
  var hentry={
    desctxt:desc,
    mvdesc:mvdesc,
    notation:notation,
  };
  if(sourcepiece){
    assert(sourcepiece.id);
    hentry.source_id=sourcepiece.id;
  }
  if(rookpiece){
    assert(rookpiece.id);
    hentry.rook_id=rookpiece.id;
  }
  if(prepromo_id){
    hentry.prepromo_id=prepromo_id;
  }
  if(targetpiece){
    assert(targetpiece.id);
    assert(target_loc)
    hentry.target_loc=target_loc;
    hentry.target_id=targetpiece.id;
  }
  if(uclone){
    // console.log("saving clone ",uclone)
    hentry.uclone=uclone;
  }
  this.history.push(hentry);
  
  if(!this.supressemit)
    this.emit("movedesc",desc,mvdesc,notation)
  
  this.turn=board_util.opposite_color(this.turn);
  
  return true;
};
