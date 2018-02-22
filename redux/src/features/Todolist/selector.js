import { createSelector } from 'reselect';

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