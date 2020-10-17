import React, { cloneElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import onLoad from '../../isomorphic/onLoad';
import { fetchPosts } from './Posts.actions';

function PostsContainer({ children }) {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.postsReducer.posts);

    onLoad(() => {
        dispatch(fetchPosts());
    });

    return cloneElement(children, { posts });
}

export default PostsContainer;
