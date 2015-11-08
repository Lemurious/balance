module.exports = function accountAPI (api) {
  api.getAllAccounts = getAllAccounts;
  api.getOneAccount = getOneAccount;
};

function getAllAccounts (userId) {
  return new Promise(function (resolve, reject) {
    resolve(accountsData);
  });
}

function getOneAccount (userId, accountId) {
  return new Promise(function (resolve, reject) {
    var notFound = true;
    Object.keys(accountsData).forEach(function (account) {
      if (account.id === accountId) {
        resolve(account);
        return notFound = false;
      }
    });

    if (notFound) reject(404);
  });
}


/* Sample data */

var accountsData = require('./example-accounts.json');
