/* Dependencies */

var request = require('request');

/* API definition */

var api = module.exports = {
  apiKey: 'a8cce772-f3b4-47d9-befa-17d4d3e97af3',
  apiUrl: 'https://ucg-apimanager.axwaycloud.net:8065',

  get: function (url, params, callback) {
    return this.request('get', url, params, null, callback);
  },
  put: function (url, params, body, callback) {
    return this.request('put', url, params, null, callback);
  },
  post: function (url, params, body, callback) {
    return this.request('post', url, params, body, callback);
  },
  delete: function (url, params, callback) {
    return this.request('delete', url, null, params);
  },
  request: function (method, endpointUrl, params, body, callback) {
    // Configuration for the real API request
    var requestConfig = {
      url: this.apiUrl + endpointUrl,
      method: method,
      headers: {
        'keyId': this.apiKey
      }
    };
    if (params) {
      // Add query string
      requestConfig.qs = params;
    }
    if (body) {
      requestConfig.body = body;
    }

    // Do the actual request to the API
    var apiRequest = request(requestConfig, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        try {
          var data = JSON.parse(body);
          callback(null, data, response);
        } catch (err) {
          callback(err, 200);
        }
      } else {
        callback(error, response.statusCode);
      }
    });
  }
};

require('./transactions')(api);
require('./accounts')(api);
