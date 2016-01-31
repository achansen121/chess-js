
var window=(function(){return this;})();


var use_debug;
use_debug=function(){
  if(!("result" in use_debug))
    use_debug.result = use_debug.test();
  return use_debug.result;
};
use_debug.test=function(){
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

module.exports=use_debug;
