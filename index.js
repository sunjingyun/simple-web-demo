const http = require('http');
http.createServer((req, res) => {
    res.end('Hello, Hello, my friend: sunjingyun\n');
}).listen(8080);
