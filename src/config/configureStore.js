import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
import allReducers from '../reducers';

const env = process.env.REACT || 'dev';

const configureStore = (preloadedState) => {
  const store = env === 'dev'
    ? createStore(allReducers, preloadedState, applyMiddleware(thunk, apiMiddleware, logger))
    : createStore(allReducers, preloadedState, applyMiddleware(thunk, apiMiddleware));
  return store;
};

export default configureStore;
