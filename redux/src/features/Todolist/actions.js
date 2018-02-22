import { createAction } from 'redux-actions';

export const TODOLIST = {
    ADD      : createAction('TODOLIST:ADD'),
    COMPLETE : createAction('TODOLIST:COMPLETE'),
    REMOVE   : createAction('TODOLIST:REMOVE'),
    FILTER   : createAction('TODOLIST:FILTER')
};