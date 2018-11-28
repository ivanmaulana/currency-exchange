import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import rootReducer from './rootReducer';
import initialState from './initialState';

const middlewares = [thunk, logger]

export default function configureStore() {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
  );
}