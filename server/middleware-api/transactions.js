module.exports = function accountAPI (api) {
  api.getAllTransactions = getAllTransactions;
  api.getOneTransaction = getOneTransaction;
};

function getAllTransactions (userId) {
  return new Promise(function (resolve, reject) {
    resolve(transactionData);
  });
}

function getOneTransaction (userId, transactionId) {
  return new Promise(function (resolve, reject) {
    var notFound = true;
    Object.keys(transactionData).forEach(function (transaction) {
      if (transaction.id === transactionId) {
        resolve(transaction);
        return notFound = false;
      }
    });

    if (!found) reject(404);
  });
}


/* Sample data */

var transactionData = require('./example-transactions.json');
