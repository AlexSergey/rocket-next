require('dotenv').config();

const config = {
    mocks: {
        port: process.env.MOCK_SERVER_PORT,
        file: 'mocks.json'
    }
};

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(config.mocks.file);
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(router);

server.listen(config.mocks.port, function () {
    console.log(`JSON Server is running on port ${process.env.MOCK_SERVER_PORT}`);
});
