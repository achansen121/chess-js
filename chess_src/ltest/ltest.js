var less=require("less/index");
var ParseTree=less.ParseTree;
var Ruleset=less.tree.Ruleset;

var fs=require("fs");
var util=require("util")
var assert=require("assert");

var nextthrow=function (e) {
  process.nextTick(function () {
    throw e;
  });
};

var lp=fs.readFileSync("./board.min.less");
less.parse(lp.toString(),{compress:true})
.then(function(d){
  
  var known_proto=[ParseTree.prototype,Ruleset.prototype,Object.prototype,String.prototype,Array.prototype];
  var known_proto_str="[ParseTree.prototype,Ruleset.prototype,Object.prototype,String.prototype,Array.prototype]"
  var proto_labels=[
    "ParseTree",
    "Ruleset",
    "Object",
    "String",
    "Array",
  ];
  
  var no=[];
  var pnames=[];
  
  var seen=[];
  var onobj=function (o,kl) {
    var sindex=seen.indexOf(o);
    if(sindex>=0){
      return sindex;
    }
    seen.push(o);
    var which=known_proto.indexOf(o.__proto__);
    var pname=proto_labels[which];
    assert(pname);
    
    if(which<0){
      console.error("unknown proto"+kl);
      console.error(o)
      console.error(kl.__proto__.constructor.toString());
      // nextthrow(new Error("unknown proto"))
      return false;
    }
    
    
    var co={};
    for(var k in d){
      co[k]=Object.getOwnPropertyDescriptor(d,k);
      if(typeof co[k]==typeof undefined){
        continue;
      }
      if(typeof co[k].value==typeof {}&&co[k].value!==null){
        var sub_i=onobj(co[k].value,kl+"."+k);
        if(sub_i===false)
          return false;
        co[k].value={indexed:sub_i}
      }
      
    }
    assert(no.length==pnames.length);
    var index=no.length;
    no.push(co);
    pnames.push(pname);
    return index;
  };
  // console.log(known_proto.indexOf(d.__proto__));
  // console.error("what");
  var ifinal=onobj(d,"");
  
  if(ifinal===false)
    return console.error('was false');
  
  var pi=pnames[ifinal];
  console.error(d.__proto__===Ruleset.prototype);
  console.error(pnames);
  // assert(known_proto[pi]==ParseTree.prototype,pi+" or "+ifinal+" is wrong");
  // console.log(pnames[ifinal
  // console.error(pnames.length+" objects copied");
  var js="";
  var indent="";
  var j=function (txt) {
    js+=indent+txt+"\n";
  };
  var twoin=function () {
    indent+="  "
  };
  var twoout=function () {
    indent=indent.substr(2)
  };
  j("var ParseTree="+'require("less/index").ParseTree;')
  j("var Ruleset="+'require("less/index").tree.Ruleset;')
  j("var no="+JSON.stringify(no)+";")
  j("var pnames="+JSON.stringify(pnames)+";")
  j("var proto_labels="+JSON.stringify(proto_labels)+";");
  j("var known_proto="+known_proto_str+";")
  j("var pmap={};")
  j("for(var i in no){");twoin();
    j("var obj=no[i];");twoin();
    j("for(var k in obj){");
      j("if(typeof obj[k].value==typeof {}&&obj[k].value!==null){");twoin();
        j("if(typeof obj[k].value.indexed!=typeof 1)");twoin();
          j("console.log(obj[k]);");twoout();
        j("obj[k].value=pmap[obj[k].value.indexed];}");twoout();twoout();
    j("}")
    j("console.log(i);")
    j("console.log(pnames[i]);")
    j("pmap[i]=Object.create(known_proto[proto_labels.indexOf(pnames[i])],obj);");twoout();
  j("}")
  
  j("var ptree=pmap["+ifinal+"];")
  j("console.log(ptree);")
  j("console.log(ptree.__proto__==ParseTree.__proto__);");
  j("module.exports=ptree.toCSS({});")
  j("console.log(\"ptreebelow\");")
  j("var ptxt=ptree.toCSS({});");
  j("console.log(typeof ptxt+\" \"+ptxt.length);");
  j("console.log(ptxt);")
  console.log(js);
})
.then(function () {
  
},function (err) {
  if(err && err.stack)
    console.error(String(err.stack))
  else
    console.error(String(err))
})
