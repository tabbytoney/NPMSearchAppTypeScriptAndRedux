import { useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

// we use local state to track what the user enters into the input

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');

  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );

  // to get the type for event, hover over onSubmit in the return statement
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // to stop browser from refreshing
    event.preventDefault();
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
