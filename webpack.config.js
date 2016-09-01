const fs          = require('fs');
const path        = require('path');
const argv        = require('yargs').argv;
const packageJson = require('./package.json');
const webpack     = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin  = require('html-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const ExtractTextPlugin  = require("extract-text-webpack-plugin");

//Copyright banner
const banner = fs.existsSync('./banner.txt') ?
               fs.readFileSync('./banner.txt', 'utf8') :
               '';

// Crossplatform set NODE_ENV
process.env.NODE_ENV = argv['node-env'];

const NODE_ENV = process.env.NODE_ENV;
// For set publicPath as localhost:port
var isLocalMode = argv.localMode;

const isDev       = NODE_ENV === 'development';
const isTest      = NODE_ENV === 'test';
const isSourceMap = !!argv.sourcemaps;

const config = require('./webpack.defaultConfig');

var css  = (isDev || isTest) ?
    "style!css?sourceMap&modules&importLoaders=1&localIdentName=[local]___[hash:base64:5]!postcss" :
    ExtractTextPlugin.extract("style", "css!postcss", {publicPath: '../'});
var less = (isDev || isTest) ?
    "style!css?sourceMap&modules&importLoaders=1&localIdentName=[local]___[hash:base64:5]!postcss!less?sourceMap" :
    ExtractTextPlugin.extract("style", "css?sourceMap&modules&importLoaders=1&localIdentName=[local]___[hash:base64:5]!postcss!less", {publicPath: '../'});
var sass = (isDev || isTest) ?
    "style!css?sourceMap&modules&importLoaders=1&localIdentName=[local]___[hash:base64:5]!postcss!sass?sourceMap" :
    ExtractTextPlugin.extract("style", "css?sourceMap&modules&importLoaders=1&localIdentName=[local]___[hash:base64:5]!postcss!sass", {publicPath: '../'});

var webpackConfig = {
    // isSourceMap - if we need run in production with source maps, we need set --sourcemaps
    devtool: (isSourceMap ? 'source-map' : (isDev || isTest) ? config.webpack.devtool : null),
    // entry split code to 2 packages - vendors include all libs, and app - include all custom code
    // In dev mode we doesn't need include vendors. We set only app
    entry  : config.webpack.entry,
    output: {
        publicPath: './',
        path: config.webpack.output.path,
        filename: '[name].js'
    },
    module: {
        preLoaders: [
            {test: /\.(js|jsx)$/, loader: "eslint-loader", exclude: /node_modules/}
        ],
        loaders: [
            {
                test: /\.html$/,
                loader: 'file?name=[name].[ext]'
            },
            {
                test: /\.scss$/,
                loader: sass
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loaders: [
                    'url?limit=10000&name=images/[name].[ext]'
                ]
            },
            {
                test : /\.(ttf|eot|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            },
            {
                test: /\.md$/,
                loader: "html!markdown"
            },
            {
                test: /\.css$/,
                loader: css
            },
            {
                test: /\.less$/,
                loader: less
            },
            {
                test: /\.json/,
                loader: "json"
            },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel',
                exclude: /node_modules/,
            }
        ]
    },
    cache: true,
    eslint: {
        emitErrors: true,
        failOnError: true,
        failOnWarning: true
    },
    postcss: (isDev || isTest) ? [
        require('precss')({}),
        require('autoprefixer')({})
    ] : [
        require('precss')({}),
        require('autoprefixer')({}),
        require('cssnano')({})
    ],
    resolve: {
        root: [
            path.join(__dirname, './src/vendors/bower'),
            path.join(__dirname, "node_modules"),
            path.join(__dirname, "./src/vendors/others")
        ],
        extensions: ['', '.js', '.jsx'],
        loaderExtensions: ['.js', ''],
        loaderPostfixes: [''],
        unsafeCache: true,
        postfixes: [''],
        alias: {
            '_atoms'  : __dirname + '/src/atoms/',
            '_configs': __dirname + '/src/atoms/configs',
            '_env'    : __dirname + '/src/atoms/configs/env.js',
            '_store'  : __dirname + '/src/atoms/store/index.js'
        }
    },
    profile: true,
    stats: {
        hash    : true,
        version : true,
        timings : true,
        assets  : true,
        chunks  : true,
        modules : true,
        reasons : true,
        children: true,
        source  : false,
        errors  : true,
        errorDetails: true,
        warnings    : true,
        publicPath  : true
    },
    devServer: {
        port  : config.webpack.devServer.port,
        hot   : true,
        noInfo: true,
        quiet : false,
        lazy  : false,
        historyApiFallback: true
    },
    plugins: [
        // NoErrorsPlugin — это стандартный плагин Webpack, который не дает перезаписать скрипты при наличии в них ошибок. Это уберегает от уничтожения старой сборки как следствие нерабочего кода в продакшене. Подключается стандартно в массив с плагинами:
        new webpack.NoErrorsPlugin(),

        new webpack.optimize.DedupePlugin(),
        // OccurrenceOrderPlugin — плагин, который минимизирует id, которые используются webpack для подгрузки чанков и прочего. Подключение:
        new webpack.optimize.OccurrenceOrderPlugin(),

        new CleanWebpackPlugin([config.webpack.output.path]),

        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: JSON.stringify(NODE_ENV || 'development') }
        }),

        new HtmlWebpackPlugin({
            title: packageJson.name,
            template: 'index.ejs'
        }),

        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),

        new webpack.optimize.UglifyJsPlugin({
            compress: {
                loops: true,
                warnings: false,
                screw_ie8: true,
                sequences: true,
                dead_code: true,
                conditionals: true,
                booleans: true,
                unused: true,
                if_return: true,
                join_vars: true,
                drop_console: true,
                unsafe      : true
            },
            minimize: true
        }),

        new ExtractTextPlugin("css/styles.css"),

        new webpack.BannerPlugin(banner),

        new ImageminPlugin({
            disable: false,
            optipng: {
                optimizationLevel: 3
            },
            gifsicle: {
                optimizationLevel: 1
            },
            jpegtran: {
                progressive: false
            },
            svgo: {
            },
            pngquant: null, // pngquant is not run unless you pass options here
            plugins: []
        })
    ],
    isomorphic: {
        port: config.isomorphic.port
    }
};

if ((isTest || isDev) && config.webpack.entry.vendors) {
    delete config.webpack.entry.vendors;
}

if (isLocalMode) {
    webpackConfig.output.publicPath = config.webpack.devServer.hostname + ':' + config.webpack.devServer.port + '/';
}

if (isDev || isTest) {
    /**
     * In dev mode or test mode we don't need many plugins. It is speed up work
     * */
    webpackConfig.plugins = removeUnusedPlugins(webpackConfig.plugins, [
        'OccurrenceOrderPlugin',
        'ImageminPlugin',
        'DedupePlugin',
        'UglifyJsPlugin',
        'CommonsChunkPlugin',
        'BannerPlugin',
        'ExtractTextPlugin'
    ]);
}

if (isTest) {
    webpackConfig.externals = {
        'jsdom': 'window',
        'cheerio': 'window',
        'react/addons': true,
        'react/lib/ReactContext': true,
        'react/lib/ExecutionEnvironment': true
    };

    webpackConfig.plugins = removeUnusedPlugins(webpackConfig.plugins, [
        'HtmlWebpackPlugin'
    ]);
}

function removeUnusedPlugins(array, unused) {
    return webpackConfig.plugins.filter(p => {
        const name = p.constructor.toString();
        const fnName = name.match(/^function (.*)\((.*\))/)

        const idx = unused.indexOf(fnName[1]);
        return idx < 0;
    });
}

module.exports = webpackConfig;