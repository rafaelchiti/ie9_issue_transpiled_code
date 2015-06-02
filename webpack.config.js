var webpack = require('webpack');

var webpackConfig = {
  entry: {
    app: './src/index.js'
  },
  devtool: 'eval-source-map',
  module: {
    loaders: [
      {test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel-loader']},
    ]
  }
};


module.exports = webpackConfig;
