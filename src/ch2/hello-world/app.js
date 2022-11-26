const http = require('http');

const server = http.createServer((req, res) => {
  console.log('In comes a request to: ' + req.url);
  res.end('Hello, world!');
});

server.listen(3000);
