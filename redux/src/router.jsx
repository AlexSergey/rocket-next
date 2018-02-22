import React from 'react';
import { Route, IndexRoute, Redirect }  from 'react-router';
import Main from './routes/Main';
import Index      from './routes/Index';
import Todolist   from './routes/Todolist';
import Crud   from './routes/Crud';

const routes = (
    <Route  path="/"  component={Main} onEnter={() => console.log('onEnter')}>
        <IndexRoute   component={Index} />
        <Route path="/todolist"   component={Todolist}  onLeave={() => console.log('onLeave')} />
        <Route path="/crud"       component={Crud}  onLeave={() => console.log('onLeave')} />
        <Redirect from="*" to="/" />
    </Route>
);

export default routes;