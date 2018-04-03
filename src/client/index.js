import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../shared/App';
import { appStore } from './redux/configureStore';

ReactDOM.hydrate(
  <Provider store={appStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
