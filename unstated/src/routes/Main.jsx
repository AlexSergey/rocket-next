import React from 'react';
import Header from './parts/Header';
import Navigation from './parts/Navigation';
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