
const bc = {};


bc.acode = 'a'.charCodeAt();
bc.size = 8;
bc.options = {
  valid_colors: {
    white: true,
    black: true,
  },
  valid_names: {
    king: 'k',
    knight: 'n',
    pawn: 'p',
    bishop: 'b',
    rook: 'r',
    queen: 'q',
  },
};

bc.pcodes = (function () {
  let pnames;
  pnames = bc.options.valid_names;
  const o = {};
  let name; let code;
  for (name in pnames) {
    code = pnames[name];
    o[code] = name;
  }
  return o;
}());

bc.homerow = 'rnbkqbnr'.split('').map((pcode) => {
  if (!(pcode in bc.pcodes)) {
    throw new Error(`no match ${pcode}`);
  }

  return bc.pcodes[pcode];
});

module.exports = bc;
