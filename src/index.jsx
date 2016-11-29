import { render } from 'react-dom';
import React, {Component} from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { Router, browserHistory }  from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import router from './router';

var isDevelopment = process.env.NODE_ENV === 'development' ? true : false,
    root = document.getElementById('root'),
    App;

function getApp() {
    const history = syncHistoryWithStore(browserHistory, store);

    return <Provider store={store} key="provider">
        <Router routes={router} history={history} />
    </Provider>;
}

if (isDevelopment) {
    var BSOD = require('react-bsod');

    try {
        App = getApp();

        render(App, root);
    } catch (e) {
        render(<BSOD error={e} />, root);
    }
} else {
    App = getApp();

    render(App, root);
}