const http = require('http');
http.createServer((req, res) => {
    res.end('Hello, my friend: index\n');
}).listen(8080);
