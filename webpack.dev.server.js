var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var open = require("open");
var colors = require('colors');

var config = require("./webpack.config.js");
var port = config.devServer.port;
var hostname = config.devServer.hostname;

config.plugins.unshift(
    new webpack.HotModuleReplacementPlugin()
);

config.entry.app.unshift(
    `webpack-dev-server/client?${hostname}:${port}/`,
    "webpack/hot/dev-server"
);

var compiler = webpack(config);

var server = new webpackDevServer(compiler, config.devServer);

server.listen(port, function() {
    console.log(`Dev server have been started on ${hostname}:${port}`.bgMagenta.underline)
    open(`${hostname}:${port}/`);
});
