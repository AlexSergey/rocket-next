const config = require('./config');
const { make, getArgs } = require('rocket-starter');
const tester = require('rocket-tester');
const { join } = require('path');

tester(make(config), {
    root: join(__dirname, 'src'),
    watch: !!getArgs().watch
});