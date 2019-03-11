/* eslint-env commonjs */
const CopyWebpackPlugin = require('copy-webpack-plugin')
const WebpackChromeReloaderPlugin = require('webpack-chrome-extension-reloader')

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    background: './src/background.js'
  },
  plugins: [
    new WebpackChromeReloaderPlugin(),

    new CopyWebpackPlugin([
      { from: './src/manifest.json' }
    ])
  ],
  node: {
    fs: 'empty'
  }
}