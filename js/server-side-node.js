var http=require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('go away!! the website isnt finished');
}).listen(8080);
