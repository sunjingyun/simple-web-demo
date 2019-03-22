const http = require('http');
http.createServer((req, res) => {
    res.end('Hello, my friend: aaa\n');
}).listen(8080);
