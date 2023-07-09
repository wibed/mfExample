import { Configuration } from 'webpack';

const tsRegex = /\.(js|jsx|ts|tsx)$/

const webpackConfig: Configuration = {
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: tsRegex,
        exclude: /node_modules/,
        use: [
          { loader: "ts-loader" }
        ],
      },
    ],
  },
  optimization: { splitChunks: false } //{ chunks: 'initial' as const } }
};

export default webpackConfig
