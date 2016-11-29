import React, {Component} from 'react';
import Todolist from '../features/todolist/container';

export default class TodolistPage extends Component {
    render() {
        return <div className="main">
            <Todolist />
        </div>;
    }
}