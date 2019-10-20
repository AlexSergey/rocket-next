const MODE = {
    development: 'development',
    test: 'test',
    production: 'production'
};

let isDevelopment = MODE[process.env.NODE_ENV] === 'development';

export { isDevelopment };
