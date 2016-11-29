import React from 'react';
import InlineSVG from 'svg-inline-react';

const Logo = (props) => (
    <div class="svg-container logo" style={{height: '200px', margin: '-30px 0'}}>
        <InlineSVG src={require('svg-inline!./logo.inline.svg')} />
    </div>
);

export default Logo;