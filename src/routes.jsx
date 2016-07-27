import React, {Component} from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { Router, browserHistory, RouterContext, Route, IndexRoute, Redirect }  from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import MainLayout from './views/_common/main.layout.jsx';
import Index      from './views/index.jsx';
import Todolist   from './views/todolist.jsx';
import Crud       from './views/crud.jsx';


const routes = (
    <Route  path="/"  component={MainLayout} onEnter={() => console.log('onEnter')}>
        <IndexRoute   component={Index} />
        <Route path="/todolist"   component={Todolist}  onLeave={() => console.log('onLeave')} />
        <Route path="/crud"       component={Crud}  onLeave={() => console.log('onLeave')} />
        <Redirect from="*" to="/" />
    </Route>
);

export {routes};

export default function(serverProps) {
    return <Provider store={store} key="provider">
        {getRoutes(serverProps)}
    </Provider>;
}

function getRoutes(serverProps) {
    //If we run app in isomorphic env
    //We use this method for render routes
    if (serverProps) {
        return <RouterContext {...serverProps} />;
    }
    const history = syncHistoryWithStore(browserHistory, store);

    return <Router routes={routes} history={history} />;
}