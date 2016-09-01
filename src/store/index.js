import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import {middleware} from '../middlewares/empty.middleware';

import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import promiseMiddleware from 'redux-promise';

import { routerReducer } from 'react-router-redux';
import todolistReducer from '../components/Todolist/reducers';
import crudReducer from '../components/Crud/reducers';

var isDevelopment = process.env.NODE_ENV === 'development' ? true : false;

var reducers = combineReducers(Object.assign({}, {
    routing: routerReducer,
    todolist: todolistReducer,
    crud: crudReducer
}));

const router = routerMiddleware(browserHistory);

var finalCreateStore = compose(
    applyMiddleware(
        promiseMiddleware,
        router,
        (isDevelopment && typeof window === 'object') ? require('redux-logger')({
            collapsed: true
        }) : middleware
    ),
    (isDevelopment && typeof window === 'object' && typeof window.devToolsExtension !== 'undefined') ? window.devToolsExtension() : f => f
)(createStore);

var store = finalCreateStore(reducers);

export default store;