const type_checker = require('type_checker');
const assert = require('assert');
const board_util = require('../board_util.js');
const piece = require('../piece.js');
const position = require('../position.js');

const perform_move_known_keys = (function () {
  const o = {};
  'from,to,skipverify,rook_from,rook_to,castle,promo,enpassant,target,isjump,undoable'.split(',')
    .forEach((k) => {
      o[k] = true;
    });
  return o;
}());

module.exports = function perform_move(mvdesc) {
  type_checker.object(mvdesc);

  Object.keys(mvdesc).forEach((k) => {
    assert(perform_move_known_keys[k], `Unknown key ${k}`);
  });


  const uclone = false;
  if (mvdesc.undoable) {
    this.supressemit += 1;
  }

  const from = new position(mvdesc.from);
  const to = new position(mvdesc.to);

  let sourcepiece = this.positions[from.toString()];
  assert(sourcepiece, `no piece found at ${from}`);
  if (sourcepiece.color !== this.turn) {
    const e = new Error(`${sourcepiece} piece at ${sourcepiece.position}, turn is ${this.turn}`);
    console.log(sourcepiece, this.history, this.turn, mvdesc);
    throw e;
  }

  if (!mvdesc.skipverify) {
    const possible = this.valid_moves_by_pos(from);
    const notfound = possible.every((e) => {
      if (e.toString() == to.toString()) return false;
      return true;
    });
    if (notfound) throw new Error('invalid move?');
  }
  let targetpiece = null;
  targetpiece = this.positions[to.toString()];
  if (mvdesc.enpassant) {
    assert(!targetpiece);
    assert(mvdesc.target);
    targetpiece = this.positions[mvdesc.target.toString()];
  }
  let target_loc = null;
  if (targetpiece) {
    target_loc = targetpiece.position.toString();
    this.remove_piece(targetpiece);
    this.taken.push(targetpiece.id);

    targetpiece.taken = true;
  }
  if (mvdesc.isjump) {
    sourcepiece.jumped = true;
  }
  const original = new piece(sourcepiece.toString());

  this.move_piece(sourcepiece, to);

  let prepromo_id = null;
  if (mvdesc.promo) {
    assert(sourcepiece.id);
    prepromo_id = sourcepiece.id;
    sourcepiece = this.promote(sourcepiece, mvdesc.promo);
  }
  let rookpiece = null;
  if (mvdesc.castle) {
    const castlekey = `${sourcepiece.color} castled`;
    assert(!this[castlekey]);

    this[castlekey]++;

    assert(mvdesc.rook_to && mvdesc.rook_from);
    rookpiece = this.positions[mvdesc.rook_from.toString()];
    assert(rookpiece);
    this.move_piece(rookpiece, mvdesc.rook_to);

    rookpiece.moved += 1;
  }
  sourcepiece.moved += 1;


  let notation = original.unicode() + from.notation();
  if (targetpiece) {
    notation += 'x';
  } else notation += '-';
  notation += to.notation();

  let desc = `${original} ${from} to ${to}`;
  if (targetpiece) desc += ` takes ${targetpiece}`;
  if (mvdesc.castle) {
    desc += ' castling';
  }
  if (mvdesc.promo) {
    desc += ` promote to ${mvdesc.promo}`;
  }

  // assert(targetpiece.id&&sourcepiece.id)
  const hentry = {
    desctxt: desc,
    mvdesc,
    notation,
  };
  if (sourcepiece) {
    assert(sourcepiece.id);
    hentry.source_id = sourcepiece.id;
  }
  if (rookpiece) {
    assert(rookpiece.id);
    hentry.rook_id = rookpiece.id;
  }
  if (prepromo_id) {
    hentry.prepromo_id = prepromo_id;
  }
  if (targetpiece) {
    assert(targetpiece.id);
    assert(target_loc);
    hentry.target_loc = target_loc;
    hentry.target_id = targetpiece.id;
  }
  if (uclone) {
    // console.log("saving clone ",uclone)
    hentry.uclone = uclone;
  }
  this.history.push(hentry);

  if (!this.supressemit) this.emit('movedesc', desc, mvdesc, notation);

  this.turn = board_util.opposite_color(this.turn);

  return true;
};
