const http = require('http');
const config = require('./config.js');

const server = http.createServer((req, res) => {

    if (req.url === '/hello') {
        http.get(`${config.REMOTE}/hello/hello`, r => {
            let data = '';

            r.on('data', chunk => {
                data += chunk;
            });
            r.on('end', () => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(data);
            })
        })
    } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Running...');
    }

}).listen(config.PORT, config.HOSTNAME, () => {
    console.log(`Server is running at http://${config.HOSTNAME}:${config.PORT}`);
});