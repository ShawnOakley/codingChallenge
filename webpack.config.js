var webpack = require('webpack')
var path = require('path')

var BUILD_DIR = path.resolve(__dirname, 'src/client/public')
var APP_DIR = path.resolve(__dirname, 'src/client/app')
var TEST_DIR = path.resolve(__dirname, 'test')


var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  // add source map for easier debugging
  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: [APP_DIR, TEST_DIR],
        exclude: path.join(__dirname, 'node_modules'),
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  }
}

module.exports = config
