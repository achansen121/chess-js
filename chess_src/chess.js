
const Picker = require('./game_picker.js');
const BoardState = require('./board_state.js');
const bot = require('./bot.js');

const window = (function () { return this; }());
const assert = require('assert');
const piece = require('./piece.js');
const position = require('./position.js');
const type_checker = require('type_checker');
const turn_display = require('./turn_display.js');

const use_debug = require('./use_debug.js');

const history_display = require('./move_history_display.js');

const pickrandom = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};
const append_to_body = function (bs, cb) {
  const window = (function () { return this; }());

  let body = document.querySelector('body');
  const be = bs.browser_element();

  const t_display = new turn_display(bs);
  const mvhistory = new history_display(bs);

  if (cb) type_checker.function(cb);

  const append = function () {
    if (!body) body = document.querySelector('body');
    body.appendChild(be);
    t_display.attach(body);
    mvhistory.attach(body);
    if (cb) {
      cb();
    }
  };
  if (!document.body) {
    document.addEventListener('DOMContentLoaded', append, false);
  } else append();

  return be;
};

const init_board = function (cb) {
  const bs = new BoardState();

  if (use_debug()) {
    bs.debug = true;
    window.bs = bs;
  }
  bs.initialize();
  append_to_body(bs, () => {
    cb(bs);
  });
};

if (process.title === 'browser') {
  const pdiv = document.createElement('div');
  const p = new Picker(pdiv);
  let inited = false;
  let bs = null;
  p.on('start', (desc) => {
    if (use_debug()) console.log(desc, inited, bs);
    if (!inited) return;
    let keylistenersset = false;
    Object.keys(desc).forEach((color) => {
      if (desc[color] == 'Human') {
        bs.add_human(color);
        if (!keylistenersset) {
          bs.install_key_listeners();
          keylistenersset = true;
        }
      }
      if (desc[color] == 'Bot') var bt = new bot(bs, color);
    });
  });
  const start = function () {
    document.body.appendChild(pdiv);
    init_board((_bs) => {
      inited = true;
      bs = _bs;
    });
  };
  if (!document.body) document.addEventListener('DOMContentLoaded', start, false);
  else start();

  window.require = require;
}
