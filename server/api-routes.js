/* Dependencies */

var api = require('./unicredit-api');

/* API Routes */

module.exports = function (app) {

  app.get('/api/all-data.js', function (req, res) {
    // Get data from ALL required endpoints
    var endpoints = {
      'transactions': api.getAllTransactions.bind(api, 'mario.rossi'),
      'accounts': api.getAllAccounts.bind(api),
      'user': api.getCurrentUser.bind(api, 'mario.rossi')
    };

    var endpointNames = Object.keys(endpoints);
    var endpointCount = endpointNames.length;
    var completed = 0;
    var results = {};

    endpointNames.forEach(function (name) {
      endpoints[name](function (err, data) {
        if (err) {
          results[name] = {'error': err};
        } else {
          results[name] = data;
        }
        completed++;

        if (completed >= endpointCount) {
          var answer = 'var api = ' + JSON.stringify(results) + ';';
          res.send(answer);
        }
      });
    });

  });
};
