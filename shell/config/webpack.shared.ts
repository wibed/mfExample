import { Configuration } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

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
  optimization: { splitChunks: false } // { chunks: 'async' as const } }
};

export default webpackConfig
