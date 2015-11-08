module.exports = function categoryAPI (api) {
  api.getAllCategories = getAllCategories;
  api.getOneCategory = getOneCategory;
};

function getAllCategories (userId) {
  return new Promise(function (resolve, reject) {
    resolve(categoryData);
  });
}

function getOneCategory (userId, categoryId) {
  return new Promise(function (resolve, reject) {
    var notFound = false;
    Object.keys(categoryData).forEach(function (category) {
      if (category.id === categoryId) {
        resolve(category);
        return notFound = false;
      }
    });

    if (notFound) reject(404);
  });
}


/* Sample data */

var categoryData = require('./example-categories.json');
