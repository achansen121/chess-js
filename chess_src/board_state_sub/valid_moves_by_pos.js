var vmoves=require("../valid_moves.js");
var position=require("../position.js")
var assert=require("assert");

module.exports=function valid_moves_by_pos (pos,skipkingcheck) {
  pos=new position(pos);
  var me=this;
  var posstr=pos.toString()
  var piece=this.positions[posstr]
  if(!piece){
    throw new Error('no piece at '+posstr)
  }
  
  var piece_had_moved = piece.moved;
  
  prev="prev: "+piece+" "+pos+"";
  var pname=piece.pname;
  if(!vmoves[pname])
    throw new Error('not implemented for '+pname+' yet')
  
  var preh=this.history.length;
  var vcalc=vmoves[pname](this,piece,skipkingcheck)
  assert(this.history.length==preh,"something moved when "+pname+" was checked")
  
  var pc=piece.color;
  
  if(skipkingcheck)
    return vcalc;
  
  var bhinit=me.history.length;
  var lmv=me.history[me.history.length-1];
  
  var vnew=[]
  
  vcalc.forEach(function (mv,i) {
    assert(Object.keys(me.positions).length,"empty board?")
    // var bcopy=me.clone();
    // var targetpiece=bcopy.positions[mv.to.toString()]
    mv.skipverify=true;
    mv.undoable=true;
    
    if(bhinit!==me.history.length){
      console.log(lmv);
      throw new Error("History len should be "+bhinit+" is "+me.history.length)
    }
    if(me.turn!==pc){
      console.log(piece.toString())
      console.log(vcalc)
      console.log(me.history)
      throw new Error("not my turn? "+me.turn+" and "+pc+" index:"+i)
    }
    var hadmoved = piece.moved;
    me.perform_move(mv);
    if(bhinit+1!==me.history.length){
      console.log(bhinit)
      console.log(me.history)
      console.log(mv)
      console.log(bs);
      throw new Error("wrong len")
    }
    
    if(!me.check_check(piece.color)){
      var mnew={};
      Object.keys(mv).forEach(function (k) {
        if(k==="undoable")
          return;
        mnew[k]=mv[k];
      });
      vnew.push(mnew)
    }
    if(bhinit+1!==me.history.length){
      console.log(bhinit)
      console.log(me.history)
      console.log(mv)
      console.log(bs);
      throw new Error("wrong len")
    }
    me.undo_move();
    if(piece.moved!==hadmoved){
      console.log(mv);
    }
    assert(piece.moved===hadmoved,"piece.moved changed between doing and undoing ");
    
    if(bhinit!==me.history.length){
      console.log(bhinit)
      console.log(me.history)
      console.log(mv)
      console.log(bs);
      throw new Error("wrong len")
    }
    // assert(bhinit===me.history.length,"h should be same");
    // assert(me.compare(me));
  })

  assert(piece.moved === piece_had_moved,"piece_had_moved changed when getting valid moves")

  return vnew;
}
