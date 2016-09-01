import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createSelector} from 'reselect';

import {TODO_FILTER, COMPLETE_TODO, REMOVE_TODO, ADD_TODO} from './actions/todolist.js';

import List    from './parts/list.jsx';
import AddTodo from './parts/add.todo.jsx';
import Sort    from './parts/sort.jsx';

const mapStateToProps = (state) => ({
    todos: getVisibleTodos(state.todolist),
    filter: state.todolist.filter
});

const mapDispatchToProps = (dispatch) => ({
    filterApply:     (filter) => dispatch(TODO_FILTER(filter)),
    onCompletedTodo: (index)  => dispatch(COMPLETE_TODO(index)),
    onRemoveTodo:    (index)  => dispatch(REMOVE_TODO(index)),
    addTodo:         (text)   => dispatch(ADD_TODO(text))
});

@connect(mapStateToProps, mapDispatchToProps)
export default class Todolist extends Component {
    render() {
        return <div className="todo">
            <h1>TODO list example:</h1>
            <AddTodo
                addTodo={this.props.addTodo}
            />
            <List
                todos={this.props.todos}
                onRemoveTodo={this.props.onRemoveTodo}
                onCompletedTodo={this.props.onCompletedTodo}
            />
            <Sort
                filter={this.props.filter}
                filterApply={this.props.filterApply}
            />
        </div>;
    }
}

const getVisibilityFilter = (state) => state.filter;
const getTodos = (state) => state.todos;

export const getVisibleTodos = createSelector(
    [ getVisibilityFilter, getTodos ],
    (filters, todos) => {
        switch (filters) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed);
        }
    }
);