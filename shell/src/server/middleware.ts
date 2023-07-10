// MARK: ESM
// import serverEntry from './server-entry';
// export default middleware;

const serverEntry = require('./server-entry')

function middleware(express, app, done) {
  // static path where files such as images and js will be served from
  app.use('/static', express.static('./dist/client'));

  const renderThunk = serverEntry.default
  const serverRender = renderThunk();
  app.get('/*', serverRender);

  done();
}
export default middleware

