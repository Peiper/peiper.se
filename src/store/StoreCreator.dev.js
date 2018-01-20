import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';

import * as reducers from '../Reducers';
import initialState from '../InitialState';

const enhancers = [];
const middleware = [
  thunk,
  routerMiddleware(history),
];

const devToolsExtension = window.devToolsExtension;
if (typeof devToolsExtension === 'function') {
  enhancers.push(devToolsExtension());
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);

const store = createStore(
  combineReducers(reducers),
  initialState,
  composedEnhancers,
);

export default store;
