module.exports = function userAPI (api) {
  api.getUser = getUser;
};

function getUser (userId) {
  return new Promise(function (resolve, reject) {
    resolve(userData);
  });
}


/* Sample data */

var userData = require('./example-user.json');
