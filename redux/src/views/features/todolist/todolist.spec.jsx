import React from 'react';
import {renderComponent} from '../../../utils/test.helper';
import Todolist from './container';
import store from '../../../store';
import {TODOLIST as TODOLIST_ACTIONS} from '../../../actions';

describe('Todolist tests', function() {
    let component;

    beforeEach(() => {
        component = renderComponent(Todolist, {}, store);
    });

    it('Todo add', () => {
        store.dispatch(TODOLIST_ACTIONS.ADD('test todo item 1'));
        let html = component.find('.todolist-zone').html();

        expect(store.getState().todolist.todos.size).toEqual(1);
        expect(html).toEqual('<ul class="todolist-zone"><li class="list-item"><button>remove</button><span><span style="text-decoration: none; cursor: pointer;">test todo item 1</span></span></li></ul>');
    });
});
