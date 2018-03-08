import express from 'express';
import cors from 'cors';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import App from '../shared/App';
import Html from '../client/Html';
import serialize from 'serialize-javascript';
import { fetchPopularRepos } from '../shared/api';
import { appStore } from '../client/redux/configureStore';
import { fetchRepos } from '../client/redux/actions';

const app = express();
const initState = appStore.dispatch(fetchRepos());
app.use(cors());
app.use(express.static('public'));
if (typeof(window) == 'undefined'){
    global.window = new Object();
}
app.get('*', (req, res) => {
    const state = serialize(initState);
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
