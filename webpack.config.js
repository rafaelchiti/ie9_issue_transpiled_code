var webpack = require('webpack');

var webpackConfig = {
  entry: {
    app: './src/index.js'
  },
  output: {
    path: './build',
    filename: 'bundle.js',
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    loaders: [
      // IMPORTANT: we don't want to process EVERY single JS file with babel
      // loader. We only want to process the files inside our app structure
      // otherwise this could get very slow or even fail.
      {test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel-loader?optional=runtime']},
    ]
  }
};


module.exports = webpackConfig;
