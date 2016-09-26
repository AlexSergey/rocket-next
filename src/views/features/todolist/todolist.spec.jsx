import React from 'react';
import {expect, renderComponent} from '../../utils/test.helper';
import Todolist from './container';
import store from '../../store';

describe('Todolist tests', function() {
    let component;

    beforeEach(() => {
        component = renderComponent(Todolist);
    });

    it('Todo add', () => {
        const action = {
            type: 'ADD_TODO',
            payload: 'test todo item 1'
        };
        store.dispatch(action);

        var text = component.find('.list-item > span').text();

        expect(store.getState().todolist.todos.length).toEqual(1);
        expect(text).toEqual('test todo item 1');
    });
});

