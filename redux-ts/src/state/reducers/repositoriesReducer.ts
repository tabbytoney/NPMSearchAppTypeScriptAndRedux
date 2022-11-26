interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const reducer = (state: RepositoriesState, action: any) => {
  // code inside a reducer is almost always a switch statement
  // our cases are the different action types
  switch (action.type) {
    // for when we're initially searching
    case 'search_repositories':
      return { loading: true, error: null, data: [] };
    // if we get a successful response back from the API. Action.payload will have the data returned
    case 'search_repositories_success':
      return { loading: false, error: null, data: action.payload };
    // if we g et back an error. the action.payload will have the error we get from the API
    // will also need to reset the data back to an empty array
    case 'search_repositories_error':
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
