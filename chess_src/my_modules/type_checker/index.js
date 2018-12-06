// Generated by CoffeeScript 1.9.1
(function() {
  var assert, gen_type_enf, o, tk, ts, type_str;

  assert = require('assert');

  o = {};

  type_str = {};

  type_str.string = typeof "";

  type_str.number = typeof 1;

  type_str["function"] = typeof (function() {});

  type_str.object = typeof {};

  type_str.undefined = typeof void 0;

  type_str.boolean = typeof true;

  gen_type_enf = function(ts, tk) {
    return function(a) {
      assert(arguments.length === 1, "Wrong number of arguments");
      assert(typeof a === ts, "Not of type " + tk);
      return a;
    };
  };

  for (tk in type_str) {
    ts = type_str[tk];
    o[tk] = gen_type_enf(ts, tk);
  }
  
  o.array=function (a) {
    assert(arguments.length === 1, "Wrong number of arguments");
    assert(Array.isArray(a), "Not type array");
    return a;
  };

  o.object = function(a) {
    assert(arguments.length === 1, "Wrong number of arguments");
    assert(type_str.object === typeof a, "Not type object");
    assert(a !== null, "Null object");
    return a;
  };

  o.number = function(a) {
    assert(arguments.length === 1, "Wrong number of arguments");
    assert(type_str.number === typeof a, "Not type number");
    o.not_nan(a);
    return a;
  };

  o.not_nan = function(a) {
    assert(arguments.length === 1, "Wrong number of arguments");
    assert(!isNaN(a), "NaN number");
    return a;
  };

  o["null"] = function(a) {
    assert(arguments.length === 1, "Wrong number of arguments");
    assert(a === null, "not null");
    return a;
  };

  o.define_interface = function(interface_def, sub_interface_defs) {
    var cobj, e, interface_obj, k, sint;
    assert(arguments.length > 0, "Wrong number of arguments");
    assert(arguments.length < 3, "Wrong number of arguments");
    interface_obj = {
      type: "interface",
      required_keys: {}
    };
    for (k in interface_def) {
      cobj = interface_def[k];
      interface_obj.required_keys[k] = typeof cobj;
    }
    if (sub_interface_defs != null) {
      o.object(sub_interface_defs);
      for (k in sub_interface_defs) {
        sint = sub_interface_defs[k];
        o.undefined(interface_obj.required_keys[k]);
        
        o.is_valid_interface(sint);
        interface_obj.required_keys[k] = sint;
      }
    }
    return interface_obj;
  };

  o.is_valid_interface = function(iobj) {
    var k, ref, v;
    assert(arguments.length === 1, "Wrong number of arguments");
    o.object(iobj);
    o.string(iobj.type);
    o.object(iobj.required_keys);
    assert(Object.keys(iobj).length === 2);
    assert(iobj.type === "interface");
    ref = iobj.required_keys;
    for (k in ref) {
      v = ref[k];
      if (typeof v === type_str.string) {
        continue;
      }
      if (o.is_valid_interface(v)) {
        continue;
      }
      throw new Error("invalid interface value at key " + k);
    }
    return true;
  };

  o.coerce_number = function(s) {
    assert(arguments.length === 1, "Wrong number of arguments");
    if (typeof s === type_str.number) {
      o.number(s);
      return s;
    } else if (typeof s === type_str.string) {
      s = parseFloat(s);
      o.number(s);
    } else {
      throw new Error("could not coerce");
    }
    return s;
  };

  o.coerce_string = function(s) {
    assert(arguments.length === 1, "Wrong number of arguments");
    if (typeof s === type_str.number) {
      s = s + "";
    } else if (typeof s === type_str.object) {
      s = JSON.stringify(s);
    }
    o.string(s);
    return s;
  };

  o.uses_interface = function(to_test, interface_obj) {
    var e, k, ref, v;
    assert(arguments.length === 2, "Wrong number of arguments");
    o.object(to_test);
    
    o.is_valid_interface(interface_obj);
    
    ref = interface_obj.required_keys;
    for (k in ref) {
      v = ref[k];
      if (typeof v === type_str.string) {
        assert(typeof to_test[k] === v, "Invalid Type for key: " + k);
      } else if (typeof v === type_str.object) {
        o.is_valid_interface(v);
        o.uses_interface(to_test[k], v);
      } else {
        throw new Error("invalid interface def");
      }
    }
    return true;
  };

  module.exports = o;

}).call(this);