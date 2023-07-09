import path from 'path';
import * as url from 'url';
import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';

import shared from './webpack.shared';

import { client } from './module-federation';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

const webpackConfig: Configuration = {
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
    library: { type: "module" },
    libraryTarget: "module"
  },
  externalsType: "module",
  experiments: { outputModule: true },
  plugins: [client],
};


export default merge<Configuration>(shared, webpackConfig);
