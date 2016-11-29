import { handleActions } from 'redux-actions';
import { List, fromJS } from 'immutable';

export default handleActions({
    'CRUD:GET': (state, action) => ({ data: fromJS(action.payload) }),
    'CRUD:ADD': (state, action) => ({ data: state.data.push(fromJS(action.payload)) }),
    'CRUD:REMOVE': (state, action) => ({ data: state.data.remove(state.data.findIndex((obj) => obj.get('id') === action.payload.id)) })
}, {
    data: List.of()
});