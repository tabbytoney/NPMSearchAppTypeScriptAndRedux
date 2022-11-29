import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

export const useActions = () => {
  const dispatch = useDispatch();

  // actionCreators is an object that has the actions inside of it. SearchRepositories, ex
  return bindActionCreators(actionCreators, dispatch);
  // ^ returns an object like {searchRepositories: dispatch(searchRepositories)}
};
