// Reducer is going to receive arguments of state and action 
// that we need to process. And then we need to return some 
// sort of state that has these 3 properties data, loading, error

import { ActionType } from '../action-types';
import { Action } from '../actions';

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}


const reducer = (
  state: RepositoriesState, 
  action: Action
  ):RepositoriesState => {
  
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data:[] };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data:[] };
    default:
      return state;
  }

};

export default reducer;

// Code Notes: Ashur Kanwal
  // 1. (state: RepositoriesState, action: any):RepositoriesState 
  //      '':RepositoriesState'' by doing this we are telling TS that there 
  //       always will be return value of type RepositoriesState, which we is
  //       described at top of the code. After adding this type for e.g. if 
  //       we try to change data type for data in return TS will give us an error.

  // 2. Describing type of payload in interface Action is different. There are 3
  //    types of action that can be received 1. search_repositories, 
  //    2. search_repositories_success 3. search_repositories_error. To better 
  //    describe these different kind of actions flowing into reducer, a seprate 
  //    interface, can be created to describe each kind of aciton.

  // 3. Action Interface SearchRepositoriesAction, "type: 'search_repositories';"
  //    is exactly equal to the string search_repositories and same for the other two.

  // 4. By using pipe ''|'' in action type we are saying that is goign to be one of
  // these three different interfaces. So after doing this if we mouse hover on top 
  // of payload its going to be exact type that belongs to that payload in taht
  // case.  

  // 5. Creating better folder structure so code that was written until now is going
  //    to be divided into different files for better structuring. Code from here is 
  //    cut and pasted into actions/index.ts file and action-types/index.ts file.

  // 6. enum type: enum is kind of an object, it sets up variety of different properties
  //    that all have closely related definition in a very closely rlelated meaning. Inside
  //    of enum listed are all the different possible Action types that are across the
  //    all different actions or different action creators and all different reducers

  