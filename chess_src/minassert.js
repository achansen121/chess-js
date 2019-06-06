module.exports = function (test, msg) { if (!test) throw new Error(`Assertion Error${typeof msg === typeof '' ? `: ${msg}` : ''}`); };
