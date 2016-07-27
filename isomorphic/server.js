import React from "react";
import koa from "koa";
import fs from 'fs';
import koaStatic from "koa-static";
import ReactDOM from "react-dom/server";
import * as ReactRouter from "react-router";
import {env, serializeDocument} from 'jsdom';
import store from '../src/store';
import App, {routes} from '../src/routes.jsx';
import config from '../webpack.config.js';

var html = fs.readFileSync('./dist/index.html', 'utf8');

const server = koa();

server.use(koaStatic("dist"));

server.use(function *(next) {
    var self = this,
        role = this.cookies.get('role') || 'anonymous';

    yield ((callback) => {
        const location  = this.path;
        ReactRouter.match({routes, location}, (error, redirectLocation, renderProps) => {
            if (error || !renderProps) {
                callback(error);
                return;
            }

            const initialState = store.getState();

            const reactEls = ReactDOM.renderToString(
                App(renderProps)
            );

            env(html, function(err, window) {
                var root = window.document.getElementById('root');

                root.innerHTML = `<div id="root">${reactEls}</div><script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};</script>`;

                self.type = "text/html";
                self.body = serializeDocument(window.document);

                callback(null);
            });
        });
    });
});

server.listen(config.isomorphic.port, () => {
    console.info("Server is listening " + config.isomorphic.port);
});