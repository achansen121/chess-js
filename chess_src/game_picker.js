
const window = (function () { return this; }());
const document = window.document;
const EventEmitter = require('events').EventEmitter;
const util = require('util');
const sgen = require('gen2015-07');


const gen = function (desc) {
  return sgen(document, desc);
};

const assert = require('assert');
const type_checker = require('type_checker');
const use_debug = require('./use_debug.js');
const fstructure = require('./fstructure.yaml');

const fakeevent = { preventDefault() {} };

const getremove = function (ele, key) {
  const v = ele.getAttribute(key);
  ele.removeAttribute(key);
  return v;
};

const generate = function (ee, prnt) {
  // fstructure.parent=prnt;

  const formtemp = fstructure.formtemplate;
  const sidetemp = fstructure.sidetemplate;

  formtemp.parent = prnt;

  const cstate = {};

  const fobj = gen(formtemp);
  const sidelocs = [].slice.call(fobj.querySelectorAll('.aside'));
  sidelocs.forEach((loc) => {
    sidetemp.forEach((spart) => {
      loc.appendChild(gen(spart));
    });
    const whichside = getremove(loc, 'data-side');

    const btns = [].slice.call(loc.querySelectorAll('button'));

    btns.forEach((btn, i) => {
      let is = getremove(btn, 'data-is');
      let become = getremove(btn, 'data-become');
      const swap = function () {
        const tmp = is;
        is = become;
        become = tmp;
      };
      cstate[whichside] = is;
      const setcurrent = function (event) {
        event.preventDefault();
        btn.innerHTML = '';
        btn.appendChild(document.createTextNode(become));
        cstate[whichside] = become;
        if (use_debug()) console.log(`${whichside} is ${become}`);
        swap();
      };
      btn.addEventListener('click', setcurrent, false);
    });
  });
  const sbutton = fobj.querySelector('.start_game');
  sbutton.addEventListener('click', (event) => {
    event.preventDefault();
    ee.emit('start', cstate);
    if (use_debug()) console.log(cstate);
    ee.collapse();
  }, false);

  return fobj;
};


const Picker = function (prnt) {
  EventEmitter.call(this);
  type_checker.object(prnt);
  type_checker.object(prnt.ownerDocument);
  assert(prnt.ownerDocument === document);

  const me = this;
  this.parent = prnt;
  const hobj = this.html_obj = generate(this, prnt);
  this.collapsing = false;
  this.expanding = false;
  this.collapsed = false;

  this.collapseable = hobj.querySelectorAll('.button_surround,.start_game_row');
  this.collapseable = [].slice.call(this.collapseable);
  process.nextTick(() => {
    assert(document.body.contains(me.html_obj));
    //   me.last_height=me.html_obj.clientHeight;
    //   me.html_obj.style.height=me.last_height+"px";
    me.collapseable.forEach((ele) => {
      if (!ele.style.height) ele.style.height = `${ele.clientHeight}px`;
    });
  });
};


util.inherits(Picker, EventEmitter);
Picker.prototype.collapse = function () {
  const me = this;
  const hobj = this.html_obj;
  assert(!this.collapsing);
  assert(!this.expanding);
  assert(!this.collapsed);
  const to_c = this.collapseable;

  to_c.forEach((ele) => {
    ele.style.height = '0px';
  });

  // hobj.style.height=this.last_height+"px";
  // hobj.style.height="0px"
  this.collapsing = true;
  setTimeout(() => {
    if (me.collapsing) {
      me.collapsed = true;
      me.collapsing = false;
    }
  }, 1E3);
};
Picker.prototype.expand = function () {
  assert(!this.collapsing);
  assert(this.collapsed);
  // this.html_obj.style.height=this.last_height+"px";
  this.expanding = true;
  this.collapseable.forEach((ele) => {
    ele.style.height = `${ele.scrollHeight}px`;
  });
  setTimeout(() => {
    if (me.expanding) {
      me.collapsed = false;
      me.expanding = false;
    }
  }, 1E3);
};

module.exports = Picker;
