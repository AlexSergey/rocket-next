import {render} from 'react-dom';
import React, {Component} from 'react';
var isDevelopment = process.env.NODE_ENV === 'development' ? true : false;

require('./styles/stylesheets/_include.less');

var root = document.getElementById('root');

var App;

if (isDevelopment) {
    var BSOD = require('react-bsod');

    try {
        App = require('./routes').default;

        render(App(), root);
    } catch (e) {
        render(<BSOD error={e} />, root);
    }
} else {
    App = require('./routes').default;

    render(App(), root);
}