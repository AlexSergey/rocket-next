import React from 'react';
import { Provider } from 'react-redux';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
chai.use(chaiEnzyme());
enzyme.configure({ adapter: new Adapter() });

function renderComponent(ComponentClass, props = {}, store) {
    const componentInstance =  <Provider store={store} key="provider">
        <ComponentClass {...props} />
    </Provider>;

    return enzyme.mount(componentInstance);
}

export {renderComponent};