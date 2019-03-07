const webpack = require('webpack');
const HtmlWepackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWepackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ]
};
