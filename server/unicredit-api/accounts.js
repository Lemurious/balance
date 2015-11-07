module.exports = function (api) {
  api.getAllAccounts = getAllAccounts;
};

function getAllAccounts (userId, callback) {
  this.get('/accounts/v1', {userId: userId}, function (err, data) {
    if (err) return callback(err);
    callback(null, data.accounts);
  });
}
