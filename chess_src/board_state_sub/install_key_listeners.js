

const window = (function () { return this; }());
const keycode = require('keycode');
const assert = require('assert');

const position = require('../position.js');

const kmap = {};
const keymove = function (direction, dx, dy) {
  return function (event) {
    const ae = document.activeElement;
    const dc = ae.getAttribute('data-coord');
    if (!dc) return;
    event.preventDefault();
    // console.log("arrow move");
    const pos = new position(dc);
    const npos = new position({
      x: (pos.x - 1 + dx + 8) % 8 + 1,
      y: (pos.y - 1 + dy + 8) % 8 + 1,
    });
    const mall = be.querySelectorAll(`button[data-coord="${npos}"]`);
    const last = mall[mall.length - 1];
    last.focus();
  };
};
kmap[keycode('up')] = keymove('up', 0, -1);
kmap[keycode('down')] = keymove('down', 0, 1);
kmap[keycode('left')] = keymove('left', -1, 0);
kmap[keycode('right')] = keymove('right', 1, 0);

const install_key_listeners = function () {
  assert(!this.key_listeners_installed);
  this.key_listeners_installed = true;

  const document = window.document;

  document.addEventListener('keydown', (event) => {
    if (event.keyCode in kmap) {
      kmap[event.keyCode](event);
    }
  }, false);
};

module.exports = install_key_listeners;
