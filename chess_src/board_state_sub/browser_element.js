
const window = (function () { return this; }());


let csstxt = '';
if (process.title == 'browser') {
  csstxt = require('../board.less');
}

const bsquare_click = function (bs) {
  return function (event) {
    event.preventDefault();
    bs.emit('bsquare_click', this.getAttribute('data-coord'), this);
  };
};


module.exports = function browser_element(parent) {
  if (process.title != 'browser') throw new Error('not a browser');
  if (this.html_board) return this.html_board;

  const me = this;
  const document = window.document;
  const head = document.querySelector('head');
  let bsc = document.querySelector('#board_state_css');

  const anitime = 0.2;

  if (!bsc) {
    bsc = document.createElement('style');
    bsc.appendChild(document.createTextNode(`${csstxt.toString()}.chessboard>svg{transition:left ${anitime}s,top ${anitime}s;}`));
    head.appendChild(bsc);
  }
  const hb = document.createElement('div');
  hb.className = 'chessboard';

  Object.defineProperty(this, 'html_board', {
    enumerable: false, value: hb,
  });

  const hpos = {};


  Object.defineProperty(this, 'html_board_pos', {
    enumerable: false, value: hpos,
  });

  const fillsquare = function (piece, sqr) {
    let pcolor = null;
    let pname = 'empty';
    let psvg = '';
    if (piece) {
      pname = piece.pname;
      pcolor = piece.color;
      psvg = imgs[pname];
    }
    sqr.innerHTML = psvg;
    if (pcolor) {
      const oppcolor = board_util.opposite_color(pcolor);
      const svg_ele = sqr.querySelector('svg');
      svg_ele.setAttribute('class', `${pname} ${pcolor}`);
    }
  };
  const svg_pos = function (piece, pos) {
    const pbe = piece.browser_element();
    pbe.setAttribute('data-coord', pos);
    if (!pbe.parentNode) me.html_board.appendChild(pbe);
  };
  const square_map = {};

  for (let i = 1; i <= 8; i++) {
    for (let j = 1; j <= 8; j++) {
      const oddoreven = ((i + j) % 2 ? 'odd' : 'even');
      const btn = document.createElement('button');
      const sqr = document.createElement('div');
      sqr.className = `bsquare ${oddoreven}`;
      const posstr = `${j}x${i}`;
      me.buttons[posstr] = btn;
      btn.setAttribute('data-coord', posstr);
      btn.addEventListener('click', bsquare_click(me), false);
      sqr.setAttribute('data-coord', posstr);
      hpos[posstr] = sqr;
      const piece = this.positions[posstr];
      if (piece) svg_pos(piece, posstr);
      square_map[posstr] = sqr;
      hb.appendChild(btn);
      hb.appendChild(sqr);
    }
  }
  Object.defineProperty(this, 'recent_square', {
    configurable: true,
    value: document.createElement('div'),
    enumerable: false,
  });
  Object.defineProperty(this, 'recent_source', {
    configurable: true,
    value: document.createElement('div'),
    enumerable: false,
  });
  // this.recent_square=;
  this.recent_square.appendChild(document.createElement('div'));
  this.recent_square.setAttribute('class', 'recent_move');

  this.recent_source.appendChild(document.createElement('div'));
  this.recent_source.setAttribute('class', 'recent_source');

  const set_new_recent = function (fp, np) {
    if (!fp) {
      if (me.recent_source.parentNode) me.recent_source.parentNode.removeChild(me.recent_source);
    } else {
      me.recent_source.setAttribute('data-coord', fp);
      if (!me.recent_source.parentNode) me.html_board.appendChild(me.recent_source);
    }
    me.recent_square.setAttribute('data-coord', np);
    if (!me.recent_square.parentNode) {
      me.html_board.appendChild(me.recent_square);
    }
  };
  this.on('add_piece', (pobj, loc) => {
    svg_pos(pobj, loc.toString());
    set_new_recent(null, loc.toString());
  });
  this.on('move_piece', (from, to, pobj) => {
    const pbe = pobj.browser_element();
    pbe.setAttribute('data-coord', to.toString());
    set_new_recent(from.toString(), to.toString());
    me.animation_notify(anitime);
  });
  this.on('remove_piece', (pobj, loc) => {
    const pbe = pobj.browser_element();
    if (pbe.parentNode) pbe.parentNode.removeChild(pbe);
  });
  process.nextTick(() => {
    me.emit('html_board', me.html_board);
  });

  return hb;
};
