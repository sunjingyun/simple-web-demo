const http = require('http');
http.createServer((req, res) => {
    console.log(req.headers);
    res.end('Hello, my friend: index\n');
}).listen(8080);
