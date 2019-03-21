const http = require('http');
http.createServer((req, res) => {
    res.end('Hello\n');
}).listen(8080);