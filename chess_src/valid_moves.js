const assert = require('assert');
const typeChecker = require('type_checker');
require('./board_util.js');
const position = require('./position.js');

function move(opos, dx, dy) {
  const npos = position.softfail(opos.x + dx, opos.y + dy);
  if (!npos) return false;
  return npos;
}

function vasserts(bs, piece) {
  typeChecker.object(piece);
  typeChecker.object(piece.position);
  assert(piece.color === 'white' || piece.color === 'black');
}

const vmoves = {};

vmoves.pawn = function pawn(bs, piece) {
  const color = piece.color;
  const opos = piece.position;
  vasserts.apply(this, arguments);

  let direction = 1;
  let homerow = 2;
  if (color !== 'white') {
    homerow = 7;
    direction = -1;
  }
  if (opos.y !== homerow) {
    assert(piece.moved);
  }

  const diffs = [
    {
      dx: 0,
      dy: 1,
      require_empty: [{
        dx: 0,
        dy: 1,
      }],
    },
    {
      dx: 1,
      dy: 1,
      requires_occ: true,
    },
    {
      dx: -1,
      dy: 1,
      requires_occ: true,
    },
  ];
  if (!piece.moved) {
    diffs.push({
      dx: 0,
      dy: 2,
      isjump: true,
      require_empty: [{
        dx: 0,
        dy: 1,
      }, {
        dx: 0,
        dy: 2,
      }],
    });
  }
  const promoptions = 'queen,knight,rook,bishop'.split(',');

  if (color !== 'white') {
    diffs.forEach((e) => {
      e.dy *= -1;
      if (e.require_empty) {
        e.require_empty.forEach((requiresEmptyInput) => {
          const requiresEmpty = requiresEmptyInput;
          requiresEmpty.dx *= -1;
          requiresEmpty.dy *= -1;
        });
      }
    });
  }

  const promos = [];
  let trymoves = diffs.map((dpos) => {
    let rempty = false;
    const rrow = false;
    if (dpos.require_empty) {
      for (let i = 0; i < dpos.require_empty.length; i++) {
        const requiresEmpty = dpos.require_empty[i];
        rempty = move(opos, requiresEmpty.dx, requiresEmpty.dy);
        if (bs.positions[rempty.toString()]) return false;
      }
    }
    delete dpos.require_empty;

    const o = {};
    Object.keys(dpos).forEach((k) => {
      if (k === 'dx') return;
      if (k === 'dy') o.mv = move(opos, dpos.dx, dpos.dy);
      else o[k] = dpos[k];
    });
    return o;
  });

  trymoves = trymoves.filter((e) => {
    if (e === false) return false;
    if (e.mv === false) return false;
    const current = bs.positions[e.mv.toString()];
    if (!e.requires_occ) return !current;

    return (current && current.color !== color);
  });

  trymoves = trymoves.filter((e) => {
    if (e === false) return false;
    if (e.mv === false) return false;
    if (e.mv.y === 1 || e.mv.y === 8) {
      promoptions.forEach((p) => {
        promos.push({
          from: opos,
          to: new position({ x: e.mv.x, y: e.mv.y }),
          promo: p,
        });
      });
      return false;
    }
    return true;
  });


  const mvappend = [];

  const lastMoveMeta = bs.history[bs.history.length - 1];
  let lastMove = null;

  if (lastMoveMeta) {
    lastMove = lastMoveMeta.mvdesc;
  }

  if (lastMove && lastMove.isjump) {
    const jpos = new position(lastMove.to.toString());
    if (jpos.y === opos.y) {
      if ((jpos.x + 1 === opos.x) || (jpos.x - 1 === opos.x)) {
        mvappend.push({
          enpassant: true,
          from: opos,
          to: new position({ x: jpos.x, y: opos.y + direction }),
          target: jpos,
        });
      }
    }
  }


  return trymoves.map((e) => {
    const mvdesc = {
      from: opos,
      to: e.mv,
    };
    if ('isjump' in e) {
      mvdesc.isjump = e.isjump;
    }
    if ('promo' in e) {
      mvdesc.promo = e.promo;
    }
    return mvdesc;
  }).concat(mvappend).concat(promos);
};

let addDirection;
addDirection = function (opos, bs, color, vm) {
  function genDirection(dir) {
    const from = dir.pos;
    const dx = dir.dx;
    const dy = dir.dy;
    const to = move(from, dx, dy);
    if (!to) return false;
    const current = bs.positions[to.toString()];
    if (current) {
      if (current.color !== color) vm.push({ from: opos, to });
      return false;
    }
    vm.push({ from: opos, to });
    genDirection({ pos: to, dx, dy });
    return true;
  }

  return genDirection;
};
vmoves.rook = function rook(bs, piece) {
  const color = piece.color;
  const opos = piece.position;
  const row = opos.x;
  const col = opos.y;

  const vm = [];

  const dirs = [
    { pos: opos, dx: -1, dy: 0 },
    { pos: opos, dx: 1, dy: 0 },
    { pos: opos, dx: 0, dy: -1 },
    { pos: opos, dx: 0, dy: 1 },
  ];
  dirs.forEach(addDirection(opos, bs, color, vm));
  return vm;
};

