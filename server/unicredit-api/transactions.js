module.exports = function (api) {
  api.getAllTransactions = getAllTransactions;
  api.getOneTransaction = getOneTransaction;
};

function getAllTransactions (userId, callback) {
  this.get('/transactions/v1', {'userId': userId}, function (err, data) {
    if (err) return callback(err);
    callback(null, data.transactions);
  });
}

function getOneTransaction (userId, transactionID, callback) {
  this.get('/transactions/v1/' + transactionID, {'userId': userId}, callback);
}
