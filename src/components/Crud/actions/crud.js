import { createAction } from 'redux-actions';
import {getPosts, addPost, removePost} from '../services/posts';

/**
 * @event actions/CRUD/GET_POSTS
 * @type {object}
 * */
export const GET_POSTS      = createAction('GET_POSTS', getPosts);
/**
 * @event actions/CRUD/COMPLETE_TODO
 * @type {object}
 * */
export const REMOVE_POST = createAction('REMOVE_POST', removePost);

/**
 * @event actions/CRUD/ADD_POST
 * @type {object}
 * */
export const ADD_POST   = createAction('ADD_POST', addPost);