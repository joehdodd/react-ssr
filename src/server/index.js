import express from 'express';
import cors from 'cors';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../shared/App';
import Html from '../client/Html';
import serialize from 'serialize-javascript';
import { fetchPopularRepos } from '../shared/api';

const app = express();
app.use(cors());
app.use(express.static('public'));

app.get('*', (req, res) => {
  fetchPopularRepos().then(data => {
    const state = serialize(data);
    const body = renderToString(<App />);
    res.send(
      Html({
        state,
        body
      })
    );
  });
});

app.listen(3000, () => {
  console.log(`Serving at http://localhost:3000`);
});
