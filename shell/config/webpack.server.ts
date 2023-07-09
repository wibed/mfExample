import * as url from 'url';
import path from 'path';
import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';

import shared from './webpack.shared';
import { server } from './module-federation';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

const webpackConfig: Configuration = {
  name: 'server',
  target: false,
  entry: [path.resolve(__dirname, '../src/server/index')],
  output: {
    path: path.resolve(__dirname, '../dist/server'),
    filename: '[name].js',
    chunkFilename: '[name].js',
    library: { type: "module" },
    libraryTarget: "module"
  },
  experiments: { outputModule: true },
  mode: 'development' as const,
  plugins: [...server] as any,
  stats: { colors: true },
};

export default merge<Configuration>(shared, webpackConfig)
