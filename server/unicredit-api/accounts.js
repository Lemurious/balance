module.exports = function (api) {
  api.getAllAccounts = getAllAccounts;
};

function getAllAccounts (callback) {
  this.get('/accounts/v1', null, function (err, data) {
    if (err) return callback(err);
    callback(null, data.accounts);
  });
}
