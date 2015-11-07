module.exports = function (api) {
  api.getAllTransactions = getAllTransactions;
  api.getOneTransaction = getOneTransaction;
};

function getAllTransactions (userid, callback) {
  this.get('/transactions/v1', {'userid': userid}, function (err, data) {
    if (err) return callback(err);
    callback(null, data.transactions);
  });
}

function getOneTransaction (userid, transactionID, callback) {
  this.get('/transactions/v1/' + transactionID, {'userid': userid}, callback);
}
