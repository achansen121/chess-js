
const assert = require('assert');
const type_checker = require('type_checker');
const piece = require('./piece.js');
const board_util = require('./board_util.js');

let nticks = 0;
const nextTickDelayed = function (cb) {
  if (process.title == 'browser') {
    nticks++;
    if (nticks % 5 == 0) setTimeout(cb, 1);
    else process.nextTick(cb);
  } else process.nextTick(cb);
};

const bot = function (bs, _options) {
  let options = _options;
  if (typeof _options === typeof '') options = { color: _options };
  this.bs = bs;
  this.depth = (typeof options.depth === typeof undefined ? 2 : options.depth);
  this.color = options.color;
  this.delay = (typeof options.delay === typeof undefined ? 500 : options.delay);
  type_checker.string(options.color);
  type_checker.number(this.delay);
  type_checker.number(this.depth);

  piece.valid_colors(options.color);
  // console.log(byposcolor)

  const me = this;
  this._bound_try_to_move = function () {
    const args = arguments;
    setTimeout(() => {
      me.try_to_move(...args);
    }, me.delay);
  };
  if (!bs.html_board) bs.on('movedesc', this._bound_try_to_move);
  else bs.on('animated', this._bound_try_to_move);
  process.nextTick(this._bound_try_to_move);
};
bot.prototype.stop = function () {
  assert(!this.stopped);
  this.stopped = true;
  this.bs.removeListener('movedesc', this._bound_try_to_move);
  this.bs.removeListener('animated', this._bound_try_to_move);
};

bot.prototype.change_board = function (nbd) {
  this.bs.removeListener('animated', this._bound_try_to_move);
  this.bs.removeListener('movedesc', this._bound_try_to_move);
  this.bs = nbd;
  nbd.on('animated', this._bound_try_to_move);
  if (!nbd.html_board) nbd.on('movedesc', this._bound_try_to_move);
  process.nextTick(this._bound_try_to_move);
};
bot.prototype.try_to_move = function () {
  assert(!this.stopped);

  const bs = this.bs;
  const mycolor = this.color;

  if (bs.turn == mycolor) {
    // console.log("from my perspective "+mycolor)
    // console.log("board score was "+score_state_traditional(mycolor,bs))

    const mv = get_best(mycolor, this.depth, bs, (mv, ns) => {
      // console.log(mycolor+" plays")
      // console.log("board score is now "+ns)
      bs.perform_move(mv);
    });
  }
};

const score_state = function (perspective, bs) {
  const state = {};
  state.number_of = {};
  state.moves = 0;

  Object.keys(bs.bycolortype).forEach((ptype) => {
    const plist = Object.keys(bs.bycolortype[ptype]);
    state.number_of[ptype] = plist.length;
    plist.forEach((pos) => {
      const pboj = bs.positions[pos];
      const mlist = bs.valid_moves_by_pos(pos);
      state.moves += mlist.length;
    });
  });
};


const bypos = {};
bypos.bishop = [
  [-5, -5, -5, -5, -5, -5, -5, -5],
  [-5, 10, 5, 8, 8, 5, 10, -5],
  [-5, 5, 3, 8, 8, 3, 5, -5],
  [-5, 3, 10, 3, 3, 10, 3, -5],
  [-5, 3, 10, 3, 3, 10, 3, -5],
  [-5, 5, 3, 8, 8, 3, 5, -5],
  [-5, 10, 5, 8, 8, 5, 10, -5],
  [-5, -5, -5, -5, -5, -5, -5, -5],
];
bypos.knight = [
  [-10, -5, -5, -5, -5, -5, -5, -10],
  [-8, 0, 0, 3, 3, 0, 0, -8],
  [-8, 0, 10, 8, 8, 10, 0, -8],
  [-8, 0, 8, 10, 10, 8, 0, -8],
  [-8, 0, 8, 10, 10, 8, 0, -8],
  [-8, 0, 10, 8, 8, 10, 0, -8],
  [-8, 0, 0, 3, 3, 0, 0, -8],
  [-10, -5, -5, -5, -5, -5, -5, -10],
];
const byposcolor = {};

byposcolor['white pawn'] = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, -5, -5, 0, 0, 0],
  [0, 2, 3, 4, 4, 3, 2, 0],
  [0, 4, 6, 10, 10, 6, 4, 0],
  [0, 6, 9, 10, 10, 9, 6, 0],
  [4, 8, 12, 16, 16, 12, 8, 4],
  [5, 10, 15, 20, 20, 15, 10, 5],
  [0, 0, 0, 0, 0, 0, 0, 0],
];
byposcolor['black pawn'] = [];

byposcolor['white pawn'].forEach((e, i) => {
  const len = byposcolor['white pawn'].length;
  const nr = byposcolor['white pawn'][len - 1 - i].slice();

  byposcolor['black pawn'].push(nr);
});

const castle_bonus = 10;

const pscore = {
  pawn: 100,
  knight: 300,
  bishop: 300,
  rook: 500,
  queen: 900,
  king: 350,
};

