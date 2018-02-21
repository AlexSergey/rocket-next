import { handleActions } from 'redux-actions';
import { List } from 'immutable';

export default handleActions({
    'TODOLIST:ADD': (state, action) => {
        return {
            todos: state.todos.push({ text: action.payload, completed: false }),
            filter: state.filter
        };
    },

    'TODOLIST:REMOVE': (state, action) => {
        return {
            todos: state.todos.remove(action.payload),
            filter: state.filter
        };
    },

    'TODOLIST:FILTER': (state, action) => {
        return {
            todos: state.todos,
            filter: action.payload
        };
    },

    'TODOLIST:COMPLETE': (state, action) => {
        return {
            todos: state.todos.set(action.payload, {
                text: state.todos.get(action.payload).text,
                completed: !state.todos.get(action.payload).completed
            }),
            filter: state.filter
        };
    }
}, {
    todos: List.of(),
    filter: 'SHOW_ALL'
});