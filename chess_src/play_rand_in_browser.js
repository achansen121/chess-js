
const play_rand_inbrowser = function (bs) {
  const window = (function () { return this; }());
  const document = window.document;
  const body = document.querySelector('body');
  const be = append_to_body(bs);

  bs.on('movedesc', (mtxt, mdesc, mnot) => {
    console.log(`${mnot}   ${mtxt}`);
  });

  const maxturns = 400;

  let turn = 0;
  let pint = -1;

  let resume;
  resume = function () {
    let noerr = true;
    pint = setInterval(() => {
      if (!noerr) return clearInterval(pint);

      if (bs.animating) {
        clearInterval(pint);
        return bs.once('animated', resume);
      }

      noerr = false;

      let reason = false;
      const cturn = (turn % 2 == 0 ? 'white' : 'black');
      const vm = bs.valid_moves();
      const mvsel = pickrandom(vm);

      if (!mvsel) reason = 'checkmate/stalemate';
      else if (turn > maxturns) reason = `over ${maxturns} turns`;
      if (reason) {
        if (reason) console.log(reason);
        if (!mvsel) {
          console.log(vm);
          console.log(`no move found for ${cturn}`);
        }
        return;
      }
      bs.perform_move(mvsel);
      turn++;
      noerr = true;
    }, 100);
  };
  resume();
};
