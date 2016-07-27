import React, { Component, PropTypes } from 'react';
import Select from '../../../atoms/select.jsx';

var filters = [
    {value: 'SHOW_ALL',       title: 'All'},
    {value: 'SHOW_COMPLETED', title: 'Completed'},
    {value: 'SHOW_ACTIVE',    title: 'Active'}
];

export default class Footer extends Component {
    render() {
        return (
            <ul className="todo-controls">
                <li>
                    <Select
                        currentValue={this.props.filter}
                        options={filters}
                        onChange={(filter) => this.props.filterApply(filter)}
                    />
                </li>
            </ul>
        );
    }
}
