var type_checker=require("type_checker");
var board_util=require("../board_util.js");
var assert=require("assert")
var piece=require("../piece.js")
var position=require("../position.js")

module.exports=function check_check (color) {
  var kingloc=this.bycolortype[color+" king"];
  var myking,kpos;
  myking=false;
  Object.keys(kingloc).forEach(function (kcoor) {
    assert(!myking);
    myking=kingloc[kcoor];
    kpos=new position(kcoor);
  })
  assert(myking);
  
  var preh=this.history.length;
  
  
  var oppc=board_util.opposite_color(color);
  var vmc=this.valid_moves_by_color(oppc,true);
  
  var kposstr=kpos.toString();
  
  var kingsafe=vmc.every(function (mv) {
    if(mv.to.toString()==kposstr)
      return false;
    if(mv.target&&mv.target.toString()==kposstr)
      return false;
    return true;
  });
  assert(this.history.length==preh,"something mvoed")
  
  if(!kingsafe)
    return true;
  return false;
}

