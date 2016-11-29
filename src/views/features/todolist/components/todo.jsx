import React, { Component, PropTypes } from 'react';

export default class Todo extends Component {
    render() {
        var todoItem = {
            display: 'block',
            margin: '-27px 0px 0px 50px'
        };
        if (this.props.completed) {
            todoItem = Object.assign({}, {
                textDecoration: 'line-through'
            });
        }
        return (
            <li className="list-item">
                <button
                    onClick={e => {
                        e.preventDefault();
                        this.props.onRemove();
                    }}>
                    remove
                </button>
                <span
                    style={todoItem}
                    onClick={this.props.onClick}
                    >
                    <span
                        style={{
                            textDecoration: this.props.completed ? 'line-through' : 'none',
                            cursor: this.props.completed ? 'default' : 'pointer'
                        }}
                    >{this.props.text}</span>
                </span>
            </li>
        );
    }
}