
var Picker=require("./game_picker.js")
var BoardState=require("./board_state.js");
var bot=require("./bot.js");

var window=(function(){return this;})();
var assert=require("assert")
var piece=require("./piece.js")
var position=require("./position.js")
var type_checker=require("type_checker")
var turn_display=require("./turn_display.js");

var history_display=require("./move_history_display.js")

var pickrandom=function(arr){
  return arr[Math.floor(Math.random()*arr.length)]
};
var append_to_body=function (bs,cb) {
  
  var window=(function(){return this;})();

  var body=document.querySelector("body");
  var be=bs.browser_element();
  
  var t_display=new turn_display(bs);
  var mvhistory=new history_display(bs);
  
  if(cb)
    type_checker.function(cb);
  
  var append=function () {
    if(!body)
      body=document.querySelector("body");
    body.appendChild(be);
    t_display.attach(body);
    mvhistory.attach(body);
    if(cb){
      cb();}
  };
  if(!document.body){
    document.addEventListener("DOMContentLoaded",append,false);
  } else
    append();
  
  return be;
};

var use_debug;
use_debug=function(){
  if(!("result" in use_debug))
    use_debug.result = use_debug.test();
  return use_debug.result;
};
use_debut.test=function(){
  var loc = window.location;
  if(!loc)
    return true;
  var hnm = loc.hostname;
  if(!hnm)
    return true;
  if(/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/gi.test(hnm))
    return true;
  return false;
};
var init_board=function (cb) {
  var bs=new BoardState()
  
  if(use_debug()){
    bs.debug=true;
    window.bs=bs;
  }
  bs.initialize();
  append_to_body(bs,function(){
    cb(bs);
  });
};

if(process.title==="browser"){
  var pdiv=document.createElement("div");
  var p=new Picker(pdiv);
  var inited=false;
  var bs=null;
  p.on("start",function (desc) {
    if(use_debug())
      console.log(desc,inited,bs)
    if(!inited)
      return;
    var keylistenersset=false;
    Object.keys(desc).forEach(function (color) {
      if(desc[color]=="Human"){
        bs.add_human(color);
        if(!keylistenersset){
          bs.install_key_listeners();
          keylistenersset=true;
        }
      }
      if(desc[color]=="Bot")
        var bt=new bot(bs,color);
    })
  })
  var start=function () {
    document.body.appendChild(pdiv);
    init_board(function (_bs) {
      inited=true;
      bs=_bs;
    })
  };
  if(!document.body)
    document.addEventListener("DOMContentLoaded",start,false);
  else
    start();
  
  window.require=require;
}

