import React from 'react';
import styles from './styles.scss';

const Header = (props) => (
    <header class={styles.header} >
        <ul style={{padding: 0, float: 'right'}}>
            <li  style={{float: 'left', margin: '0 0 0 10px'}}>
            </li>
            <li  style={{float: 'left', margin: '0 0 0 10px'}}>
            </li>
        </ul>
    </header>
);

export default Header;