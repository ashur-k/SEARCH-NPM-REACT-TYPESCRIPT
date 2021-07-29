export enum ActionType {
  SEARCH_REPOSITORIES = 'search_repositories',
  SEARCH_REPOSITORIES_SUCCESS = 'search_repositories_success',
  SEARCH_REPOSITORIES_ERROR='search_repositories_error'
}



// Code Notes: Ashur Kanwal
// 1. enum type: enum is kind of an object, it sets up variety of different properties
//    that all have closely related definition in a very closely rlelated meaning. Inside
//    of enum listed are all the different possible Action types that are across the
//    all different actions or different action creators and all different reducers