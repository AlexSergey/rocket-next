import React, { Component, PropTypes } from 'react';
import Todo from './todo.jsx';

export default class List extends Component {
    render() {
        return (
            <ul className="todo-list">
                {this.props.todos.map((todo, index) =>
                    <Todo {...todo}
                        key={index}
                        onClick={() => this.props.onCompletedTodo(index)}
                        onRemove={() => this.props.onRemoveTodo(index)}
                        />
                )}
            </ul>
        );
    }
}