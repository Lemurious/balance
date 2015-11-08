/* Dependencies */

var api = require('./middleware-api')();

/* API Routes */

module.exports = function (app) {

  app.get('/api/accounts', function (req, res) {
    handleApiRequest(api.getAllAccounts('mario.rossi'), req, res);
  });

  app.get('/api/accounts/:id', function (req, res) {
    handleApiRequest(api.getOneAccount('mario.rossi', req.params.id), req, res);
  });

  app.get('/api/transactions', function (req, res) {
    handleApiRequest(api.getAllTransactions('mario.rossi'), req, res);
  });

  app.get('/api/transactions/:id', function (req, res) {
    handleApiRequest(api.getOneTransaction('mario.rossi', req.params.id), req, res);
  });

  app.get('/api/categories', function (req, res) {
    handleApiRequest(api.getAllCategories('mario.rossi'), req, res);
  });

  app.get('/api/categories/:id', function (req, res) {
    handleApiRequest(api.getOneCategory('mario.rossi', req.params.id), req, res);
  });

};

// Promise handling for api calls

function handleApiRequest (promise, req, res) {
  promise.then(requestSucceeded, requestFailed);
  function requestSucceeded (resultData) {
    res.type('json').send(resultData);
  }
  function requestFailed (error) {
    if (typeof error == 'number') {
      res.status(error).end();
    } else {
      res.status(500).send('Error: ' + error);
    }
  }
}
