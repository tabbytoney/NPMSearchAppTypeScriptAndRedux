# TypeScriptAndRedux

Searching for Node packages

A place for an examples and my notes for using TypeScript and Redux

Note: we call npm packages 'repositories' bc 'package' is a reserved keyword in TS

# To run locally
npm run start

# Structure

Redux Store

Will have repositories (a piece of state). -> willl be produced by a repositories reducer with 3 properties inside:
data - list of repositories from NPM
loading - true/false whether we are fetching data
error - string, error message if one occurred during fetch

We will send actions to these reducers ^
Action creator - searchRepositories(searchterm).

The action creator will dispatch one of a variety of actions
SearchRepositories - made a request and its pending
SearchRepositoriesSuccess
SearchRepositoriesError

Action types
‘search_repositories’
‘search_repositories_success’
‘search_repository_error’

Will have a single entry point for components to access Redux (reducers, action creators, middle-wares will be imported into the index.ts file, then export it from there) - from the index.ts file. This is best practices in TS rather than having components reaching directly into Redux files

One reducer (repositories), three pieces of state produced by this reducer (data, loading, error) - in state>reducer>respositoriesReducer.ts

![image](https://user-images.githubusercontent.com/60009709/210428254-201c61d2-7b0e-4116-a1ac-2a7dc2260666.png)

