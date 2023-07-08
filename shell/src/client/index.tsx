import * as ReactDOMClient from 'react-dom/client';
import App from './components/App';

const render = App => {
  const container = document.getElementById('root');
  if(!container) throw new Error("container element could not be found")

  ReactDOMClient.hydrateRoot(container, <App />);
};

export default render(App);