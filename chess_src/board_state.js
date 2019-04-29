
const type_checker = require('type_checker');
const assert = require('assert');

const path = require('path');
const fs = require('fs');
const EE = require('events').EventEmitter;
const util = require('util');

const dcopy = require('dcopy');
const position = require('./position.js');
const piece = require('./piece.js');

const board_util = require('./board_util.js');
const bconstants = require('./board_constants.js');


const window = (function () { return this; }());

const imgs = piece.imgs;
const indexes = 'bycolortype,bycolor,bycol,byrow,buttons,bypid'.split(',');

const BoardState = function () {
  EE.call(this);
  const me = this;
  this.animating = 0;
  this.positions = {};
  this.history = [];
  this.bycolor = {};
  this.bypid = {};
  this['white castled'] = 0;
  this['black castled'] = 0;
  this.isboard = true;
  this.bytype = {};
  this.supressemit = 0;
  this.turn = 'white';
  indexes.forEach((pname) => {
    me[pname] = {};
  });
};
util.inherits(BoardState, EE);
BoardState.prototype.animation_notify = function (t) {
  this.animating++;
  this.emit('animating');
  const me = this;
  setTimeout(() => {
    me.animating--;
    if (!me.animating) me.emit('animated');
  }, t * 1E3);
};

BoardState.prototype.add_piece = function (which, loc) {
  let pcode;
  if (typeof loc === typeof '') loc = new position(loc);
  if (loc !== null) type_checker.object(loc);

  let pobj;
  if (typeof which === typeof '') {
    which = which.toLowerCase();
    pobj = new piece(which);
  } else {
    pobj = which;
    which = pobj.toString();
  }

  if (!pobj.id) {
    const tryid = JSON.stringify([which, loc.toString(), this.history.length]);
    assert(!(tryid in this.bypid));
    this.bypid[tryid] = pobj;
    pobj.id = tryid;
  }
  if (pobj.id in this.bypid) {
    assert(this.bypid[pobj.id] == pobj);
  } else {
    this.bypid[pobj.id] = pobj;
  }

  if (loc === null) {
    pobj.position = null;
    return pobj;
  }

  const where = loc.toString();
  if (where in this.positions && this.positions[where]) {
    throw new Error(`${where} is occupied by ${this.positions[where]}`);
  }
  this.bycolor[pobj.color][where] = pobj;
  this.bytype[pobj.pname][where] = pobj;
  this.bycol[loc.x][where] = pobj;
  this.byrow[loc.y][where] = pobj;
  this.bycolortype[pobj.toString()][where] = pobj;
  this.positions[where] = pobj;
  pobj.position = loc;

  if (!this.supressemit) this.emit('add_piece', pobj, loc);


  return pobj;
};
BoardState.prototype.move_piece = function (pobj, loc) {
  if (typeof loc === typeof '') loc = new position(loc);

  type_checker.object(loc);
  type_checker.object(pobj);

  this.supressemit += 1;
  const from = pobj.position.toString();
  this.remove_piece(pobj);
  this.add_piece(pobj, loc);
  this.supressemit -= 1;
  if (!this.supressemit) {
    this.emit('move_piece', new position(from), loc, pobj);
  }
};
BoardState.prototype.promote = function (pobj, topiece) {
  type_checker.object(pobj);
  type_checker.string(topiece);
  if (pobj.position === null) {
    console.log(pobj.id, pobj, bs);
    throw new Error('not on board?');
  }

  const pos = pobj.position;

  this.remove_piece(pobj);
  const np = `${pobj.color} ${topiece}`;
  const pcopy = new position(pos.toString());

  const npobj = this.add_piece(np, pcopy);

  npobj.jumped = pobj.jumped;
  npobj.moved = pobj.moved;

  return npobj;
};
BoardState.prototype.forget_piece = function (pobj) {
  const rval = this.remove_piece(pobj);
  assert(rval);
  delete this.bypid[pobj.id];
  return true;
};
BoardState.prototype.remove_piece = function (pobj) {
  type_checker.object(pobj);
  if (!pobj.position) throw new Error('not on board, no position');
  const where = pobj.position.toString();
  var pobj = this.positions[where];
  type_checker.uses_interface(pobj, piece.interface);

  window.lastbs = this;
  window.lastpobj = pobj;
  assert(pobj === this.bycolortype[pobj.toString()][where], `${pobj} not at ${where}`);
  assert(pobj === this.bycolor[pobj.color][where]);
  assert(pobj === this.bytype[pobj.pname][where]);
  delete this.bycolor[pobj.color][where];
  delete this.bycolortype[pobj.toString()][where];
  delete this.bytype[pobj.pname][where];
  delete this.positions[where];
  delete this.bycol[pobj.position.x][where];
  delete this.byrow[pobj.position.y][where];

  pobj.position = null;

  if (!this.supressemit) this.emit('remove_piece', pobj, new position(where));


  return true;
};

