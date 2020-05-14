/* eslint-disable no-underscore-dangle */
const redux = require('redux');
const reducer = require('./reducer');

/* istanbul ignore next */
const webTools = (typeof window !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : null;

module.exports = redux.createStore(reducer, webTools);
