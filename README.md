# React Boilerplate 3.0

## React, Redux, React-Router 2.0, webpack, eslint, babel, npm, Karma, enzyme, less, sass, postcss, autoprefixer

This is boilerplate for <strong>React + Redux</strong>

This is little single page application include routing, todolist example and CRUD by json.server

## Install
- <pre>npm install</pre>


## Usage
- <pre>npm start</pre> - run webpack dev server with watcher
- <pre>npm run development</pre> - build version with source-map
- <pre>npm run production</pre> - build minification version for production
- <pre>npm run test</pre> -  run Karma & PhantomJS runner
- <pre>npm run test:watch</pre> -  run Karma & PhantomJS runner with watcher
- <pre>npm run documentation</pre> - run JSDoc generate documentation
- <pre>npm run mocks</pre> -  run json-server with mock file (mocks.json - settings, json.server.js - server)
- <pre>npm run count</pre> -  run Sloc for calculate code numbers

You can add your custom settings for webpack in <strong>webpack.customConfig</strong>

### Babel:
- preset-es2015 - support all specification ES2015
- preset-react - support JSX
- decorators-legacy - support @decorator syntax
- kneden - support async await
- transform-object-assign - support Object.assign