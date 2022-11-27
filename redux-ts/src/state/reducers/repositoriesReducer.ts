// example of how to setup a reducer and add type guards

import { ActionType } from '../action-types';
import { Action } from '../actions';

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

// This was initially in the same file, moved it to state>actions>index.ts
// // Will have an interface for each kind of action in the reducer
// // 1. All actions that are SearchRepositories will always be this kind of object
// interface SearchRepositoriesAction {
//   type: ActionType.SEARCH_REPOSITORIES;
// }

// // 2. SearchRepositoriesSuccess action will look like this object

// interface SearchRepositoriesSuccessAction {
//   type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
//   payload: string[];
// }

// // 3. SearchRepositoriesError action will look like this object

// interface SearchRepositoriesErrorAction {
//   type: ActionType.SEARCH_REPOSITORIES_ERROR;
//   payload: string;
// }

// // This makes it so we dont have to use this long union type in the reducer = ( action: ___ )
// type Action =
//   | SearchRepositoriesAction
//   | SearchRepositoriesSuccessAction
//   | SearchRepositoriesErrorAction;

// The below was cut and added to state>action-types>index.ts
// Adding this enum so we dont have to repeat the 'search_repositories_success' strings a million times
// To access something inside the enum: ActionType.SEARCH_REPOSITORIES
// enum ActionType {
//   SEARCH_REPOSITORIES = 'search_repositories',
//   SEARCH_REPOSITORIES_SUCCESS = 'search_repositories_success',
//   SEARCH_REPOSITORIES_ERROR = 'search_repositories_error',
// }

// to access the enums
// ActionType.SEARCH_REPOSITORIES

// : RepositoriesState sets RepositoriesState as the return type - everything returned must match what's in that interface
const reducer = (
  state: RepositoriesState,
  action: Action
  // We defined action by the unions below before we had type Action
  // | SearchRepositoriesAction
  // | SearchRepositoriesSuccessAction
  // | SearchRepositoriesErrorAction
): RepositoriesState => {
  // code inside a reducer is almost always a switch statement
  // our cases are the different action types
  switch (action.type) {
    // for when we're initially searching
    // Type guard: it can tell which interface we're using by the 'search_repositories' string.
    // It's similar to: if (action.type === 'search_repositories_success') ...
    // Also - switch statements function as typeguards in TS - case ... is like an if stmt
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };
    // if we get a successful response back from the API. Action.payload will have the data returned
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    // if we g et back an error. the action.payload will have the error we get from the API
    // will also need to reset the data back to an empty array
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

// Version A
// in ts/redux the action must be an object that must have a type property. It can also have a payload
// Below is the initial way to make an interface for Action, not specific to each of the actions
// interface Action {
//   type: string;
//   payload?: any;
// }

// Version A, with just the Action interface
// const reducer = (
//   state: RepositoriesState,
//   action: Action
// ): RepositoriesState => {
//   // code inside a reducer is almost always a switch statement
//   // our cases are the different action types
//   switch (action.type) {
//     // for when we're initially searching
//     case 'search_repositories':
//       return { loading: true, error: null, data: [] };
//     // if we get a successful response back from the API. Action.payload will have the data returned
//     case 'search_repositories_success':
//       return { loading: false, error: null, data: action.payload };
//     // if we g et back an error. the action.payload will have the error we get from the API
//     // will also need to reset the data back to an empty array
//     case 'search_repositories_error':
//       return { loading: false, error: action.payload, data: [] };
//     default:
//       return state;
//   }
// };
export default reducer;
