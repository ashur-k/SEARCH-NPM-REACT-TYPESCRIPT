import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state';



export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actionCreators, dispatch)
}; 


// Code Notes: Ashur Kanwal
//  1.  import { actionCreators } from '../state'; is entry point to redux file from
//      here we are getting all acitons. export * as actionCreators from './action-creators';
//      this file is main index.ts inside state folder. and we are exporting all action creators
//      from this file.

//  2. bindActionCreator is a redux funciton which takes in 2 values action, which we are 
//     importing from aciton creator and dispatch which we are importing from react-redux. 