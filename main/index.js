const http = require('http');
const util = require('util');
const config = require('./config.js');

const server = http.createServer((req, res) => {

    console.log(`Requesting: ${req.url}`);

    if (req.url.toLowerCase() === '/hello') {
        http.get(`${config.REMOTE}/hello/hello`, r => {
            let data = '';

            r.on('data', chunk => {
                data += chunk;
            });
            r.on('end', () => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(data);
            });
        }).on('error', err => {
            console.log(err);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end(`Could not connect to the remote host. Original error: "${err.message}"`);
        });
    } else if (req.url.toLowerCase() === '/ping') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('pong');
    } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Running...');
    }

}).listen(config.PORT, config.HOSTNAME, () => {
    console.log(`Server is running at http://${config.HOSTNAME}:${config.PORT}`);
    console.log(`Configuration: ${util.inspect(config, false, null, true)}`);
});