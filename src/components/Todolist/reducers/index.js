import { handleActions } from 'redux-actions';

/**
 * Todolist reducer
 * @module reducers/TODOLIST
 * @default {Object} todo list and filter
 */
export default handleActions({
    /**
     * Add todo to the list
     * @method
     * @param {object} state state of store
     * @param {object} action action object of store
     * @returns {object} state of store
     * @listens actions:ADD_TODO
     */
    ADD_TODO: (state, action) => {
        return {
            todos: [
                ...state.todos, {
                    text: action.payload,
                    completed: false
                }
            ],
            filter: state.filter
        };
    },

    /**
     * Remove todo to the list by index
     * @method
     * @param {object} state state of store
     * @param {object} action action object of store
     * @returns {object} state of store
     * @listens actions:REMOVE_TODO
     */
    REMOVE_TODO: (state, action) => {
        state.todos.splice(action.payload, 1);
        return {
            todos: [...state.todos],
            filter: state.filter
        };
    },

    /**
     * Filter todo list
     * @method
     * @param {object} state state of store
     * @param {object} action action object of store
     * @returns {object} state of store
     * @listens actions:TODO_FILTER
     */
    TODO_FILTER: (state, action) => {
        return {
            todos: [...state.todos],
            filter: action.payload
        };
    },

    /**
     * Set todo state to completed
     * @method
     * @param {object} state state of store
     * @param {object} action action object of store
     * @returns {object} state of store
     * @listens actions:COMPLETE_TODO
     */
    COMPLETE_TODO: (state, action) => {
        return {
            todos: [
                ...state.todos.slice(0, action.payload),
                Object.assign({}, state.todos[action.payload], {
                    completed: !state.todos[action.payload].completed
                }),
                ...state.todos.slice(action.payload + 1)
            ],
            filter: state.filter
        };
    }
}, {
    todos: [],
    filter: 'SHOW_ALL'
});