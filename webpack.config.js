var webpack = require('webpack');

var webpackConfig = {
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:9090', // WebpackDevServer host and port
      'webpack/hot/only-dev-server',
      './src/module_a.js'
    ],
    vendor: ['react']
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
      {test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot', 'babel-loader?optional=runtime']},
    ]
  },
  resolve: {
    // Needed so you can require('a') instead of require('a.jsx')
    extensions: ['', '.js', '.jsx', '.json', '.styl'],
    // Let us do things like require('app/stores/Channel')
    root: __dirname
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
  ]
};


module.exports = webpackConfig;
