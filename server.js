var http = require('http');
http.createServer(function (req, res) {
    console.log('hello world:' + new Date());
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(8080);
console.log('Server running');
