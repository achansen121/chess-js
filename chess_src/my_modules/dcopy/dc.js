
const assert = require('assert');

const type_checker = require('type_checker');


const ontype = {};

let copy_obj_rec;

const primitive = function (o, no, k, v) {
  no[k] = v;
  return true;
};


ontype[typeof {}] = function (o, no, k, v, sn, msn) {
  if (v === null) return primitive.apply(this, arguments);
  no[k] = copy_obj_rec(v, sn, msn);
  return true;
};
ontype[typeof function () {}] = function (o, no, k, v, sn, msn) {
  return true;
};
ontype[typeof undefined] = primitive;
ontype[typeof 1] = primitive;
ontype[typeof ''] = primitive;
ontype[typeof true] = primitive;

copy_obj_rec = function (o, seen, mycopy) {
  type_checker.object(o);
  type_checker.array(seen);
  type_checker.array(mycopy);

  const si = seen.indexOf(o);
  if (si >= 0) return mycopy[si];

  let no;
  if (Array.isArray(o)) no = [];
  else no = {};

  seen.push(o);
  mycopy.push(no);

  Object.keys(o).forEach((k) => {
    const v = o[k];
    const ts = (typeof o[k]);

    assert(ts in ontype);
    ontype[ts](o, no, k, v, seen, mycopy);
  });
  return no;
};

const copy_object = function (o) {
  return copy_obj_rec(o, [], []);
};


module.exports = copy_object;
