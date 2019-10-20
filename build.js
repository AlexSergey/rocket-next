const { isomorphicCompiler, backendCompiler, frontendCompiler } = require('rocket-starter');
const path = require('path');

isomorphicCompiler([
    {
        compiler: backendCompiler,
        config: {
            src: 'src/server.jsx',
            debug: true,
            dist: 'dist'
        }
    },
    {
        compiler: frontendCompiler,
        config: {
            src: 'src/client.jsx',
            debug: true,
            dist: 'public',
            styles: 'styles.css',
            copy: [
                { from: path.resolve(__dirname, './src/assets/favicon.ico'), to: './' }
            ]
        }
    }
]);
