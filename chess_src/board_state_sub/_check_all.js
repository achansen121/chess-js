
module.exports = function _checkall(note) {
  const me = this;
  Object.keys(this.positions).forEach((pos) => {
    const piece = me.positions[pos];
    assert(piece === me.bycolortype[piece.toString()][pos], `match fail ${pos} ${piece}\n${note}`);
  });
  return true;
};