const jcopy = 'positions,history,animating,turn,taken'.split(',');

BoardState.prototype.toJSON = function () {
  const vcopy = {};

  jcopy.forEach((key) => {
    vcopy[key] = this[key];
  });

  return vcopy;
};

BoardState.prototype.initialize = function (optional) {
  this.animating = 0;
  this.positions = {};
  this.history = [];
  this.bycolor = {};
  this.bytype = {};
  this.bypid = {};
  this.turn = 'white';
  var me = this;
  indexes.forEach((idx) => {
    me[idx] = {};
  });


  for (const c in bconstants.options.valid_colors) {
    this.bycolor[c] = {};
    for (var pn in bconstants.options.valid_names) {
      this.bycolortype[`${c} ${pn}`] = {};
    }
  }
  this.bytype = {};
  for (var pn in bconstants.options.valid_names) {
    this.bytype[pn] = {};
  }
  for (let i = 0; i < bconstants.size; i++) {
    const n = i + 1;
    this.bycol[n] = {};
    this.byrow[n] = {};
  }
  this.taken = [];
  var me = this;
  this.turn = 'white';
  bconstants.homerow.forEach((pname, i) => {
    if (optional == 'empty') return;
    const pi = i + 1;
    [
      { which: `white ${pname}`, where: new position(pi, 1) },
      { which: 'white pawn', where: new position(pi, 2) },
      { which: `black ${pname}`, where: new position(pi, 8) },
      { which: 'black pawn', where: new position(pi, 7) },
    ].forEach((r) => {
      if (optional === 'nopawns' && /pawn/gi.test(r.which)) return;
      me.add_piece(r.which, r.where);
    });
  });
  this.emit('initialize');
};


BoardState.prototype.browser_element = require('./board_state_sub/browser_element.js');
BoardState.prototype.add_human = require('./board_state_sub/add_human.js');
BoardState.prototype.install_key_listeners = require('./board_state_sub/install_key_listeners.js');
BoardState.prototype.clone = require('./board_state_sub/clone.js');
BoardState.prototype.print = require('./board_state_sub/print.js');
BoardState.prototype._check_all = require('./board_state_sub/_check_all.js');
BoardState.prototype.flip_html_board = require('./board_state_sub/flip_html_board.js');
BoardState.prototype.undo_move = require('./board_state_sub/undo_move.js');
BoardState.prototype.valid_moves_by_color = require('./board_state_sub/valid_moves_by_color.js');
BoardState.prototype.valid_moves_by_pos = require('./board_state_sub/valid_moves_by_pos.js');
BoardState.prototype.valid_moves = require('./board_state_sub/valid_moves.js');
BoardState.prototype.perform_move = require('./board_state_sub/perform_move.js');
BoardState.prototype.check_check = require('./board_state_sub/check_check.js');

BoardState.fromJSON = function (bj) {
  const btmp = JSON.parse(bj);


  const bs = new BoardState();
  bs.initialize('empty');

  Object.keys(btmp.positions).forEach((pos) => {
    const pobj = btmp.positions[pos];
    pobj.__proto__ = piece.prototype;
    const pnew = bs.add_piece(pobj.toString(), pobj.position.toString());
    for (const k in pobj) {
      if (k == 'position') continue;
      pnew[k] = pobj[k];
    }
  });

  bs.turn = btmp.turn;

  return bs;
};

const current_emit = BoardState.prototype.emit;

BoardState.prototype.emit = function (evtname) {
  if (this.debug) {
    console.log(evtname, arguments);
  }
  return current_emit.apply(this, arguments);
};

board_util.configure();

module.exports = BoardState;
