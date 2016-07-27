var webpackConfig = require('./webpack.config');
var argv = require('yargs').argv;

module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['mocha', 'chai'],
        files: [
            'webpack.tests.js'
        ],

        preprocessors: {
            // add webpack as preprocessor
            'webpack.tests.js': ['webpack', 'sourcemap'],
        },

        webpack: webpackConfig,
        webpackServer: {
            noInfo: true
        },

        plugins: [
            'karma-mocha',
            'karma-chai',
            'karma-webpack',
            'karma-phantomjs-launcher',
            'karma-spec-reporter',
            'karma-sourcemap-loader'
        ],

        reporters: ['spec'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        browsers: ['PhantomJS'],
        singleRun: !argv.watch
    });
}