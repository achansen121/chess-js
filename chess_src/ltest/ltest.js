const less = require('less/index');

const ParseTree = less.ParseTree;
const Ruleset = less.tree.Ruleset;

const fs = require('fs');
const util = require('util');
const assert = require('assert');

const nextthrow = function (e) {
  process.nextTick(() => {
    throw e;
  });
};

const lp = fs.readFileSync('./board.min.less');
less.parse(lp.toString(), { compress: true })
  .then((d) => {
    const known_proto = [ParseTree.prototype, Ruleset.prototype, Object.prototype, String.prototype, Array.prototype];
    const known_proto_str = '[ParseTree.prototype,Ruleset.prototype,Object.prototype,String.prototype,Array.prototype]';
    const proto_labels = [
      'ParseTree',
      'Ruleset',
      'Object',
      'String',
      'Array',
    ];

    const no = [];
    const pnames = [];

    const seen = [];
    var onobj = function (o, kl) {
      const sindex = seen.indexOf(o);
      if (sindex >= 0) {
        return sindex;
      }
      seen.push(o);
      const which = known_proto.indexOf(o.__proto__);
      const pname = proto_labels[which];
      assert(pname);

      if (which < 0) {
        console.error(`unknown proto${kl}`);
        console.error(o);
        console.error(kl.__proto__.constructor.toString());
        // nextthrow(new Error("unknown proto"))
        return false;
      }


      const co = {};
      for (const k in d) {
        co[k] = Object.getOwnPropertyDescriptor(d, k);
        if (typeof co[k] === typeof undefined) {
          continue;
        }
        if (typeof co[k].value === typeof {} && co[k].value !== null) {
          const sub_i = onobj(co[k].value, `${kl}.${k}`);
          if (sub_i === false) return false;
          co[k].value = { indexed: sub_i };
        }
      }
      assert(no.length == pnames.length);
      const index = no.length;
      no.push(co);
      pnames.push(pname);
      return index;
    };
    // console.log(known_proto.indexOf(d.__proto__));
    // console.error("what");
    const ifinal = onobj(d, '');

    if (ifinal === false) return console.error('was false');

    const pi = pnames[ifinal];
    console.error(d.__proto__ === Ruleset.prototype);
    console.error(pnames);
    // assert(known_proto[pi]==ParseTree.prototype,pi+" or "+ifinal+" is wrong");
    // console.log(pnames[ifinal
    // console.error(pnames.length+" objects copied");
    let js = '';
    let indent = '';
    const j = function (txt) {
      js += `${indent + txt}\n`;
    };
    const twoin = function () {
      indent += '  ';
    };
    const twoout = function () {
      indent = indent.substr(2);
    };
    j('var ParseTree=' + 'require("less/index").ParseTree;');
    j('var Ruleset=' + 'require("less/index").tree.Ruleset;');
    j(`var no=${JSON.stringify(no)};`);
    j(`var pnames=${JSON.stringify(pnames)};`);
    j(`var proto_labels=${JSON.stringify(proto_labels)};`);
    j(`var known_proto=${known_proto_str};`);
    j('var pmap={};');
    j('for(var i in no){'); twoin();
    j('var obj=no[i];'); twoin();
    j('for(var k in obj){');
    j('if(typeof obj[k].value==typeof {}&&obj[k].value!==null){'); twoin();
    j('if(typeof obj[k].value.indexed!=typeof 1)'); twoin();
    j('console.log(obj[k]);'); twoout();
    j('obj[k].value=pmap[obj[k].value.indexed];}'); twoout(); twoout();
    j('}');
    j('console.log(i);');
    j('console.log(pnames[i]);');
    j('pmap[i]=Object.create(known_proto[proto_labels.indexOf(pnames[i])],obj);'); twoout();
    j('}');

    j(`var ptree=pmap[${ifinal}];`);
    j('console.log(ptree);');
    j('console.log(ptree.__proto__==ParseTree.__proto__);');
    j('module.exports=ptree.toCSS({});');
    j('console.log("ptreebelow");');
    j('var ptxt=ptree.toCSS({});');
    j('console.log(typeof ptxt+" "+ptxt.length);');
    j('console.log(ptxt);');
    console.log(js);
  })
  .then(() => {

  }, (err) => {
    if (err && err.stack) console.error(String(err.stack));
    else console.error(String(err));
  });
