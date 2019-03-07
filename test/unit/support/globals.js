require('phantom-ownpropertynames/implement'); // required to allow proxyquire deps to work with phantom :(
const data = require('./data');
const React = require('react/addons');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const chai = require('chai');
const TestUtils = React.addons.TestUtils;

chai.use(sinonChai);

const fixtures = {};

// mix data into fixtures
for (const prop in data) {
  fixtures[prop] = data[prop];
}

global.React = React;
global.TestUtils = TestUtils;
global.render = TestUtils.renderIntoDocument;

global.sinon = sinon;
global.sandbox = sinon.sandbox.create();
global.fixtures = fixtures;
global.expect = chai.expect;
