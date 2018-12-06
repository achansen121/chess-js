
const window = (function () { return this; }());
const document = window.document;
const assert = require('assert');

const d_history = function (bs) {
  const div = this.div = document.createElement('div');
  div.className = 'move_history';
  const ihave = this.history = [];

  const mvtitle = document.createElement('h6');
  mvtitle.appendChild(document.createTextNode('Move History'));


  const mvsub = this.mvsub = document.createElement('div');

  [mvtitle, mvsub].forEach((e) => {
    div.appendChild(e);
  });
  // div.appendChild();

  bs.on('movedesc', (desctxt, mdesc, mnot) => {
    const row = document.createElement('div');
    row.appendChild(document.createTextNode(mnot));
    mvsub.appendChild(row);
    mvsub.scrollTop = mvsub.scrollHeight;
  });
};

d_history.prototype.attach = function (parent) {
  const me = this;
  parent.appendChild(me.div);
};
d_history.prototype.detach = function (parent) {
  return parent.removeChild(this.div);
};

module.exports = d_history;
