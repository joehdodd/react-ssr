import express from 'express';
import cors from 'cors';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import App from '../shared/App';
import Html from '../client/Html';
import serialize from 'serialize-javascript';
import { appStore } from '../client/redux/configureStore';

const app = express();
app.use(cors());
app.use(express.static('public'));
app.get('*', (req, res) => {
    const state = serialize(appStore.getState());
    const body = renderToString(
      <Provider store={appStore}>
        <App />
      </Provider>
    );
    res.send(
      Html({
        state,
        body
      })
    );
});

app.listen(3000, () => {
  console.log(`Serving at http://localhost:3000`);
});
