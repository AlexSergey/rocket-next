import React, { Component, PropTypes } from 'react';

export default class Todo extends Component {
    render() {
        return (
            <li className="list-item-frame">
                <button
                   className="remove-item btn--warning btn"
                   onClick={e => {
                       e.preventDefault();
                       this.props.onRemove();
                   }}>
                    X
                </button>
                <span
                    className={this.props.completed ? 'done-true list-item' : 'list-item'}
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