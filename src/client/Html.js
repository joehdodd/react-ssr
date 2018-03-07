const Html = ({ state, body }) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>React SSR</title>
      <script src='/bundle.js' defer></script>
      <script>window.__INITIAL_STATE__ = ${state}</script>
    </head>
    <body style="margin: 0; background-color: #f9f9f9">
      <div id="root">${body}</div>
    </body>
  </html>
`;

export default Html;
