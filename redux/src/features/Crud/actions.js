import { createAction } from 'redux-actions';
import { getPosts, addPost, removePost } from './service';

export const CRUD = {
    GET    : createAction('CRUD:GET',    getPosts),
    REMOVE : createAction('CRUD:REMOVE', removePost),
    ADD    : createAction('CRUD:ADD',    addPost)
};