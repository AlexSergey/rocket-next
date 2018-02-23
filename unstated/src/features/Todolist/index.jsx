import React from 'react';
import { Subscribe } from 'unstated';
import Container from './container';
import List    from './components/list.jsx';
import AddTodo from './components/add.todo.jsx';
import Sort    from './components/sort.jsx';
import { getVisibleTodos } from './selector';

const Todolist = props => {
    return <Subscribe to={[Container]}>
        {todoContainer => {
            return <div className="todo">
                <h1>TODO list example:</h1>
                <AddTodo
                    addTodo={todoContainer.addTodo}
                />
                <List
                    todos={getVisibleTodos(todoContainer.state)}
                    onRemoveTodo={todoContainer.onRemoveTodo}
                    onCompletedTodo={todoContainer.onCompletedTodo}
                />
                <Sort
                    filter={todoContainer.state.filter}
                    filterApply={todoContainer.filterApply}
                />
            </div>;
        }}
    </Subscribe>
};

export default Todolist;