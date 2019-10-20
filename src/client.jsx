import React from "react";
import { hydrate } from "react-dom";
import App from "./App";
import { ConnectedRouter } from 'connected-react-router';
import createStore from './store';
import { Provider as ReduxProvider } from "react-redux";
import { createBrowserHistory } from 'history';
import StyleContext from 'isomorphic-style-loader/StyleContext'
import { isDevelopment } from './utils/mode';

const insertCss = (...styles) => {
    const removeCss = styles.map(style => style._insertCss());
    return () => removeCss.forEach(dispose => dispose());
};
const history = createBrowserHistory();
const store = createStore(history);

const Client = () => <ReduxProvider store={store}>
    <ConnectedRouter history={history}>
        <App />
    </ConnectedRouter>
</ReduxProvider>;

hydrate(isDevelopment ? <StyleContext.Provider value={{ insertCss }}>
        <Client />
    </StyleContext.Provider> : <Client />, document.getElementById( 'root' ) );
