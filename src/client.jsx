import {render} from 'react-dom';
import React, {Component} from 'react';
import App from './routes';

require('./styles/stylesheets/_include.less');

/*class MyComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            posts: [],
            description: ''
        };

        fetch('http://localhost:7878/posts').then((d) => d.json()).then((posts) => {
            this.setState({posts: posts});
        });
    }

    addNew() {
        var title = this.refs.name.value;
        var description = this.refs.description.value;

        fetch('http://localhost:7878/posts', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                description
            })
        })
        .then((d) => d.json())
        .then((data) => {
            var d = this.state.posts.slice();
            d.push({id: data.id, title: title});
            console.log(d);
            this.setState({posts: d});
        });
    }

    nameChange(e) {
        this.setState({name: e.target.value});
    }

    changeDescription(e) {
        this.setState({description: e.target.value});
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.posts.length === 0 ? 'loading...' : this.state.posts.map((item, index) => <li key={index}>{item.title}</li>)}
                </ul>
                <div>
                    <input type="text" ref="name" value={this.state.name} onChange={this.nameChange.bind(this)} />
                    <textarea ref="description" onChange={this.changeDescription.bind(this)} value={this.state.description}></textarea>
                    <button onClick={this.addNew.bind(this)}>add new posts</button>
                </div>
            </div>
        );
    }
}*/

render(App(), document.getElementById('root'));