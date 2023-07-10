
// MARK: ESM
// import path from 'path';
// import * as url from 'url';
// import { Configuration } from 'webpack';
// import { merge } from 'webpack-merge';
// import shared from './webpack.shared'
// import { server } from './module-federation'
// const __dirname = url.fileURLToPath(new URL('.', import.meta.url))
// export default merge<Configuration>(shared, webpackConfig)
    // libraryTarget: "module"
    // library: { type: "module" },
    // experiments: { outputModule: true },

const path = require('path');
const { merge } = require('webpack-merge');
const shared = require('./webpack.shared');
const moduleFederationPlugin = require('./module-federation');

/**
 * @type {import('webpack').Configuration}
 **/
const webpackConfig = {
  name: 'server',
  mode: 'development',
  target: false,
  entry: [path.resolve(__dirname, '../src/server/index')],
  output: {
    path: path.resolve(__dirname, '../dist/server'),
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  plugins: [...moduleFederationPlugin.server],
  stats: { colors: true },
};

module.exports = merge(shared, webpackConfig);
