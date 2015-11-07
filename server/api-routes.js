/* Dependencies */

var api = require('./unicredit-api');

/* API Routes */

module.exports = function (app) {
  app.get('/api/all-data.js', function (req, res) {
    api.getAllTransactions('mario.rossi', function (err, transactions) {
      if (!err) {
        var result = 'var transactions = ' + JSON.stringify(transactions) + ';';
        res.send(result);
      } else {
        res.status(500).send('alert("api error!" + ' + JSON.stringify(err) + ')');
      }
    });
  });
};
