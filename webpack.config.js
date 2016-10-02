var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry:  './src',
  output: {
    path: 'build',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        loader: 'babel',
        include: __dirname + '/src',
      },
      {
        test: /\.scss/,
        loader: ExtractTextPlugin.extract("css")
      }
    ],
  },
  plugins: [
    new ExtractTextPlugin("styles.css")
  ]
};
