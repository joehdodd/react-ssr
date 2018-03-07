import express from 'express';
import cors from 'cors';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../client/components/App';
import Html from '../client/Html';
import serialize from 'serialize-javascript';

const app = express();
app.use(cors());
app.use(express.static('public'));

app.get('*', (req, res) => {
  /**
   * renderToString() will take our React app and turn it into a string
   * to be inserted into our Html template function.
  **/
  const name = 'Wiley'
  const state = serialize(name);
  const body = renderToString(<App />);
  res.send(
    Html({
      state,
      body,
    })
  );
});

app.listen(3000, () => {
  console.log(`Serving at http://localhost:3000`);
});
