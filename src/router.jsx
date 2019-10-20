import React from 'react';
import Home from './routes/Home';
import Posts from './routes/Posts';
import { Switch, Route } from 'react-router-dom';

export default function() {
    return <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/posts" component={Posts} exact />
    </Switch>;
}
