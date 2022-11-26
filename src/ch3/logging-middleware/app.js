const express = require('express');
const logger = require('morgan');
const http = require('http');

const app = express();

app.use(logger('short'));

app.use((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, world!');
});

http.createServer(app).listen(3000);
