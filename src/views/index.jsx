import React, {Component} from 'react';

export default class Index extends Component {
    render() {
        return <div className="main">
            <h1>Rocket-next</h1>
            <h2>(Redux, React-Router latest, webpack, babel, npm, Karma, Mocha, enzyme)</h2>
            <p>This is test boilerplate of <strong>React + Redux</strong></p>
            <p>This is little single page application include routing, todolist example and CRUD by json.server</p>
            <hr />
            <h3>Install:</h3>
            <ul className="list-num">
                <li> - <span className="code">npm install</span> in main directory</li>
            </ul>
            <h3>Usage:</h3>
            <ul className="list-num">
                <li> - <code>npm start</code> run webpack dev server with watcher in <strong>http://localhost:8000</strong></li>
                <li> - <code>npm run development</code> build minification version for production</li>
                <li> - <code>npm run production</code> build minification version for production</li>
                <li> - <code>npm run documenation</code> build minification version for production</li>
            </ul>
            <p>You can add your custom settings for webpack in <strong>config.js</strong></p>
        </div>;
    }
}