import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { isDevelopment } from './utils/mode';
import createSagaMiddleware from 'redux-saga';
import { fork } from 'redux-saga/effects'
import postsReducer from './features/Posts/Posts.reducer';
import postSaga from './features/Posts/Posts.sagas';

export default (history, initState = {}) => {
    const middleware = getDefaultMiddleware({
        immutableCheck: true,
        serializableCheck: false,
        thunk: false,
    });

    const sagaMiddleware = createSagaMiddleware();

    const store = configureStore({
        reducer: {
            router: connectRouter(history),
            postsReducer
        },
        devTools: isDevelopment,
        middleware: middleware.concat([
            sagaMiddleware,
            routerMiddleware(history)
        ]),
        preloadedState: initState
    });

    function* sagas() {
        yield fork(postSaga);
    }

    const rootSaga = sagaMiddleware.run(sagas);

    return { store, rootSaga };
}


