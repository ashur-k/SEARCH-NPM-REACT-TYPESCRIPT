import { ActionType } from '../action-types';

interface SearchRepositoriesAction {
  type: ActionType.SEARCH_REPOSITORIES;
}

interface SearchRepositoriesSuccessAction {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

interface SearchRepositoriesErrorAction {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export type Action = 
  | SearchRepositoriesAction 
  | SearchRepositoriesSuccessAction 
  | SearchRepositoriesErrorAction;

// This code is cut and pasted from repositoriesReducer.ts to import this code bacl
// to the file we are adding keyword export to it.