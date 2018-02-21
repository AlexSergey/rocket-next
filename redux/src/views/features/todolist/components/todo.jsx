import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Todo extends Component {
    render() {
        var todoItem = this.props.completed ? {
            textDecoration: 'line-through'
        } : {};

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