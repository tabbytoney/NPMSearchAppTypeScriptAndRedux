import axios from 'axios';
import { ActionType } from '../action-types';
import { Action } from '../actions';
import { Dispatch } from 'redux';

// using thunk to create an asynchronous action creator
// dispatch = how we manually dispatch actions directly into the redux store and get it processed by a reducer
export const searchRepositories = (term: string) => {
  // dispatch must return from the Action type we've defined (hover over Action to sees)
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES,
    });

    try {
      const { data } = await axios.get(
        'https://registry.npmjs.org/-/v1/search',
        {
          // params is what's going to add our query term to the above url
          params: {
            text: term,
          },
        }
      );
      // objects comes from the api, it's what contains all the data
      // package.name are inside the objects objects, that's the info we want to display
      const names = data.objects.map((result: any) => {
        return result.package.name;
      });

      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: names,
      });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: ActionType.SEARCH_REPOSITORIES_ERROR,
          payload: err.message,
        });
      }
    }
  };
};
