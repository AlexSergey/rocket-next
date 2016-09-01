var webpackConfig = require('./webpack.config');
var argv = require('yargs').argv;
process.env.NODE_ENV = argv['node-env'];
webpackConfig.devtool = 'inline-source-map';

module.exports = function(config) {
    config.set({
        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '.',
        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha', 'chai'],
        files: [
            'webpack.tests.js'
        ],

        preprocessors: {
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
            'karma-chrome-launcher',
            'karma-spec-reporter',
            'karma-sourcemap-loader'
        ],

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['spec'],
        port: 9876,
        colors: true,
        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        // logLevel: config.LOG_DEBUG,
        logLevel: config.LOG_DISABLE,
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],
        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: !argv.watch,
        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: argv.watch,
    });
}