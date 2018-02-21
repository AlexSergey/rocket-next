import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Select extends Component {
    render() {
        return <input
            className="todoText"
            id={this.props.field}
            type="text"
            ref="input"
        />;
    }
}
