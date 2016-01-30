
module.exports=function _checkall(note) {
  var me=this;
  Object.keys(this.positions).forEach(function (pos) {
    var piece=me.positions[pos];
    assert(piece===me.bycolortype[piece.toString()][pos],"match fail "+pos+" "+piece+"\n"+note);
  })
  return true;
};
