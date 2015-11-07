/**
* The branches endpoint is very useless, since it only
* provides UniCredit branches in Italy.
*/

module.exports = function (api) {
  api.getBranchesNearby = getBranchesNearby;
};

function getBranchesNearby (longitude, latitude, opts, callback) {
  var params = {
    x: longitude,
    y: latitude,
    distance: (opts && opts.distance) || 10000, // Distance in meters
    maxResult: (opts && opts.maxResult) || 25
  };
  this.get('/bank/v1/branches', params, function (err, data) {
    if (err) return callback(err);
    callback(null, data.branches);
  });
}
