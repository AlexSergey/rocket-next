import React, { Component, PropTypes } from 'react';
import Link from '../../../atoms/link';
import Logo from '../logo';
import styles from './styles.scss';
import CustomScroll from 'react-customscroll';

const Navigation = (props) => (
    <nav id="nav" class={styles.navigation}>
        <CustomScroll>
            <Logo />
            <ul>
                <li><Link to="/"><span>Index page</span></Link></li>
                <li><Link to="/todolist"><span>Todo List</span></Link></li>
                <li><Link to="/crud"><span>CRUD</span></Link></li>
                {/*<li><Link href="#"><span>Components</span></Link></li>
                <li><Link href="#"><span>Co</span></Link></li>*/}
            </ul>
        </CustomScroll>
    </nav>
);

export default Navigation;