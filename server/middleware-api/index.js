module.exports = function () {
  var api = {};
  require('./accounts')(api);
  require('./transactions')(api);
  require('./categories')(api);
  return api;
};
