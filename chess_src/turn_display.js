
const window = (function () { return this; }());
const document = window.document;
const assert = require('assert');

const d_turn = function (bs) {
  const div = this.div = document.createElement('div');
  div.className = 'turn_display';

  const turn_title = document.createElement('h6');
  turn_title.appendChild(document.createTextNode('Turn'));


  const tdisplay = this.tdisplay = document.createElement('div');

  [turn_title, tdisplay].forEach((e) => {
    div.appendChild(e);
  });
  // div.appendChild();

  const update = function () {
    let turn = bs.turn.toString();
    turn = turn.substr(0, 1).toUpperCase() + turn.substr(1).toLowerCase();
    tdisplay.innerHTML = '';
    tdisplay.appendChild(document.createTextNode(turn));
  };
  // bs.on("initialize",update);
  bs.on('movedesc', update);
  bs.on('animated', update);
  process.nextTick(update);
};

d_turn.prototype.attach = function (parent) {
  const me = this;
  parent.appendChild(me.div);
};
d_turn.prototype.detach = function (parent) {
  return parent.removeChild(this.div);
};

module.exports = d_turn;
