import React, { Component } from 'react';
import Todo from './todo.jsx';

const TodoList = (props) => (
    <ul className="todolist-zone">
        {props.todos.map((todo, index) => {
            return <Todo {...todo}
                 key={index}
                 onClick={() => props.onCompletedTodo(index)}
                 onRemove={() => props.onRemoveTodo(index)}
            />
        })}
    </ul>
);

export default TodoList;