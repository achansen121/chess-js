const type_checker = require('type_checker');
const assert = require('assert');
const board_util = require('../board_util.js');
const piece = require('../piece.js');
const position = require('../position.js');

module.exports = function check_check(color) {
  const kingloc = this.bycolortype[`${color} king`];
  let myking; let kpos;
  myking = false;
  Object.keys(kingloc).forEach((kcoor) => {
    assert(!myking);
    myking = kingloc[kcoor];
    kpos = new position(kcoor);
  });
  assert(myking);

  const preh = this.history.length;


  const oppc = board_util.opposite_color(color);
  const vmc = this.valid_moves_by_color(oppc, true);

  const kposstr = kpos.toString();

  const kingsafe = vmc.every((mv) => {
    if (mv.to.toString() == kposstr) return false;
    if (mv.target && mv.target.toString() == kposstr) return false;
    return true;
  });
  assert(this.history.length == preh, 'something mvoed');

  if (!kingsafe) return true;
  return false;
};
