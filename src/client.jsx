import {render} from 'react-dom';
import React, {Component} from 'react';
import App from './routes';

require('./styles/stylesheets/_include.less');

render(App(), document.getElementById('root'));