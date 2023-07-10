// MARK: ESM
//import { Configuration } from 'webpack';
// export default webpackConfig

/**
 * @type {import('webpack').Configuration}
 **/
const webpackConfig = {
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(js|ts)x?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          plugins: ["@babel/plugin-proposal-class-properties"],
          presets: ["@babel/preset-react", "@babel/preset-typescript"]
        }
      },
    ],
  },
  optimization: { splitChunks: { chunks: 'initial' } }
};

module.exports = webpackConfig;