import { Provider } from 'react-redux';
import { store } from '../state';
import RepositoriesList from './RepositoriesList';
import './App.css'

function App() {
  return <Provider store={store}>
      <div className="App">
        <h1>Please search for a node package for e.g. react</h1>
        <RepositoriesList />
      </div>
  </Provider>
}

export default App;
