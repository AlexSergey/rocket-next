import React from 'react';
import Link from '../../components/Link';
import Logo from './Logo';
import CustomScroll from 'react-customscroll';

const Navigation = (props) => (
    <nav id="nav" className="navigation">
        <CustomScroll>
            <Logo />
            <ul>
                <li><Link to="/"><span>Index page</span></Link></li>
                <li><Link to="/todolist"><span>Todo List</span></Link></li>
                <li><Link to="/crud"><span>CRUD</span></Link></li>
            </ul>
        </CustomScroll>
    </nav>
);

export default Navigation;