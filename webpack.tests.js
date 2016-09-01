import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';

chai.use(chaiEnzyme());

var context = require.context('./src', true, /\.spec\.(js|jsx)$/);
context.keys().forEach(context);