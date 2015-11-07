/* Dependencies */

var api = require('./unicredit-api');

/* API Routes */

module.exports = function (app) {

  app.get('/api/initial-data', function (req, res) {
    // Get data from ALL initially required endpoints
    var endpoints = {
      'transactions': api.getAllTransactions.bind(api, 'mario.rossi'),
      'accounts': api.getFullAcountInformation.bind(api, 'mario.rossi'),
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
          res.type('json').send(results);
        }
      });
    });
  });

  app.get('/api/accounts', function (req, res) {
    api.getAllAccounts('mario.rossi', forwardSingleApiData.bind(this, res));
  });

  app.get('/api/accounts/full', function (req, res) {
    api.getFullAcountInformation('mario.rossi', forwardSingleApiData.bind(this, res));
  });

  app.get('/api/accounts/:accountId', function (req, res) {
    api.getAccount('mario.rossi', req.params.accountId, forwardSingleApiData.bind(this, res));
  });

  app.get('/api/branches', function (req, res) {
    var query = req.query || {};
    api.getBranchesNearby(
      query.longitude || 0,
      query.latitude || 0,
      null,
      forwardSingleApiData.bind(this, res)
    );
  });

  app.get('/api/transactions', function (req, res) {
    api.getAllTransactions('mario.rossi', forwardSingleApiData.bind(this, res));
  });

  app.get('/api/user', function (req, res) {
    api.getCurrentUser('mario.rossi', forwardSingleApiData.bind(this, res));
  });


  function forwardSingleApiData (res, err, data) {
    if (err) {
      data = {'error': err};
    }
    res.type('json').send(data);
  }


};
