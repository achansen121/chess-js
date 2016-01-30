var type_checker=require("type_checker");
var board_util=require("../board_util.js");
var assert=require("assert")
var piece=require("../piece.js")
var position=require("../position.js")
var bconstants=require("../board_constants.js");

module.exports=function valid_moves_by_color (cwhich,skipkingcheck) {
  type_checker.string(cwhich)
  var me=this;
  assert(bconstants.options.valid_colors[cwhich])
  
  var cpos=this.bycolor[cwhich]
  var mvall=[]
  Object.keys(cpos).forEach(function (pstr) {
    var p=cpos[pstr]
    if(!p)
      return;
    var mvnew=me.valid_moves_by_pos(pstr,skipkingcheck)
    
    mvall.push.apply(mvall,mvnew);
  })
  
  return mvall;
};

