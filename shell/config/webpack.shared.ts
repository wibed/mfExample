import { Configuration } from 'webpack';

const tsRegex = /\.(js|jsx|ts|tsx)$/

// {
//   "jsc": {
//     "parser": {
//       "syntax": "typescript",
//       "tsx": false,
//       "decorators": true,
//       "dynamicImport": true
//     },
//     "target": "es2022",
//     "paths": {},
//     "baseUrl": "."
//   },
//   "module": {
//     "type": "commonjs"
//   }
// }

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
          {
            loader: "babel-loader",
            options: {
              plugins: [
                ["@babel/plugin-transform-modules-commonjs", { allowTopLevelThis: true }]
              ],
              presets: [
                "@babel/preset-react",
                "@babel/preset-typescript"
              ]
            }
          }
        ],
      },
    ],
  },
  optimization: { splitChunks: { chunks: 'async' as const } }
};

export default webpackConfig
