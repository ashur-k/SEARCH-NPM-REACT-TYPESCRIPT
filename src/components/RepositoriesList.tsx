import { useState } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions';

const RepositoriesList: React.FC = () => {
  
  // useState to save search value inisde term
  const [term, setTerm] = useState('');
  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
    );

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchRepositories(term);
  };

  return (
  <div>
    <form onSubmit={onSubmit}>
      <input value={term} onChange={e => setTerm(e.target.value)} />
      <button>Search</button>
    </form>
    {error && <h3>{error}</h3>}
    {loading && <h3>Loading...</h3>}
    {!error && !loading && 
      data.map((name) => <div key={name}><li>{name}</li></div>) }
  </div>)
};

export default RepositoriesList;


// Code Notes: Ashur Kanwal
// 1. to get property of event we can mouse hover on top of onSubmit and then take
//    type of onSubmit form action, from that pop up that come after mouse over.

// 2. searchRepositories is the main action funciton inside index.ts, in 
//    action-creators folder. It takes value of term, then will hit npm api
//    and then values get process in reducers, load, success and error.

// 3. const { searchRepositories } = useActions(); Becasue useActions is going
//    to have all acitons and we are destructring here to get the action that 
//    we required here, in this file. I can read useActions details inside file
//    '../hooks/useActions';

// 4. useSelector : ITs similar nature to map state to props in class based 
//    components. for e.g. const state = useSelector((state) => state); if we run
//    this line and then console.log it console.log(state). we can see repositories 
//    data = [], errot=null, loading=false, if we add search input value into we can
//    see loading flase, error none , and data all arrays coming back from api

// 5. So from explnation in point 4 we don't need all info we may need
//    only repositories info so we can do state.repositories. and then that
//    value is going to get save inisde state variable. But as soon this done
//    code is going to start showing error under repositories, to temproraily 
//    remove this error we can add 'any' to state and we will get only 
//    repositories data, just loading, error and data.

// 6. we can completely destructure const { state } to const { data, error, loading }

// 7. Once we did this we can understand why we were seeing error on repositories 
//    before doing any. If any is remove and mouse hover on top of repositories
//    it tells property repositories does not exist default root state. 

//    If we mouse hover on useSelector we can see DefaultRootState and that
//    can be interpreted as maening React redux has no idea what the type 
//    of data is iniside of our redux store. Solution for this issues is 
//    given in documentaiton at https://react-redux.js.org/

