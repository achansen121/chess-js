
const BoardState = require('./board_state.js');
const bot = require('./bot.js');

const window = (function () { return this; }());

const assert = require('assert');
const piece = require('./piece.js');
const position = require('./position.js');
const type_checker = require('type_checker');


const history_display = require('./move_history_display.js');
const bs = require('./board_state.js');


const ptry = function () {
  const bs = new BoardState();
  bs.initialize('empty');
  const p = new piece('white king');
  p.position = new position('1x1');
  p.moved = true;
  const jstr = JSON.stringify(p);
  console.log('json is ');
  console.log(jstr);
  console.log(Object.keys(piece));
  const jo = piece.fromJSON(jstr);
  console.log(jo);
  console.log(p);

  bs.add_piece(p, p.position);

  console.log(JSON.stringify(bs));
};

const clear = function () {
  process.stdout.write(`${String.fromCharCode(27)}[1J`);
};

const bot_v_bot_local = function () {
  const bs = new BoardState();
  bs.initialize();

  bs.print();

  bs.on('movedesc', (mvtxt) => {
    // clear();
    console.log(mvtxt);
    bs.print();
  });

  const wb = new bot(bs, {
    delay: 10,
    color: 'white',
    depth: 3,
  });
  const bb = new bot(bs, {
    delay: 10,
    color: 'black',
    depth: 3,
  });
};


const kcheck = function () {
  const bs = new BoardState();
  bs.initialize('empty');
  bs.add_piece('black king', '1x1');
  bs.add_piece('white rook', '2x5');
  bs.add_piece('white rook', '5x2');
  bs.turn = 'black';
  var bmoves = bs.valid_moves_by_color('black');
  bs.print();
  assert(bmoves.length == 0);

  console.log('--');
  bs.initialize('empty');
  bs.add_piece('black king', '1x1');
  bs.add_piece('white rook', '5x2');
  bs.turn = 'black';
  var bmoves = bs.valid_moves_by_color('black');
  bs.print();
  console.log(bmoves);
  assert(bmoves.length == 1);

  console.log('--');
  bs.initialize('empty');
  bs.add_piece('black king', '1x1');
  bs.add_piece('white rook', '2x5');
  bs.turn = 'black';
  var bmoves = bs.valid_moves_by_color('black');
  bs.print();
  console.log(bmoves);
  assert(bmoves.length == 1);
  console.log('--');
  bs.initialize('empty');
  bs.add_piece('black king', '1x1');
  bs.add_piece('white rook', '1x5');
  bs.turn = 'black';
  var bmoves = bs.valid_moves_by_color('black');
  bs.print();
  console.log(bmoves);
  assert(bmoves.length == 2);

  console.log('--');
  bs.initialize('empty');
  bs.add_piece('white king', '4x4');
  bs.add_piece('black king', '5x4');
  bs.print();
  bs.turn = 'black';
  assert(bs.check_check('black'), 'not check?');

  bs.initialize('empty');
  bs.add_piece('white king', '4x4');
  bs.add_piece('black king', '6x4');
  bs.print();
  bs.turn = 'black';
  const vpos = bs.valid_moves_by_pos('6x4');
  console.log(vpos);
  var bmoves = bs.valid_moves_by_color('black');
  assert(bmoves.length == 5, `bmoves is ${bmoves.length}`);
};


if (require.main == module) {
  console.log('which test not set');
}
