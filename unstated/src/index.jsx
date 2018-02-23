import { render } from 'react-dom';
import { Provider } from 'unstated';
import React from 'react';
import './assets/styles/index.scss';
import router from './router';
import { Router, browserHistory }  from 'react-router';

render(<Provider>
    <Router routes={router} history={browserHistory} />
</Provider>, document.getElementById('root'));