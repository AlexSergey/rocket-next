import { createReducer } from '@reduxjs/toolkit';
import { requestPosts, requestPostsSuccess, requestPostsError } from './Posts.actions';

export default createReducer({
    posts: []
}, {
    [requestPosts.type]: state => state,
    [requestPostsSuccess.type]: (state, { payload = [] }) => {
        state.posts = payload;
    },
    [requestPostsError.type]: state => state,
});
