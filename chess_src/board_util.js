
var path=require("path")

var piece=require("./piece.js");
var position=require("./position.js")
var assert=require("assert")
var type_checker=require("type_checker")
var position=require("./position.js")

var bconstants=require("./board_constants.js")

var bu={};


bu.configure=function () {
  piece.configure(bu.pconfig);
  position.configure(bu.pconfig);
};


bu.to_pos=function(cd){
  type_checker.string(cd)
  var r=new RegExp("^(["+[0,bu.size-1].map(function (offset) {
    return String.fromCharCode(bconstants.acode+offset)
  }).join("-")+"])"+"(\\d+)$","gi")
  
  var m=r.exec(cd)
  if(!m)
    throw new Error("parse position error");
  var p=new position(m[1],m[2])
  assert(p.toString()==cd)
  return p
};


bu.opposite_color=function (cone) {
  assert(bconstants.options.valid_colors[cone])
  var call=Object.keys(bconstants.options.valid_colors)
  for (var i = 0; i < call.length; i++) {
    if(call[i]!=cone)
      return call[i];
  };
  throw new Error("not found")
}
bu.pconfig={
  board_util:bu,
  valid_colors:function(n){
    return !!(bconstants.options.valid_colors[n])
  },
  valid_names:function(n){
    return !!(bconstants.options.valid_names[n])
  },
  size:bconstants.size
};



module.exports=bu;
