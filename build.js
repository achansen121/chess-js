#!/usr/bin/env node

var cp=require("child_process");
var assert=require("assert");
var path=require("path");
var fs=require("fs");
var util=require("util")

var browserify=require("browserify");
var watchify=require("watchify");
var fs=require("fs");

var outfile=path.join(__dirname,"static","js.js");
var out_map=path.join(__dirname,"static","js.js.map");
var entry=path.join(__dirname,"chess_src","chess.js");
var logerr=function(err){
  if(err)
    console.error(err);
};

var continuous=function () {
  process.chdir(path.join(__dirname,"chess_src"))
  
  var b=browserify(entry,{cache:{},packageCache:{},debug:false});
  
  b.require("./minassert.js",{expose:"assert"});
  
  var w=watchify(b);
  var info={};
  info.path=outfile;
  w.on("time",function (_time) {
    info.time=_time;
  })
  var bundle=function () {
    delete info.time;
    delete info.bytes;
    delete info.error;
    
    console.error("bundle called")
    info.bytes=0;
    info.buf="";
    
    var wb=w.bundle();
    
    wb.on("error",function (err) {
      info.error=err;
      fw.writeFile(outfile,"console.error("+JSON.stringify(String(err))+");",logerr);
      console.error(String(err));
    });
    wb.on("data",function (buf) {
      info.bytes+=Buffer.byteLength(String(buf),"utf8")
      info.buf+=buf;
    })
    .on("end",function(){
      fs.writeFile(outfile,info.buf,logerr);
      console.error("Write "+info.bytes+" to "+outfile+" in "+info.time);
    })
  };
  w.on("update",bundle)
  bundle();
};

if(require.main==module){
  continuous();
}
  
  
