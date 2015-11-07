module.exports = function (api) {
  api.getAllAccounts = getAllAccounts;
  api.getAccount = getAccount;
  api.getFullAcountInformation = getFullAcountInformation;
};

function getAllAccounts (userId, callback) {
  this.get('/accounts/v1', {userId: userId}, function (err, data) {
    if (err) return callback(err);
    callback(null, data.accounts);
  });
}

function getAccount (userId, accountId, callback) {
  this.get('/accounts/v1/' + accountId, {userId: userId}, function (err, data) {
    if (err) return callback(err);
    callback(null, data.account);
  });
}

/**
* To get the balance of the user's account,
* we get the account details of every account the user has
*/
function getFullAcountInformation (userId, callback) {
  this.get('/accounts/v1', {userId: userId}, function (err, data) {
    if (err) return callback(err);
    var accounts = data.accounts;
    var numAccounts = accounts.length;
    var received = 0;

    accounts.forEach(function (account) {
      this.get('/accounts/v1/' + account.account.id, {userId: userId}, function (err, data) {
        if (!err) {
          Object.keys(data).forEach(function (key) {
            account[key] = data[key];
          });
        }
        if (++received >= numAccounts) {
          callback(null, accounts);
        }
      }.bind(this));
    }, this);
  }.bind(this));
}
