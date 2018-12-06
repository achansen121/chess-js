const ParseTree = require('less/index').ParseTree;
const Ruleset = require('less/index').tree.Ruleset;

const no = [{
  selectors: {
    value: null, writable: true, enumerable: true, configurable: true,
  },
  rules: {
    value: { indexed: 1 }, writable: true, enumerable: true, configurable: true,
  },
  _lookups: {
    value: { indexed: 2 }, writable: true, enumerable: true, configurable: true,
  },
  strictImports: { writable: true, enumerable: true, configurable: true },
  root: {
    value: true, writable: true, enumerable: true, configurable: true,
  },
  firstRoot: {
    value: true, writable: true, enumerable: true, configurable: true,
  },
}, {
  selectors: {
    value: null, writable: true, enumerable: true, configurable: true,
  },
  rules: {
    value: { indexed: 1 }, writable: true, enumerable: true, configurable: true,
  },
  _lookups: {
    value: { indexed: 0 }, writable: true, enumerable: true, configurable: true,
  },
  strictImports: { writable: true, enumerable: true, configurable: true },
  root: {
    value: true, writable: true, enumerable: true, configurable: true,
  },
  firstRoot: {
    value: true, writable: true, enumerable: true, configurable: true,
  },
}, {
  selectors: {
    value: null, writable: true, enumerable: true, configurable: true,
  },
  rules: {
    value: { indexed: 1 }, writable: true, enumerable: true, configurable: true,
  },
  _lookups: {
    value: { indexed: 2 }, writable: true, enumerable: true, configurable: true,
  },
  strictImports: { writable: true, enumerable: true, configurable: true },
  root: {
    value: true, writable: true, enumerable: true, configurable: true,
  },
  firstRoot: {
    value: true, writable: true, enumerable: true, configurable: true,
  },
}];
const pnames = ['Object', 'Array', 'Ruleset'];
const proto_labels = ['ParseTree', 'Ruleset', 'Object', 'String', 'Array'];
const known_proto = [ParseTree.prototype, Ruleset.prototype, Object.prototype, String.prototype, Array.prototype];
const pmap = {};
for (const i in no) {
  const obj = no[i];
  for (const k in obj) {
    if (typeof obj[k].value === typeof {} && obj[k].value !== null) {
      if (typeof obj[k].value.indexed !== typeof 1) console.log(obj[k]);
      obj[k].value = pmap[obj[k].value.indexed];
    }
  }
  console.log(i);
  console.log(pnames[i]);
  pmap[i] = Object.create(known_proto[proto_labels.indexOf(pnames[i])], obj);
}
const ptree = pmap[2];
console.log(ptree);
console.log(ptree.__proto__ == ParseTree.__proto__);
module.exports = ptree.toCSS({});
console.log('ptreebelow');
const ptxt = ptree.toCSS({});
console.log(`${typeof ptxt} ${ptxt.length}`);
console.log(ptxt);
