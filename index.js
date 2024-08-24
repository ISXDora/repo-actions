const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  if(req.url == '/'){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Página principal!</>\n');
  }else if(req.url == '/bemvindo'){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Bem vindo!</>\n');
  }
  res.end('ok')
});


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});