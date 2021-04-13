const http = require('http');

const server = http.createServer((req, res) => {
  res.end('<h1>Hello everyone</h1>');
});
const port = 3000;

server.listen(port, () => {
  console.log('Server has been started');
});
