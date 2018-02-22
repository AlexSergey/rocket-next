import { render } from 'react-dom';
import React from 'react';
import './assets/styles/index.scss';
import { Provider } from 'react-redux';
import store from './store';
import router from './router';
import { Router, browserHistory }  from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

const history = syncHistoryWithStore(browserHistory, store);

render(<Provider store={store} key="provider">
    <Router routes={router} history={history} />
</Provider>, document.getElementById('root'));