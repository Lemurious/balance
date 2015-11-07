var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');
var config = {
  entry: path.resolve(__dirname, 'client/main.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      loader: 'babel',
      exclude: node_modules
    }, {
      test: /\.css$/, // Only .css files
      loader: 'style!css' // Run both loaders
    }],
    noParse: [pathToReact]
  }
};

module.exports = config;
