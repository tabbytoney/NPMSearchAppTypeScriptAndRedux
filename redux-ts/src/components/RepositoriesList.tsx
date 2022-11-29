import { useState } from "react";

// we use local state to track what the user enters into the input

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('')

  // to get the type for event, hover over onSubmit in the return statement
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // to stop browser from refreshing
    event.preventDefault()
  }

  return <div>
    <form onSubmit={onSubmit}>
      <input value={term} onChange={e => setTerm(e.target.value)} />
      <button>Search</button>
    </form>
  </div>
};

export default RepositoriesList;