import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

// {} is the initial state object
export const store = createStore(reducers, {}, applyMiddleware(thunk));
