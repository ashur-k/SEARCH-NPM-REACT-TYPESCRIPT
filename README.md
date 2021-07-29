### Important Note:
  This readme.md files are my notes that I am (Ashur Kanwal) taking, so I am sure I am not missing important information and that in future if I look at this I can see my notes.  
### Creating Application With Command: 
  npx create-react-app redux-ts --template typescript
  cd redux-ts
  yarn start

### Installing following packages with exact command to install same features as tutorial.
1. yarn add @types/react-redux@7.1.15 --exact
2. yarn add axios@0.21.1 --exact
3. yarn add react-redux@7.2.2 --exact
4. yarn add redux@4.0.5 --exact   
5. yarn add redux-thunk@2.3.0 --exact   

### Instructions For Before Starting The Project
- In a normal Redux project, it is worth the time to think about the design of your store before writing code.
- In TS project, it strongly recommend to think about design first.

### About Project:
Searching NPM data from API {====> registry.npmjs.org/-/v1/search?text=react <====}
We can change the text in URL to search different packages. for e.g. in above statement we can change react "text=react" to "text=redux" and out app will come back with search results.

### Browser Package called JSON formatter is installed from the URL  https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa/related?hl=en
- This was essential to see data well formatted when hitting the URL from About project heading.

### Important Notes:
- When we are making contact to URL we are getting something called package. There is a catch, the word package is reserved keyword in TS, if package is written in TS file, so it is required to keep this in mind. Otherwise we will run into problems.
- To overcome catch we will call packages, repositories.

### Redux Store:
  repositories =====> data(List of repositories from NPM)
  repositories =====> loading(T/F whether we are fetching data)
  repositories =====> error(String error message if one occurred during fetch)

### Actions we are going to send in redux Store:
  Action Creators searchRepositories(term)
    :Actions: SearchRepositories                
    :Actions: SearchRepositoriesSuccess =========> Redux Store repositories
    :Actions: SearchRepositoriesError 
        :Action Types: search_repositories  
        :Action Types: search_repositories_success
        :Action Types: search_repositories_error

### 'src' Folder
===Components===
App.tsx | RepositoriesList.tsx

reducers | action-creators | middleware's
==============redux-stuff=============== 

#### Important Note:
  In React redux we commonly end up having many import statements but it is strongly recommended in TS project create single entry point to communicate between app and redux.
  In this project there will be file called index.ts, the all of reducers, action-creator and middle-wares are going to import to index.ts and then re-export from that file. In simplicity any of component ever need anything from redux side of things, they are not going to reach into redux folder to get different files instead everything is going to taken from index.ts file. This will dramatically simplify a lot of code.


### Creating folder inisde src:
1. Created components folder
2. Create folder state then in it folder called reducers and in it file called repositories.

### Folder Structure for Redux
1. Inside folder action-types and then file called index.ts
2. Inside State another folder actions and then file called index.ts
3. Inside action-types/index.ts cut pasted from repositoriesReducers, code enum action types constants and all other constants from different reducers can be added to this file.
4. Inside action/index.ts cut pasted from repositoriesReducers, all action related interface.
5. all files are then respectively imported into correct files.
6. Create new folder and file action-creators/index.ts. Note normally there will be different action-creators, and they can be respectively created with their file names.
7. Created index.ts file inside reducers
8. Creating new file store.ts inside state
9. Creating new file inside state folder index.ts. This is that one main file that earlier describes as will be used for importing all things to react components side.

### Re-organise project folder
1. Deleted all files created by react-create-app and moved app.js to components. Managed imports and exports. index.tsx is still in the src folder and is not deleted.
2. Created new file RepositoriesList.tsx in components folder

### Creating Structure for Hooks:
1. created new folder in src and called it hooks
2. created new file in hooks and called it useActions.ts