function copydir(o) {
  return { dx: o.dx, dy: o.dy, pos: o.pos };
}

vmoves.bishop = function bishop(bs, piece) {
  const color = piece.color;
  const opos = piece.position;
  const row = opos.x;
  const col = opos.y;

  const vm = [];

  const dirs = [
    { pos: opos, dx: -1, dy: -1 },
    { pos: opos, dx: 1, dy: 1 },
    { pos: opos, dx: 1, dy: -1 },
    { pos: opos, dx: -1, dy: 1 },
  ];
  dirs.forEach(addDirection(opos, bs, color, vm));
  return vm;
};

vmoves.king = function king(bs, piece, skipkingcheck) {
  const color = piece.color;
  const opos = piece.position;
  const dirs = [
    { pos: opos, dx: 1, dy: 1 },
    { pos: opos, dx: 1, dy: 0 },
    { pos: opos, dx: 0, dy: 1 },
  ];
  dirs.slice().forEach((e) => {
    const ne = copydir(e);
    if (ne.dx === 0) return;
    ne.dx *= -1;
    dirs.push(ne);
  });
  dirs.slice().forEach((e) => {
    const ne = copydir(e);
    if (ne.dy === 0) return;
    ne.dy *= -1;
    dirs.push(ne);
  });

  const vm = dirs.map(dpos => ({
    mv: move(opos, dpos.dx, dpos.dy),
    dpos,
  }))
    .filter((desc) => {
      if (!desc.mv) return false;
      const current = bs.positions[desc.mv.toString()];
      if (!current) return true;
      if (current.color !== color) return true;
      return false;
    })
    .map(e => ({
      to: e.mv,
      from: opos,
    }));
  const mrooks = [];
  const rall = bs.bycolortype[`${color} rook`];
  const mrookpos = Object.keys(rall).map(rpos => rpos);
  const castles = mrookpos.map((rpos) => {
    // var bcopy=bs.clone();
    const rook = bs.positions[rpos.toString()];

    const mking = bs.positions[piece.position.toString()];

    if (mking.moved) return false;
    if (rook.moved) return false;
    const y = rook.position.y;
    assert(y === mking.position.y);
    const dx = rook.position.x - mking.position.x;
    const di = (dx < 0 ? -1 : 1);

    const intermediate = new position({ x: opos.x + di, y: opos.y });

    if (bs.positions[intermediate.toString()]) return false;

    bs.perform_move({
      from: mking.position,
      to: intermediate,
      undoable: true,
      skipverify: true,
    });
    if (bs.check_check(mking.color)) {
      bs.undo_move();
      return false;
    }
    bs.undo_move();

    const p = new position({ x: opos.x + di * 2, y: opos.y });
    if (bs.positions[p.toString()]) return false;

    const rook_to = new position({ x: opos.x + di, y: opos.y });
    return {
      from: opos,
      to: p,
      rook_from: rpos,
      rook_to,
      castle: true,
    };
  })
    .filter(e => e !== false);
  vm.push(...castles);
  return vm;
};
vmoves.queen = function (bs, piece) {
  return vmoves.rook(bs, piece).concat(vmoves.bishop(bs, piece));
};
vmoves.knight = function (bs, piece) {
  const color = piece.color;
  const opos = piece.position;
  const diffs = [
    { dx: 2, dy: 1 },
  ];
  diffs.slice().forEach((e) => {
    const en = copydir(e);
    const tmp = en.dy;
    en.dy = en.dx;
    en.dx = tmp;
    diffs.push(en);
  });
  diffs.slice().forEach((e) => {
    const en = copydir(e);
    en.dy *= -1;
    diffs.push(en);
  });
  diffs.slice().forEach((e) => {
    const en = copydir(e);
    en.dx *= -1;
    diffs.push(en);
  });
  const vm = diffs.map(dpos => ({
    mv: move(opos, dpos.dx, dpos.dy),
    dpos,
  }))
    .filter(e => (e.mv !== false))
    .filter((e) => {
      const current = bs.positions[e.mv.toString()];
      if (!current) return true;
      if (current.color !== color) return true;
      return false;
    })
    .map(e => ({
      to: e.mv,
      from: opos,
    }));

  return vm;
};

module.exports = vmoves;
