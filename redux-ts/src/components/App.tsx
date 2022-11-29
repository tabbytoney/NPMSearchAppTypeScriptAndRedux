// Provider is a React property that gives us access to the redux store throughout the app
import { Provider } from 'react-redux';
import { store } from '../state';
import RepositoriesList from './RepositoriesList'

const App = () => {
  return <Provider store={store}>
    <div>
      <h1>Search For A Package</h1>
      <RepositoriesList />
    </div>


  </Provider>;
};

export default App;
