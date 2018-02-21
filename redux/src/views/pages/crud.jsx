import React, {Component} from 'react';
import Crud from '../features/crud/container';

export default class CrudPage extends Component {
    render() {
        return <div className="main">
            <Crud />
        </div>;
    }
}