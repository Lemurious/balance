module.exports = function (api) {
  api.getCurrentUser = getCurrentUser;
};

function getCurrentUser (userid, callback) {
  this.get('/users/v1/current/' + userid, null, function (err, data) {
    if (err) return callback(err);
    callback(null, data.userInfo);
  });
}
