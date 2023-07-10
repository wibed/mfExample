import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';

const render = App => {
  const root = document.getElementById('root');
  if(!root) throw new Error("container element could not be found")

  ReactDOMClient.hydrateRoot(root, <App />);
};

render(App);