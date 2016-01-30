var fs=require("fs");
var fb=fs.readFileSync("./board.less","utf8");
var fmid=fb.split("\n").map(function(line){
  var ltmp=line.trim();
  if(/\/\//gi.test(ltmp))
    return "";
  return ltmp;
}).join("\n");
var mtxt=fmid.replace(/\s+/gi," ");
fs.writeFileSync("./board.min.less",mtxt)
