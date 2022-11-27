import { ActionType } from '../action-types';

// Will have an interface for each kind of action in the reducer
// 1. All actions that are SearchRepositories will always be this kind of object
interface SearchRepositoriesAction {
  type: ActionType.SEARCH_REPOSITORIES;
}

// 2. SearchRepositoriesSuccess action will look like this object

interface SearchRepositoriesSuccessAction {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

// 3. SearchRepositoriesError action will look like this object

interface SearchRepositoriesErrorAction {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

// This makes it so we dont have to use this long union type in the reducer = ( action: ___ )
export type Action =
  | SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction;
