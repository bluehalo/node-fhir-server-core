const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  watch: process.env.NODE_ENV === 'development',
  entry: path.resolve('./docs/src/js/main.js'),
  output: {
    path: path.resolve('./docs/dist'),
    filename: 'js/main.min.js'
  },
  resolve: {
    alias: {
      docs: path.resolve('./docs/src')
    }
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/core.css'),
    new HtmlWebpackPlugin({
      template: path.resolve('./docs/src/index.html'),
      inject: false
    }),
    new CopyWebpackPlugin([
			path.resolve('./docs/src/openapi.json'),
      {
        from: path.resolve('./docs/src/definitions'),
        to: path.resolve('./docs/dist/definitions')
      }
    ])
  ]
};
