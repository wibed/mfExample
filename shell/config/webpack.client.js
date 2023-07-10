// MARK: ESM
// import path from 'path';
// import * as url from 'url';
// import { Configuration } from 'webpack';
// import { merge } from 'webpack-merge';
// import shared from './webpack.shared';
// import { client } from './module-federation';
// const __dirname = url.fileURLToPath(new URL('.', import.meta.url))
// export default merge<Configuration>(shared, webpackConfig);
    // library: { type: "module" },
    // libraryTarget: "module"
    // experiments: { outputModule: true },
    // externalsType: "module",
    

// MARK: COMMONJS
const path = require('path');
const { merge } = require('webpack-merge');
const shared = require('./webpack.shared');
const moduleFederationPlugin = require('./module-federation');

/**
 * @type {import('webpack').Configuration}
 **/
const webpackConfig = {
  name: 'client',
  target: 'web',
  entry: [path.resolve(__dirname, '../src/client/index')],
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, '../dist/client'),
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: 'http://localhost:3000/static/',
  },
  plugins: [moduleFederationPlugin.client],
};

module.exports = merge(shared, webpackConfig)