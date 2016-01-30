
var assert=require("assert");
var dcopy=require("dcopy");

module.exports=function clone() {
  var me=this;
  
  var board_state=Object.getPrototypeOf(this).constructor;
  
  var bcopy=new board_state();
  bcopy.initialize("empty");
  bcopy.turn=this.turn;
  
  assert(Object.keys(this.positions).length,"Copying none?")
  
  Object.keys(this.bypid).forEach(function (pid) {
    var pobj=me.bypid[pid];
    var pos=pobj.position ? pobj.position.toString() : null;
    
    if(pos===null)
      assert(pobj.taken);
    
    var pcopy=new piece(pobj.toString())
    
    Object.keys(pobj).forEach(function (pkey) {
      var pv=pobj[pkey];
      if(typeof pv==typeof ""||typeof pv==typeof 1||typeof pv==typeof true)
        pcopy[pkey]=pobj[pkey];
    });
    
    assert(pobj.id);
    assert(pcopy.id);
    assert(pobj.id==pcopy.id)
    
    bcopy.add_piece(pcopy,pos);
    
    assert(bcopy.bypid[pcopy.id]==pcopy)
    assert(pobj.id==pcopy.id)
  });
  
  bcopy.taken=dcopy(me.taken);
  bcopy.history=dcopy(me.history);
  
  
  assert(this.compare(bcopy));
  
  return bcopy;
};

