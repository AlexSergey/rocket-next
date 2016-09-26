import React, { Component, PropTypes } from 'react';

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
