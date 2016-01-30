var ParseTree=require("less/index").ParseTree;
var Ruleset=require("less/index").tree.Ruleset;
var no=[{"selectors":{"value":null,"writable":true,"enumerable":true,"configurable":true},"rules":{"value":{"indexed":1},"writable":true,"enumerable":true,"configurable":true},"_lookups":{"value":{"indexed":2},"writable":true,"enumerable":true,"configurable":true},"strictImports":{"writable":true,"enumerable":true,"configurable":true},"root":{"value":true,"writable":true,"enumerable":true,"configurable":true},"firstRoot":{"value":true,"writable":true,"enumerable":true,"configurable":true}},{"selectors":{"value":null,"writable":true,"enumerable":true,"configurable":true},"rules":{"value":{"indexed":1},"writable":true,"enumerable":true,"configurable":true},"_lookups":{"value":{"indexed":0},"writable":true,"enumerable":true,"configurable":true},"strictImports":{"writable":true,"enumerable":true,"configurable":true},"root":{"value":true,"writable":true,"enumerable":true,"configurable":true},"firstRoot":{"value":true,"writable":true,"enumerable":true,"configurable":true}},{"selectors":{"value":null,"writable":true,"enumerable":true,"configurable":true},"rules":{"value":{"indexed":1},"writable":true,"enumerable":true,"configurable":true},"_lookups":{"value":{"indexed":2},"writable":true,"enumerable":true,"configurable":true},"strictImports":{"writable":true,"enumerable":true,"configurable":true},"root":{"value":true,"writable":true,"enumerable":true,"configurable":true},"firstRoot":{"value":true,"writable":true,"enumerable":true,"configurable":true}}];
var pnames=["Object","Array","Ruleset"];
var proto_labels=["ParseTree","Ruleset","Object","String","Array"];
var known_proto=[ParseTree.prototype,Ruleset.prototype,Object.prototype,String.prototype,Array.prototype];
var pmap={};
for(var i in no){
  var obj=no[i];
    for(var k in obj){
    if(typeof obj[k].value==typeof {}&&obj[k].value!==null){
      if(typeof obj[k].value.indexed!=typeof 1)
        console.log(obj[k]);
      obj[k].value=pmap[obj[k].value.indexed];}
  }
  console.log(i);
  console.log(pnames[i]);
  pmap[i]=Object.create(known_proto[proto_labels.indexOf(pnames[i])],obj);
}
var ptree=pmap[2];
console.log(ptree);
console.log(ptree.__proto__==ParseTree.__proto__);
module.exports=ptree.toCSS({});
console.log("ptreebelow");
var ptxt=ptree.toCSS({});
console.log(typeof ptxt+" "+ptxt.length);
console.log(ptxt);

