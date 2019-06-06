
const colors = require('colors/safe');
const bconstants = require('../board_constants.js');


const pheight = 3;
const pwidth = 5;
module.exports = function print() {
  for (let i = 1; i <= 8; i++) {
    for (let t = 0; t < pheight; t++) {
      let line = '';
      for (let j = 1; j <= 8; j++) {
        const posstr = `${j}x${i}`;
        const scolor = ((i + j) % 2 ? 'bgBlue' : 'bgBlack');
        let pcode = ' ';
        const piece = this.positions[posstr];
        let pcolor = 'white';
        if (piece) {
          pcode = bconstants.options.valid_names[piece.pname];
          if (piece.color == 'black') pcolor = 'yellow';
        }
        if (t != Math.floor(pheight / 2)) pcode = ' ';
        if (process.title == 'browser') {
          if (j == 1) line += '|';
          line += `${pcode}|`;
        } else {
          let ptmp = '';
          ptmp += (new Array(Math.floor(pwidth / 2) + 1)).join(' ');
          ptmp += pcode.toUpperCase();
          ptmp += (new Array(Math.floor(pwidth / 2) + 1)).join(' ');
          ptmp = colors[scolor](ptmp);
          ptmp = colors[pcolor](ptmp);
          ptmp = colors.bold(ptmp);
          line += ptmp;
        }
      }
      console.log(line);
    }
  }
};
