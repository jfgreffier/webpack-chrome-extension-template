/* eslint-env commonjs */
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    background: './src/background.js'
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: './src/manifest.json' }
    ])
  ],
  node: {
    fs: 'empty'
  }
}