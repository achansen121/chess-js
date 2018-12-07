#!/usr/bin/env node

/* eslint-disable no-console */

const path = require('path');

const browserify = require('browserify');
const watchify = require('watchify');
const fs = require('fs');

const outfile = path.join(__dirname, 'static', 'js.js');
const entry = path.join(__dirname, 'chess_src', 'chess.js');
function logErr(err) {
  if (err) {
    console.error(err);
  }
}

function continuous() {
  process.chdir(path.join(__dirname, 'chess_src'));

  const b = browserify(entry, { cache: {}, packageCache: {}, debug: false });

  b.require('./minassert.js', { expose: 'assert' });

  const w = watchify(b);
  const info = {};
  info.path = outfile;

  w.on('time', (_time) => {
    info.time = _time;
  });

  function bundle() {
    delete info.time;
    delete info.bytes;
    delete info.error;

    console.error('bundle called');
    info.bytes = 0;
    info.buf = '';

    const wb = w.bundle();

    wb.on('error', (err) => {
      info.error = err;
      fs.writeFile(outfile, `console.error(${JSON.stringify(String(err))});`, logErr);
      console.error(String(err));
    });

    wb.on('data', (buf) => {
      info.bytes += Buffer.byteLength(String(buf), 'utf8');
      info.buf += buf;
    })
      .on('end', () => {
        fs.writeFile(outfile, info.buf, logErr);
        console.error(`Write ${info.bytes} to ${outfile} in ${info.time}`);
      });
  }
  w.on('update', bundle);
  bundle();
}

if (require.main === module) {
  continuous();
}
