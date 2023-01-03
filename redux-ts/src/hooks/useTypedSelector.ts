import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../state';

// Have to add this to use useSelector in RepositoriesList.tsx.
// Will now use TypedUseSelector instead of useSelector
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
