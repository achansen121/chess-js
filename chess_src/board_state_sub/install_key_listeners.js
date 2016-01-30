

var window=(function(){return this;})();
var keycode=require("keycode");
var assert=require("assert");

var position=require("../position.js");

var kmap={};
var keymove=function (direction,dx,dy) {
  return function(event){
    var ae=document.activeElement;
    var dc=ae.getAttribute("data-coord");
    if(!dc)
      return;
    event.preventDefault();
    // console.log("arrow move");
    var pos=new position(dc);
    var npos=new position({
      x:(pos.x-1+dx+8)%8+1,
      y:(pos.y-1+dy+8)%8+1,
    });
    var mall=be.querySelectorAll("button[data-coord=\""+npos+"\"]");
    var last=mall[mall.length-1];
    last.focus();
  };
};
kmap[keycode("up")]=keymove("up",0,-1);
kmap[keycode("down")]=keymove("down",0,1);
kmap[keycode("left")]=keymove("left",-1,0);
kmap[keycode("right")]=keymove("right",1,0);

var install_key_listeners=function () {
  assert(!this.key_listeners_installed);
  this.key_listeners_installed=true;
  
  var document=window.document;
  
  document.addEventListener("keydown",function (event) {
    if(event.keyCode in kmap){
      kmap[event.keyCode](event);
    }
  },false);
};

module.exports=install_key_listeners;

