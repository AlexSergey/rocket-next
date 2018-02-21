import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Link extends Component {
    render() {
        let _className = this.props.className || '',
            router = this.context.router,
            isActive  = router.isActive(this.props.to, true),
            className = isActive ? _className + ' active' : _className;

        return (
            <a href="#" onClick={(e) => {
                e.preventDefault();
                router.push(this.props.to);
            }} className={className}>
                {this.props.children}
            </a>
        );
    }
}
Link.contextTypes = {
    router: PropTypes.object
};