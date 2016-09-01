import React from 'react';
import { Route, IndexRoute, Redirect }  from 'react-router';
import MainLayout from './views/_common/main.layout';
import Index      from './views/index';
import Todolist   from './views/todolist';
import Crud       from './views/crud';


const routes = (
    <Route  path="/"  component={MainLayout} onEnter={() => console.log('onEnter')}>
        <IndexRoute   component={Index} />
        <Route path="/todolist"   component={Todolist}  onLeave={() => console.log('onLeave')} />
        <Route path="/crud"       component={Crud}  onLeave={() => console.log('onLeave')} />
        <Redirect from="*" to="/" />
    </Route>
);

export default routes;