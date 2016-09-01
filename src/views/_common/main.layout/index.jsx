import React, {Component} from 'react';
import Header from '../header';
import 'reset-css/reset.css';
import Navigation from '../navigation';
import styles from './styles.scss';
import CustomScroll from 'react-customscroll';

const Base = (props) => (
    <div class={styles['main-wrapper']}>
        <Navigation />
        <div className={styles.main}>
            <CustomScroll>
                <Header />
                <div className={styles.content}>
                    {props.children}
                </div>
            </CustomScroll>
        </div>
    </div>
);

export default Base;