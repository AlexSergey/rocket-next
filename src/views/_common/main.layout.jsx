import React, {Component} from 'react';
import Header from './header.jsx';

export default class Base extends Component {
    render() {
        return <div id="wrapper">
            <Header />
            <div className="main-block">
                <div className="main-block-holder">
                    {this.props.children}
                </div>
            </div>
        </div>;
    }
}