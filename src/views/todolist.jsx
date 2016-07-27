import React, {Component} from 'react';
import Todolist from '../components/Todolist/container';

export default class TodolistPage extends Component {
    render() {
        return <div className="main">
            <Todolist />
        </div>;
    }
}