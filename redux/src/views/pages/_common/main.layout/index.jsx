import React from 'react';
import Header from '../header';
import 'reset-css/reset.css';
import Navigation from '../navigation';
import CustomScroll from 'react-customscroll';

const Base = (props) => (
    <div className="main-wrapper">
        <Navigation />
        <div className="main">
            <CustomScroll>
                <Header />
                <div className="content">
                    {props.children}
                </div>
            </CustomScroll>
        </div>
    </div>
);

export default Base;