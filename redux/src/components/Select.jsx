import React, { Component } from 'react';

export default class Select extends Component {
    render() {
        var options = this.props.options || [];

        var optionsEl = options.length > 0 ?
            options.map((item, index) => <option key={index} value={item.value}>{item.title}</option>) :
            '';

        return (
            <label className="select">
                <select name="options" defaultValue={this.props.currentValue} onChange={(e) => this.props.onChange(e.target.value)}>
                    {optionsEl}
                </select>
            </label>
        );
    }
}