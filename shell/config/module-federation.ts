
import webpack from 'webpack'
import mfnode from '@module-federation/node';
import packagejson from "../package.json" assert { type: "json" }

const container = webpack.container
const { NodeFederationPlugin, StreamingTargetPlugin } = mfnode
const dependencies = packagejson.dependencies

export const client = new container.ModuleFederationPlugin({
  name: 'shell',
  filename: 'container.js',
  library: { type: "module" },
  // remotes: {
  //   remote1: 'remote1@http://localhost:3001/client/remoteEntry.js',
  // },
  shared: [{ 
    react: dependencies.react,
    'react-dom': dependencies['react-dom'] 
  }],
})

export const server = [
  new NodeFederationPlugin({
    name: 'shell',
    library: { type: 'module' },
    experiments: { outputModule: true },
    filename: 'remoteEntry.js',
    // remotes: {
    //   remote1: 'remote1@http://localhost:3001/server/remoteEntry.js',
    // },
    shared: [{ 
      react: dependencies.react, 
      'react-dom': dependencies['react-dom'] 
    }],
  }, {}),
  new StreamingTargetPlugin({
    name: 'shell',
    library: { type: 'module' },
    // remotes: {
    //   remote1: 'remote1@http://localhost:3001/server/remoteEntry.js',
    // },
  }),
]
