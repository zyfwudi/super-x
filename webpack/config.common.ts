const path = require('path');
const Webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '../src/index.tsx'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash:8].js',
    // publicPath: './',
    // libraryTarget: 'umd',
    // library: 'superX'
  },
  resolve: {
    extensions: ['.mjs','.js', '.json', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(tsx|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new Webpack.ProvidePlugin({
      React: 'react'
    }),
    new HTMLWebpackPlugin({
      title: 'superX',
      template: path.resolve(__dirname, '../public/index.ejs'),
    })
  ]

}