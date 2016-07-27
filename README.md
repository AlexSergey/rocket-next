# React Boilerplate 2.0
## (Redux, React-Router 2.0, webpack, babel, npm, isomorphic, Karma, Mocha, enzyme)
Hello ! This is test boilerplate of <strong>React + Redux</strong>
This is little single page application can run isomorphic and include routing, todolist example and fetch data from <a href="https://restcountries.eu/">restcountries</a>

## Install
- <pre>npm install</pre>


## Usage
- <pre>npm run p</pre> - build minification version for production
- <pre>npm run isomorphic</pre> - run isomorphic application version use Koa (work after production build or with webpack dev server)
- <pre>npm run w</pre> - run webpack dev server with watcher in <strong>http://localhost:8000</strong>
- <pre>npm run test-w</pre> -  run tests webpack dev server with watcher in <strong>http://localhost:8001</strong>
- <pre>npm run doc</pre> - run JSDoc generate documentation
- <pre>npm run metrics</pre> -  run Plato for code analyses. All reports you can find in reports folder
- <pre>npm run count</pre> -  run Sloc for calculate code numbers

You can add your custom settings for webpack in <strong>config.js</strong>

### Babel:
- preset-es2015 - support all specification ES2015
- preset-react - support JSX
- decorators-legacy - support @decorator syntax
- kneden - support async await
- transform-object-assign - support Object.assign