const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dev_build'
  },
  watch: true,
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dev_build')
  }
})
