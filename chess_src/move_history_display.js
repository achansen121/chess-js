
var window=(function(){return this;})();
var document=window.document;
var assert=require('assert')

var d_history=function (bs) {
  
  var div=this.div=document.createElement("div");
  div.className="move_history";
  var ihave=this.history=[];
  
  var mvtitle=document.createElement("h6");
  mvtitle.appendChild(document.createTextNode("Move History"))
  
  
  var mvsub=this.mvsub=document.createElement("div");
  
  [mvtitle,mvsub].forEach(function (e) {
    div.appendChild(e);
  })
  // div.appendChild();
  
  bs.on("movedesc",function (desctxt,mdesc,mnot) {
    var row=document.createElement("div");
    row.appendChild(document.createTextNode(mnot));
    mvsub.appendChild(row);
    mvsub.scrollTop=mvsub.scrollHeight;
  });
};

d_history.prototype.attach=function (parent) {
  var me=this;
    parent.appendChild(me.div);
  return;
};
d_history.prototype.detach=function (parent) {
  return parent.removeChild(this.div);
};

module.exports=d_history;
