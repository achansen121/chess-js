
var window=(function(){return this;})();
var document=window.document;
var EventEmitter=require("events").EventEmitter;
var util=require("util")
var sgen=require("gen2015-07")

var use_debug=require("./use_debug.js");

var gen=function (desc) {
  return sgen(document,desc);
};

var assert=require("assert");
var type_checker=require("type_checker");
var fstructure=require("./fstructure.yaml");

var fakeevent={preventDefault:function(){}};

var getremove=function (ele,key) {
  var v=ele.getAttribute(key);
  ele.removeAttribute(key);
  return v;
};

var generate=function (ee,prnt) {
  // fstructure.parent=prnt;
  
  var formtemp=fstructure.formtemplate;
  var sidetemp=fstructure.sidetemplate;
  
  formtemp.parent=prnt;
  
  var cstate={};
  
  var fobj=gen(formtemp);
  var sidelocs=[].slice.call(fobj.querySelectorAll(".aside"));
  sidelocs.forEach(function (loc) {
    sidetemp.forEach(function (spart) {
      loc.appendChild(gen(spart))
    })
    var whichside=getremove(loc,"data-side");
    
    var btns=[].slice.call(loc.querySelectorAll("button"));
    
    btns.forEach(function (btn,i) {
      var is = getremove(btn,"data-is");
      var become=getremove(btn,"data-become");
      var swap=function(){
        var tmp = is;
        is = become;
        become = tmp;
      };
      cstate[whichside]=is;
      var setcurrent=function (event) {
        event.preventDefault();
        btn.innerHTML="";
        btn.appendChild(document.createTextNode(become));
        cstate[whichside]=become;
        console.log(whichside+" is "+become);
        swap();
      };
      btn.addEventListener("click",setcurrent,false);
    });
  });
  var sbutton=fobj.querySelector(".start_game")
  sbutton.addEventListener("click",function (event) {
    event.preventDefault();
    ee.emit("start",cstate);
    console.log(cstate);
    ee.collapse();
  },false);
  
  return fobj;
};


var Picker=function (prnt) {
  EventEmitter.call(this);
  type_checker.object(prnt);
  type_checker.object(prnt.ownerDocument);
  assert(prnt.ownerDocument===document);
  
  var me=this;
  this.parent=prnt;
  var hobj=this.html_obj=generate(this,prnt);
  this.collapsing=false;
  this.expanding=false;
  this.collapsed=false;
  
  this.collapseable=hobj.querySelectorAll(".button_surround,.start_game_row")
  this.collapseable=[].slice.call(this.collapseable)
  process.nextTick(function(){
    assert(document.body.contains(me.html_obj))
  //   me.last_height=me.html_obj.clientHeight;
  //   me.html_obj.style.height=me.last_height+"px";
    me.collapseable.forEach(function (ele) {
      if(!ele.style.height)
        ele.style.height=ele.clientHeight+"px";
    })
  })
};


util.inherits(Picker,EventEmitter);
Picker.prototype.collapse=function () {
  var me=this;
  var hobj=this.html_obj;
  assert(!this.collapsing);
  assert(!this.expanding);
  assert(!this.collapsed)
  var to_c=this.collapseable;
  
  to_c.forEach(function (ele) {
    ele.style.height="0px"
  });
  
  // hobj.style.height=this.last_height+"px";
  // hobj.style.height="0px"
  this.collapsing=true;
  setTimeout(function () {
    if(me.collapsing){
      me.collapsed=true;
      me.collapsing=false;
    }
  },1E3);
};
Picker.prototype.expand=function () {
  assert(!this.collapsing);
  assert(this.collapsed);
  // this.html_obj.style.height=this.last_height+"px";
  this.expanding=true;
  this.collapseable.forEach(function (ele) {
    ele.style.height=ele.scrollHeight+"px";
  })
  setTimeout(function () {
    if(me.expanding){
      me.collapsed=false;
      me.expanding=false;
    }
  },1E3);
}

module.exports=Picker;
