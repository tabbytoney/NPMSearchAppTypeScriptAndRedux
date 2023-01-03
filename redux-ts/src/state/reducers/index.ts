import { combineReducers } from 'redux';
import repositoriesReducer from './repositoriesReducer';

// reducers is the result of calling combineReducers
// repositories is a piece of state, comes from repositoriesReducer
const reducers = combineReducers({
  repositories: repositoriesReducer,
});

export default reducers;

// need to create a type that shows what type of data is inside our redux store, assign that type to RootState
// <ReturnType> part = take the function reducers and give us whatever the return type of that function is
export type RootState = ReturnType<typeof reducers>;
