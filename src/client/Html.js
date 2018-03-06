const Html = ({ body }) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>React SSR</title>
      <script src='/bundle.js' defer></script>
    </head>
    <body style="margin:0">
      <div id="root">${body}</div>
    </body>
  </html>
`;

export default Html;
