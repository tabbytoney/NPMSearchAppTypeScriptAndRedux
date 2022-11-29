import { useState } from 'react';
import { useActions } from '../hooks/useActions';

// we use local state to track what the user enters into the input

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  // Version 1
  // const dispatch = useDispatch();
  const { searchRepositories } = useActions()
  // ^ line is the same as dispatch(actionCreators.searchRepositories(term) as any)

  // to get the type for event, hover over onSubmit in the return statement
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // to stop browser from refreshing
    event.preventDefault();

    // Version 1, the long version to dispatch a single action
    // Instead we created useActions hook to dispatch actions
   //  dispatch(actionCreators.searchRepositories(term) as any)
   searchRepositories(term);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
    </div>
  );
};

export default RepositoriesList;
