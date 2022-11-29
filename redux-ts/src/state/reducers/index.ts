import { combineReducers } from 'redux';
import repositoriesReducer from './repositoriesReducer';

// reducers is the result of calling combineReducers
// repositories is a piece of state, comes from repositoriesReducer
const reducers = combineReducers({
  repositories: repositoriesReducer,
});

export default reducers;
