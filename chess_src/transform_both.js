
const brfs = require('brfs');
const lessify = require('node-lessify');
const bd = require('browserify-data');
const through = require('through');
const fs = require('fs');


module.exports = function (file, package_options) {
  console.log(`transforming ${file}`);
  if (/\.yaml$/gi.test(file)) {
    return bd.apply(this, arguments);
  }
  if (/\.(css|less)$/gi.test(file)) {
    return lessify(file, { textMode: true });
  }
  if (/\.svg$/gi.test(file)) {
    var getstream;
    getstream = through();
    var actualwrite = getstream.write;
    var actualend = getstream.end;
    let svg = '';
    getstream.write = function (d) {
      svg += d;
    };
    getstream.end = function () {
      actualwrite.call(getstream, `module.exports=${JSON.stringify(svg)};`);
      actualend.call(getstream);
    };
    return getstream;
  }
  if (/\.js$/gi.test(file)) {
    const lst = lessify(file, { textMode: true });
    const bst = brfs.apply(this, arguments);

    var getstream;
    getstream = through();


    bst.on('error', (err) => {
      getstream.emit('error', err);
    });

    var actualwrite = getstream.write;
    var actualend = getstream.end;

    getstream.write = function (data) {
      const rval = lst.write(data);
      if (!rval) {
        getstream.pause();
        lst.once('drain', () => {
          getstream.resume();
        });
      }
    };

    getstream.end = function (end) {
      lst.end();
    };


    lst.pipe(bst);

    bst.on('data', (data) => {
      const rval = actualwrite.call(getstream, data);
      if (!rval) {
        bst.pause();
        getstream.once('drain', () => {
          bst.resume();
        });
      }
    });
    bst.on('end', function () {
      return actualend.apply(getstream, arguments);
    });

    return getstream;
  }
  return through();
};
