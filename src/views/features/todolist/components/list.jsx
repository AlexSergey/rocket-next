import React, { Component, PropTypes } from 'react';
import Todo from './todo.jsx';

const TodoList = (props) => (
    <ul>
        {props.todos.map((todo, index) =>
            <Todo {...todo}
                key={index}
                onClick={() => props.onCompletedTodo(index)}
                onRemove={() => props.onRemoveTodo(index)}
            />
        )}
    </ul>
);

export default TodoList;