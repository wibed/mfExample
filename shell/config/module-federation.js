// MARK: ESM
// import webpack from 'webpack'
// import mfnode from '@module-federation/node';
// import packagejson from "../package.json" assert { type: "json" }
// const container = webpack.container
// const { NodeFederationPlugin, StreamingTargetPlugin } = mfnode
// const dependencies = packagejson.dependencies
// export const client = new ModuleFederationPlugin({...
// export const server = [...


// MARK: COMMONJS
const dependencies = require('../package.json').dependencies;
const { ModuleFederationPlugin } = require('webpack').container;
const { NodeFederationPlugin, StreamingTargetPlugin } = require('@module-federation/node');


module.exports = {
  client: new ModuleFederationPlugin({
    name: 'shell',
    filename: 'container.js',
    remotes: {
      //   remote1: 'remote1@http://localhost:3001/client/remoteEntry.js',
    },
    shared: [{
      react: { singleton: true, requiredVersion: dependencies.react },
      'react-dom': { singleton: true, requiredVersion: dependencies['react-dom'] }
    }],
  }),
  server: [
    new NodeFederationPlugin({
      name: 'shell',
      filename: 'remoteEntry.js',
      remotes: {
        //   remote1: 'remote1@http://localhost:3001/server/remoteEntry.js',
      },
      shared: [{
        react: dependencies.react,
        'react-dom': dependencies['react-dom']
      }],
    }, {}),
    new StreamingTargetPlugin({
      name: 'shell',
      remotes: {
        //   remote1: 'remote1@http://localhost:3001/server/remoteEntry.js',
      },
    }),
  ]
}

