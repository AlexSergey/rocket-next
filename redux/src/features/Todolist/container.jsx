import React, {Component} from 'react';
import {connect} from 'react-redux';

import {TODOLIST as TODOLIST_ACTIONS} from './actions';
import {getVisibleTodos} from './selector';

import List    from './components/list.jsx';
import AddTodo from './components/add.todo.jsx';
import Sort    from './components/sort.jsx';

const mapStateToProps = (state) => ({
    todos: getVisibleTodos(state.todolist),
    filter: state.todolist.filter
});

const mapDispatchToProps = (dispatch) => ({
    filterApply:     (filter) => dispatch(TODOLIST_ACTIONS.FILTER(filter)),
    onCompletedTodo: (index)  => dispatch(TODOLIST_ACTIONS.COMPLETE(index)),
    onRemoveTodo:    (index)  => dispatch(TODOLIST_ACTIONS.REMOVE(index)),
    addTodo:         (text)   => dispatch(TODOLIST_ACTIONS.ADD(text))
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