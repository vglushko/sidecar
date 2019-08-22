const http = require('http');
const config = require('./config.js');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
}).listen(config.PORT, config.HOSTNAME, () => {
    console.log(`Server is running at http://${config.HOSTNAME}:${config.PORT}`);
});
