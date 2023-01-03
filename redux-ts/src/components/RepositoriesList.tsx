import { useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

// we use local state to track what the user enters into the input

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  // Version 1
  // const dispatch = useDispatch();
  const { searchRepositories } = useActions();
  // ^ line is the same as dispatch(actionCreators.searchRepositories(term) as any)

  // we only want some parts of the state - state.repositories
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );

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
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {/* If no error, no loading, print out data. We dont have to map, but it makes it prettier */}
      {!error && !loading && data.map((name) => <div key={name}>{name}</div>)}
    </div>
  );
};

export default RepositoriesList;
