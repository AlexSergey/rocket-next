var fs = require('fs');
var customCofig = fs.existsSync('./custom.config.js') ? require('./custom.config') : {};
var deepAssign = require('deep-assign');

var config = deepAssign({}, {
    mocks: {
        port: 8888,
        file: 'mocks.json'
    }
}, customCofig);

var jsonServer = require('json-server');
var server = jsonServer.create();
var router = jsonServer.router(config.mocks.file);
var middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(router);

server.listen(config.mocks.port, function () {
    console.log('JSON Server is running')
});