import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createLogger } from 'redux-logger';
import { middleware as emptyMiddleware } from './utils/empty.middleware';
import { isDevelopment } from './utils/mode';
import isBackend from './utils/isBackend';
import createSagaMiddleware from 'redux-saga';
// Reducers
import postsReducer from './features/Posts/Posts.reducer';
// Sagas
import watchFetchPosts from './features/Posts/Posts.sagas';

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    postsReducer
});

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
    (!isBackend() &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

export default (history) => {
    let store = createStore(
        createRootReducer(history),
        composeEnhancers(
            applyMiddleware(
                sagaMiddleware,
                routerMiddleware(history),
                (isDevelopment && !isBackend()) ? createLogger({
                    collapsed: true
                }) : emptyMiddleware
            )
        )
    );

    store.sagas = [
        watchFetchPosts
    ].map(saga => {
        return sagaMiddleware.run(saga);
    });

    return store;
}


