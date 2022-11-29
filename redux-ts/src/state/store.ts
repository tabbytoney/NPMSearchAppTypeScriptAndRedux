import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

// {} is the initial state objext
export const store = createStore(reducers, {});
