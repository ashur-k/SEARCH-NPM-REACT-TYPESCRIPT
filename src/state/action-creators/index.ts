import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';


export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ 
      type: ActionType.SEARCH_REPOSITORIES
    });

    // getting data from API URL
    try {
      const { data } = await axios.get('https://registry.npmjs.org/-/v1/search', {
        params: {
          text: term // giving term value to url so user input term npm can be searched
        }
      });

      const names = data.objects.map((result: any) => {
        return result.package.name // mapping over package values to get string array called names
      });

      // dispatching success payload to reducer
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: names
      })

    }catch (err) {
      // dispatching error payload to reducer
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_ERROR,
        payload: err.message
      })
    }
  }
}


// Code Notes: Ashur Kanwal
// 1. We are making use of redux-thunk in order to create 
//    asynchronous action-creator. For We need to make an network request.

// 2. Term is whateven library we are searching for.

// 3. Dispatch to manually dispatch aciton, directly into the redux store.
//    and get all processed by a reducer. Process means reducer have all differnt 
//    kind of seitch statements in it.

// 4. 'Dispatch<Action>' After this code to dispatch in return, Dispatch is  
//     imported form Redux and Action is imported ./actions which earlier 
//     was cut pasted from repositories.reducers. After adding this if we 
//     mouse hover on top payloads we can see that TS knows its correct data type
//     and wrong information cannot be added there.
