var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: path.resolve(__dirname, './index.js'),
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, './public')
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader'] },
      { test: /(\.css)$/, loaders: ['style-loader', 'css-loader'] },
      { test: /(\.gif)$/, loaders: ['file-loader'] }
    ]
  }
}
