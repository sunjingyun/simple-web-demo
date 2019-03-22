const http = require('http');
http.createServer((req, res) => {
    res.end('Hello, my friend: server\n');
}).listen(8080);