const score_state_traditional = function (perspective, bs) {
  piece.valid_colors(perspective);
  let so = 0;
  Object.keys(bs.positions).forEach((pos) => {
    let multiplier = 1;
    const pobj = bs.positions[pos];
    type_checker.object(pobj);
    const pname = pobj.pname;
    const pfull = pobj.toString();

    if (pobj.color != perspective) {
      multiplier *= (-1);
    }
    var pos = pobj.position;
    let pos_score = 0;
    let posarray = null;
    if (pname in bypos) {
      posarray = bypos[pname];
    } else if (pfull in byposcolor) {
      posarray = byposcolor[pfull];
    }
    if (posarray) {
      type_checker.object(posarray[pos.y - 1]);
      pos_score = posarray[pos.y - 1][pos.x - 1];

      // console.log(pos_score+" score for "+pobj+" at "+pos)

      type_checker.number(pos_score);
    }
    assert(pobj.pname in pscore);
    so += (pscore[pobj.pname] + pos_score) * multiplier;
  });

  const myckey = `${perspective} castled`;
  const otherckey = `${board_util.opposite_color(perspective)} castled`;
  if (bs[myckey]) {
    so += castle_bonus;
  }
  if (bs[otherckey]) {
    so -= castle_bonus;
  }


  return so;
};
// var DEPTH=2;
let get_best; let nega_max;

// var collected_move=0;
let brun = 0;

get_best = function (perspective, DEPTH, bs, cb) {
  piece.valid_colors(perspective);
  type_checker.number(DEPTH);
  type_checker.object(bs);
  type_checker.function(cb);

  const moves = bs.valid_moves_by_color(bs.turn);

  let ex = Infinity;
  let best_so_far = null;
  let imediate_score = null;

  brun++;
  if (brun > 2000) {
    console.log(arguments);
    throw new Error('too much b');
  }
  const gbstart = bs.history.length;

  // var start_score=score_state_traditional(perspective,bs);

  let step;
  step = function () {
    const mv = moves.shift();
    // console.log(moves.length+" moves todo")
    if (!mv) {
      assert(best_so_far != null, 'I am checkmated');
      const cpmv = {};
      Object.keys(best_so_far).forEach((k) => {
        if (k == 'undoable') return;
        cpmv[k] = best_so_far[k];
      });
      // console.log("old score "+start_score)
      // console.log("new score "+ex,best_so_far)
      assert(bs.history.length == gbstart);
      return cb(cpmv, imediate_score);
    }

    // var bcopy=bs.clone();

    // assert(bcopy.turn==bs.turn);

    // var bturn=bcopy.turn;
    // var piece=bcopy.positions[mv.from.toString()];
    // console.log(bturn)
    // console.log(piece.color)

    mv.undoable = true;

    bs.perform_move(mv);

    // assert(bcopy.turn!=bs.turn)

    nega_max(bs, perspective, bs.turn, DEPTH - 1, -Infinity, Infinity, (nv) => {
      const save = function () {
        ex = nv.score;
        imediate_score = score_state_traditional(perspective, bs);
        best_so_far = mv;
      };
      if (best_so_far === null) save();
      else if (nv.score < ex) save();
      else if (nv.score === ex) {
        if (Math.random() > 0.5) save();
      }
      bs.undo_move();

      // collected_move++;
      // console.log(collected_move+" moves","best move is ",best_so_far.from.toString()+" to "+best_so_far.to.toString())
      nextTickDelayed(step);
    });
  };
  nextTickDelayed(step);
};
// var nrun=0;
nega_max = function (bs, perspective, turn, depth, alpha, beta, cb) {
  let ndepth;
  type_checker.number(depth);
  type_checker.number(alpha);
  type_checker.number(beta);

  // nrun+=1;
  // if(nrun>2000){
  //   console.log(arguments)
  //   throw new Error("too much");
  // }
  type_checker.object(bs);
  piece.valid_colors(turn);
  piece.valid_colors(perspective);
  type_checker.function(cb);

  const cscore = score_state_traditional(perspective, bs);
  const out = { score: cscore, state: bs, children: [] };

  // console.log(depth+" is depth")

  if (depth <= 0) {
    nextTickDelayed(() => {
      cb(out);
    });
    return;
  }

  ndepth = depth - 1;

  const mvall = bs.valid_moves_by_color(turn);
  const opp = board_util.opposite_color(turn);

  let nalpha = alpha;

  const hstart = bs.history.length;

  const ondone = function () {
    out.score = nalpha;
    assert(hstart == bs.history.length);
    nextTickDelayed(() => {
      cb(out);
    });
  };


  var mvstep = function () {
    const mv = mvall.shift();

    if (!mv) {
      return ondone();
    }

    // toundo++;
    mv.undoable = true;
    assert(mv.from.toString() in bs.positions);
    assert(bs.positions[mv.from.toString()].color == bs.turn);
    bs.perform_move(mv);

    nega_max(bs, opp, opp, ndepth, -1 * beta, -1 * nalpha, (tmp) => {
      nalpha = Math.max(nalpha, tmp.score * -1);

      type_checker.number(tmp.score);
      type_checker.number(nalpha);

      bs.undo_move();

      if (nalpha >= beta) {
        out.score = nalpha;
        out.children.push(tmp);
        return ondone();
      }
      nextTickDelayed(mvstep);
    });
  };
  nextTickDelayed(mvstep);
};


module.exports = bot;
