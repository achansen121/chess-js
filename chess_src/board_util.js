
const path = require('path');

const assert = require('assert');
const type_checker = require('type_checker');
const piece = require('./piece.js');
var position = require('./position.js');
var position = require('./position.js');

const bconstants = require('./board_constants.js');

const bu = {};


bu.configure = function () {
  piece.configure(bu.pconfig);
  position.configure(bu.pconfig);
};


bu.to_pos = function (cd) {
  type_checker.string(cd);
  const r = new RegExp(`^([${[0, bu.size - 1].map(offset => String.fromCharCode(bconstants.acode + offset)).join('-')}])` + '(\\d+)$', 'gi');

  const m = r.exec(cd);
  if (!m) throw new Error('parse position error');
  const p = new position(m[1], m[2]);
  assert(p.toString() == cd);
  return p;
};


bu.opposite_color = function (cone) {
  assert(bconstants.options.valid_colors[cone]);
  const call = Object.keys(bconstants.options.valid_colors);
  for (let i = 0; i < call.length; i++) {
    if (call[i] != cone) return call[i];
  }
  throw new Error('not found');
};
bu.pconfig = {
  board_util: bu,
  valid_colors(n) {
    return !!(bconstants.options.valid_colors[n]);
  },
  valid_names(n) {
    return !!(bconstants.options.valid_names[n]);
  },
  size: bconstants.size,
};


module.exports = bu;
