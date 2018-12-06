const fs = require('fs');

const fb = fs.readFileSync('./board.less', 'utf8');
const fmid = fb.split('\n').map((line) => {
  const ltmp = line.trim();
  if (/\/\//gi.test(ltmp)) return '';
  return ltmp;
}).join('\n');
const mtxt = fmid.replace(/\s+/gi, ' ');
fs.writeFileSync('./board.min.less', mtxt);
