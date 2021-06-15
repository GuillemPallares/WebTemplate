const path = require('path');
const webpack = require('webpack'); //to access built-in plugins
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.bundle.js',
  },
  plugins: [
      new HtmlWebpackPlugin({ template: './src/index.html' })
    ],
  module: {
    rules: [
      { test: /\.css$/, use: 'css-loader' },
    ]
  }
};