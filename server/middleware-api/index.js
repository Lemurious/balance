module.exports = function () {
  var api = {};
  require('./accounts')(api);
  require('./categories')(api);
  require('./transactions')(api);
  require('./user')(api);
  return api;
};
