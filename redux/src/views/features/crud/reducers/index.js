import { handleActions } from 'redux-actions';

/**
 * Todolist reducer
 * @module reducers/CRUD
 * @default {Object} todo list and filter
 */
export default handleActions({
    /**
     * Get posts
     * @method
     * @param {object} state state of store
     * @param {object} action action object of store
     * @returns {object} state of store
     * @listens actions:GET_POSTS
     */
    GET_POSTS: (state, action) => ({
        data: action.payload.length > 0 ? action.payload.map((item) => item) : []
    }),

    /**
     * Add post
     * @method
     * @param {object} state state of store
     * @param {object} action action object of store
     * @returns {object} state of store
     * @listens actions:ADD_POST
     */
    ADD_POST: (state, action) => {
        var newData = state.data.slice();
        newData.push(action.payload);

        return {
            data: newData
        };
    },

    /**
     * Remove post
     * @method
     * @param {object} state state of store
     * @param {object} action action object of store
     * @returns {object} state of store
     * @listens actions:REMOVE_POST
     */
    REMOVE_POST: (state, action) => {
        var newData = state.data.filter((item) => item.id !== action.payload.id);

        return {
            data: newData
        };
    }
}, {
    data: []
});