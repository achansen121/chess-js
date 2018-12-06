const type_checker = require('type_checker');
const assert = require('assert');
const board_util = require('../board_util.js');
const piece = require('../piece.js');
const position = require('../position.js');
const bconstants = require('../board_constants.js');

module.exports = function valid_moves_by_color(cwhich, skipkingcheck) {
  type_checker.string(cwhich);
  const me = this;
  assert(bconstants.options.valid_colors[cwhich]);

  const cpos = this.bycolor[cwhich];
  const mvall = [];
  Object.keys(cpos).forEach((pstr) => {
    const p = cpos[pstr];
    if (!p) return;
    const mvnew = me.valid_moves_by_pos(pstr, skipkingcheck);

    mvall.push(...mvnew);
  });

  return mvall;
};
