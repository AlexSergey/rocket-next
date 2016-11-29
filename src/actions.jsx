import { createAction } from 'redux-actions';
import { getPosts, addPost, removePost } from './views/features/crud/services';

export const TODOLIST = {
    ADD      : createAction('TODOLIST:ADD'),
    COMPLETE : createAction('TODOLIST:COMPLETE'),
    REMOVE   : createAction('TODOLIST:REMOVE'),
    FILTER   : createAction('TODOLIST:FILTER')
};
export const CRUD = {
    GET    : createAction('CRUD:GET',    getPosts),
    REMOVE : createAction('CRUD:REMOVE', removePost),
    ADD    : createAction('CRUD:ADD',    addPost)
};
