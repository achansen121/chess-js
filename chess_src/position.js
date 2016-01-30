
var assert=require("assert")
var type_checker=require("type_checker")
var config={
  
}
var check_square=function (n) {
  type_checker.number(config.size);
  if(isNaN(n)||n<1||n>config.size)
    throw new Error("error matching number for square")
}
var singlearg={}
singlearg[typeof ""]=function (pstr) {
  var xs=pstr.split("x")
  if(xs.length!=2)
    throw new Error("unparseable");
  return xs;
};
singlearg[typeof {}]=function (pobj) {
  type_checker.number(pobj.x)
  type_checker.number(pobj.y)
  return [pobj.x,pobj.y]
}

var position=function(xo,yo){
  var x,y;
  if(arguments.length==1){
    var xtype=typeof xo;
    if(xtype in singlearg){
      var both=singlearg[xtype](xo)
      x=parseInt(both[0]);
      y=parseInt(both[1]);
    }
  } else{
    x=parseInt(xo)
    y=parseInt(yo)
  }
  type_checker.number(x);
  type_checker.number(y);
  
  assert(config.configured)
  check_square(x);
  check_square(y);
  this.isposition=true;
  this.x=x;
  this.y=y;
};
var acode="A".charCodeAt();
position.prototype.notation=function () {
  return String.fromCharCode(acode+this.x-1)+this.y;
};
position.softfail_slow=function(x,y){
  try{
    return new position(x,y);
  }catch(e){
  }
  return false;
}
position.softfail=function (xo,yo) {
  var x,y;
  x=parseInt(xo);
  y=parseInt(yo);
  type_checker.number(x)
  type_checker.number(y)
  type_checker.number(config.size)
  if(x<1||x>config.size)
    return false;
  if(y<1||y>config.size)
    return false;
  return new position(x,y);
}
position.configure=function(c){
  if(config.configured)
    throw new Error("cannot config twice")
  type_checker.object(c);
  type_checker.number(c.size);
  config.configured=true
  config.size=c.size;
}
position.prototype.toString=function(){
  return this.x+"x"+this.y;
};
position.prototype.toJSON=position.prototype.toString;
position.prototype.inspect=function () {
  return JSON.stringify(this.toString());
};

module.exports=position;