import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.hydrate(
  <App state={window.__INITIAL_STATE__} />,
  document.getElementById('root')
);
