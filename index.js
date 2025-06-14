const express = require('express');
const app = express();
const PORT = 3000;

// Middleware for logging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// HTML STRUCTURE
function renderPage(title, content) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>${title}</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
          padding: 20px;
          max-width: 800px;
          margin: auto;
        }
        nav a {
          margin-right: 15px;
          text-decoration: none;
          color: #007BFF;
        }
        nav a:hover {
          text-decoration: underline;
        }
        h1 {
          color: #333;
        }
      </style>
    </head>
    <body>
      <nav>
        <a href="/">Home</a>
        <a href="/second">Second Page</a>
        <a href="/third">Third Page</a>
      </nav>
      <hr>
      <h1>${title}</h1>
      <p>${content}</p>
    </body>
    </html>
  `;
}

// Home page
app.get('/', (req, res) => {
  res.send(renderPage("Home Page", "Welcome to the beautifully styled Home Page!"));
});

// Second page
app.get('/second', (req, res) => {
  res.send(renderPage("Second Page", "You're now viewing the Second Page. Everything is organized and easy to read."));
});

// Third page
app.get('/third', (req, res) => {
  res.send(renderPage("Third Page", "This is the Third Page. Feel free to explore or return to the Home Page."));
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
