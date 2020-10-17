const { isomorphicCompiler, backendCompiler, frontendCompiler } = require('@rockpack/compiler');
const path = require('path');

isomorphicCompiler(
    backendCompiler({
        src: 'src/server.jsx',
        dist: 'dist'
    }),
    frontendCompiler({
        src: 'src/client.jsx',
        vendor: [
            'react',
            'react-dom',
            'react-router-dom',
            'react-meta-tags',
            'redux',
            'redux-logger',
            'react-redux',
            'immutable',
            'prop-types',
            'redux-saga',
            'connected-react-router',
            'react-router',
            'history',
            'isomorphic-fetch',
            'valid-types',
            '@loadable/component'
        ],
        dist: 'public',
        styles: 'styles.css',
        copy: [
            { from: path.resolve(__dirname, './src/assets/favicon.ico'), to: './' }
        ]
    })
);
