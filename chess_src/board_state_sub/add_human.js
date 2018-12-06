
const window = (function () { return this; }());
const assert = require('assert');
const board_constants = require('../board_constants.js');
const position = require('../position.js');

const piece = require('../piece.js');

const add_human = function (color) {
  assert(process.title == 'browser');

  assert(color in board_constants.options.valid_colors);
  assert(this.browser_element);

  const bs = this;

  const document = window.document;

  if (this.valid_humans) {
    this.valid_humans[color] = true;
    return;
  }
  this.valid_humans = {};
  this.valid_humans[color] = true;

  const be = this.browser_element();
  const me = this;

  let selected_piece = null;
  let vmoves = [];
  const myellow = [];

  let vmoves_by_to = {};

  const highlight_moves = function (new_yellow) {
    while (myellow.length) {
      const de = myellow.pop();
      de.parentNode.removeChild(de);
    }
    let first = true;
    while (new_yellow.length) {
      const nde = new_yellow.pop();
      me.html_board.appendChild(nde);
      if (first) {
        first = false;
        nde.focus();
      }
      myellow.push(nde);
    }
  };
  let promo = null;
  let promotray = null;
  const promo_hide = function () {
    promo.style.zIndex = '-5';
    promotray.innerHTML = '';
  };
  const promo_popup = function (mlist) {
    if (!promo) {
      promo = document.createElement('div');
      promo.className = 'promotion';
      promo.appendChild(document.createTextNode('Select a promotion'));
      promotray = document.createElement('div');
      promotray.className = 'promotray';
      promo.appendChild(promotray);
      be.appendChild(promo);
    }
    promo.style.zIndex = 5;
    const color = me.turn;
    promotray.innerHTML = '';
    mlist.forEach((mv) => {
      assert(mv.promo);
      const ptemp = new piece(`${color} ${mv.promo}`);
      const pbe = ptemp.browser_element();
      const btn = document.createElement('div');
      btn.appendChild(pbe);
      btn.setAttribute('role', 'button');
      btn.addEventListener('click', (event) => {
        event.preventDefault();
        me.perform_move(mv);
        promo_hide();
      }, false);
      promotray.appendChild(btn);
    });
  };
  const selected_bclick = function (event) {
    if (event) event.preventDefault();
    highlight_moves([]);
    const to = this.getAttribute('data-coord');
    const mtodo = vmoves_by_to[to];

    if (Array.isArray(mtodo)) {
      promo_popup(mtodo);
      return;
    }

    if (mtodo.invalid) {
      selected_piece = null;
      return;
    }

    assert(mtodo);
    me.perform_move(mtodo);
  };

  me.on('bsquare_click', (where, domele) => {
    vmoves = [];
    vmoves_by_to = {};
    let oldselection = selected_piece;
    if (selected_piece) {
      highlight_moves([]);
      selected_piece = null;
    }
    selected_piece = me.positions[where];
    if (oldselection == selected_piece) {
      selected_piece = null;
      oldselection = null;
      return;
    }
    if (selected_piece) {
      const invalidcolor = false;
      if (selected_piece.color == me.turn && selected_piece.color in me.valid_humans) {
        vmoves = me.valid_moves_by_pos(selected_piece.position);
      }

      if (!vmoves.length) {
        vmoves = [
          {
            invalid: true,
            to: new position(selected_piece.position),
          },
        ];
      }
      vmoves.sort((a, b) => {
        assert(b.to && a.to);
        const ydiff = b.to.y - a.to.y;
        if (ydiff) return ydiff;
        const xdiff = b.to.x - a.to.x;
        return xdiff;
      });
      highlight_moves(vmoves.map((mv, i) => {
        const tostr = mv.to.toString();
        if (!vmoves_by_to[tostr]) vmoves_by_to[tostr] = mv;
        else if (Array.isArray(vmoves_by_to[tostr])) {
          vmoves_by_to[tostr].push(mv);
        } else vmoves_by_to[tostr] = [vmoves_by_to[tostr], mv];


        const btmp = document.createElement('button');
        btmp.appendChild(document.createElement('div'));
        btmp.className = 'selectedbutton';
        if (mv.invalid) btmp.className += ' invalidmove';
        btmp.setAttribute('data-coord', mv.to.toString());
        btmp.addEventListener('click', function (event) {
          event.preventDefault();
          selected_bclick.call(this);
          domele.focus();
          selected_piece = null;
        }, false);
        return btmp;
      }));
    }
  });
  return this;
};

module.exports = add_human;
