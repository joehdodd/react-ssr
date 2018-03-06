import express from 'express';
import cors from 'cors';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../client/components/App';
import Html from '../client/Html';

const app = express();
app.use(cors());
app.use(express.static('public'));

app.get('*', (req, res) => {
  /**
   * renderToString() will take our React app and turn it into a string
   * to be inserted into our Html template function.
  **/
  const body = renderToString(<App />);
  res.send(
    Html({
      body
    })
  );
});

app.listen(3000, () => {
  console.log(`Serving at http://localhost:3000`);
});
