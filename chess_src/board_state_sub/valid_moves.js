module.exports=function valid_moves () {
  var cwhich=this.turn;
  return this.valid_moves_by_color(cwhich);
};
