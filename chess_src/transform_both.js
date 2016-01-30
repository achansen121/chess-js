
var brfs=require("brfs");
var lessify=require("node-lessify")
var bd=require("browserify-data")
var through=require("through");
var fs=require("fs");


module.exports=function (file,package_options) {
  console.log("transforming "+file)
  if(/\.yaml$/gi.test(file)) {
    return bd.apply(this,arguments);
  }
  if(/\.(css|less)$/gi.test(file)) {
    return lessify(file,{textMode:true});
  }
  if(/\.svg$/gi.test(file)){
    var getstream;
    getstream=through();
    var actualwrite=getstream.write;
    var actualend  =getstream.end;
    var svg="";
    getstream.write=function(d){
      svg+=d;
    };
    getstream.end=function(){
      actualwrite.call(getstream,"module.exports="+JSON.stringify(svg)+";");
      actualend.call(getstream);
    };
    return getstream;
  }
  if(/\.js$/gi.test(file)){
    
    var lst=lessify(file,{textMode:true});
    var bst=brfs.apply(this,arguments);
    
    var getstream;
    getstream=through();
    
    
    bst.on("error",function (err) {
      getstream.emit("error",err);
    })
    
    var actualwrite=getstream.write;
    var actualend=getstream.end;
    
    getstream.write=function (data) {
      var rval=lst.write(data);
      if(!rval){
        getstream.pause();
        lst.once("drain",function () {
          getstream.resume();
        });
      }
    };
    
    getstream.end=function (end) {
      lst.end();
    };
    
    
    lst.pipe(bst)
    
    bst.on("data",function (data) {
      var rval=actualwrite.call(getstream,data);
      if(!rval){
        bst.pause();
        getstream.once("drain",function () {
          bst.resume();
        });
      }
    });
    bst.on("end",function () {
      return actualend.apply(getstream,arguments);
    })
    
    return getstream;
    
  }
  return through();
};



