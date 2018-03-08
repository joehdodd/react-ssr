import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from '../shared/App';
import { appStore } from './redux/configureStore';

ReactDOM.hydrate(
  <Provider store={appStore}>
    <App state={window.__INITIAL_STATE__} />
  </Provider>,
  document.getElementById('root')
);
