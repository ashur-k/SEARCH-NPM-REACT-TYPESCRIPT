import axios from 'axios';
import { ActionType } from '../action-types';
import { Action } from '../actions';


export const searchRepositories = (term: string) => {
  return async (dispatch: any) => {
    dispatch({ 
      type: ActionType.SEARCH_REPOSITORIES
    });

    try {
      const { data } = await axios.get('https://registry.npmjs.org/-/v1/search', {
        params: {
          text: term
        }
      });

      const names = data.objects.map((result: any) => {
        return result.package.name
      })

      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: names
      })

    }catch (err) {
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