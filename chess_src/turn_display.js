
var window=(function(){return this;})();
var document=window.document;
var assert=require('assert')

var d_turn=function (bs) {
  
  var div=this.div=document.createElement("div");
  div.className="turn_display";
  
  var turn_title=document.createElement("h6");
  turn_title.appendChild(document.createTextNode("Turn"))
  
  
  var tdisplay=this.tdisplay=document.createElement("div");
  
  [turn_title,tdisplay].forEach(function (e) {
    div.appendChild(e);
  })
  // div.appendChild();
  
  var update=function () {
    var turn = bs.turn.toString();
    turn = turn.substr(0,1).toUpperCase()+turn.substr(1).toLowerCase();
    tdisplay.innerHTML="";
    tdisplay.appendChild(document.createTextNode(turn));
  };
  // bs.on("initialize",update);
  bs.on("movedesc",update);
  bs.on("animated",update);
  process.nextTick(update);
};

d_turn.prototype.attach=function (parent) {
  var me=this;
    parent.appendChild(me.div);
  return;
};
d_turn.prototype.detach=function (parent) {
  return parent.removeChild(this.div);
};

module.exports=d_turn;
