import React, { Component, PropTypes } from 'react';
import Link from '../../atoms/link';


export default class Header extends Component {
    render() {
        return (
            <div id="header-frame">
                <header id="header" className="header-bg">
                    <div className="header-holder">
                        <h1 className="logo logo-bg"><Link to="/">Index</Link></h1>
                        <div className="btn-wrapper">
                            <Link className="btn btn-primary" to="/todolist">Todolist</Link>
                            <Link className="btn btn-primary" to="/crud">CRUD</Link>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}
