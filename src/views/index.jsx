import React, {Component} from 'react';

export default class Index extends Component {
    render() {
        return <div className="main">
            <h1>React Boilerplate 3.0</h1>
            <h2>(Redux, React-Router 3.0, webpack, babel, npm, isomorphic, Karma, Mocha, enzyme)</h2>
            <p>Hello ! This is test boilerplate of <strong>React + Redux</strong></p>
            <p>This is little single page application can run isomorphic and include routing, todolist example and CRUD by json.server</p>
            <hr />
            <h3>Install:</h3>
            <ul className="list-num">
                <li> - <span className="code">npm install</span> in main directory</li>
            </ul>
            <h3>Usage:</h3>
            <ul className="list-num">
                <li> - <span className="code">npm run p</span> build minification version for production</li>
                <li> - <span className="code">npm run isomorphic</span> run isomorphic application version use Koa (work after production build or with webpack dev server)</li>
                <li> - <span className="code">npm run w</span> run webpack dev server with watcher in <strong>http://localhost:8000</strong></li>
                <li> - <span className="code">npm run test-w</span> run tests webpack dev server with watcher in <strong>http://localhost:8001</strong></li>
                <li> - <span className="code">npm run doc</span> run JSDoc generate documentation</li>
                <li> - <span className="code">npm run metrics</span> run Plato for code analyses. All reports you can find in reports folder</li>
                <li> - <span className="code">npm run count</span> run Sloc for calculate code numbers</li>
            </ul>
            <p>You can add your custom settings for webpack in <strong>config.js</strong></p>
        </div>;
    }
}