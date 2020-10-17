import React from "react";
import { hydrate } from "react-dom";
import App from "./App";
import { ConnectedRouter } from 'connected-react-router';
import createStore from './store';
import { Provider as ReduxProvider } from "react-redux";
import { createBrowserHistory } from 'history';
import StyleContext from 'isomorphic-style-loader/StyleContext'
import { loadableReady } from '@loadable/component';
import { isProduction } from './utils/mode';

const insertCss = (...styles) => {
    const removeCss = isProduction ? [] : styles.map(style => style && typeof style._insertCss === 'function' && style._insertCss());
    return () => removeCss.forEach(dispose => dispose());
};

const history = createBrowserHistory();
const { store } = createStore(history, window.REDUX_DATA);

loadableReady(() => {
    hydrate(
        <StyleContext.Provider value={{ insertCss }}>
            <ReduxProvider store={store}>
                <ConnectedRouter history={history}>
                    <App />
                </ConnectedRouter>
            </ReduxProvider>
        </StyleContext.Provider>,
        document.getElementById('root')
    );
});
