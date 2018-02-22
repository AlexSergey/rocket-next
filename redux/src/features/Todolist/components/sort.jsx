import React, { Component } from 'react';
import Select from '../../../components/Select.jsx';

var filters = [
    {value: 'SHOW_ALL',       title: 'All'},
    {value: 'SHOW_COMPLETED', title: 'Completed'},
    {value: 'SHOW_ACTIVE',    title: 'Active'}
];

const Sorter = (props) => (
    <Select
        currentValue={props.filter}
        options={filters}
        onChange={(filter) => props.filterApply(filter)}
    />
);

export default Sorter;