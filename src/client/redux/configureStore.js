import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { routerReducer, routerMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import { rootReducer } from './reducers';
import thunkMiddleware from 'redux-thunk';

// eslint-disable-next-line
const loggerMiddleware = createLogger();
const preloadedState = window.__INITIAL_STATE__;
delete window.__INITIAL_STATE__;

export const appStore = createStore(
  combineReducers({
    rootReducer
  }),
  preloadedState,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);
