import {createStore, applyMiddleware, combineReducers} from 'redux'
import hackerNewsReducer from './ducks/hackerNewsReducer'
import mediumReducer from './ducks/mediumReducer'
import redditReducer from './ducks/redditNewsReducer'
import promiseMiddleware from 'redux-promise-middleware'

const rootReducer = combineReducers({
  hackerNews: hackerNewsReducer,
  medium: mediumReducer,
  reddit: redditReducer
})

const store = createStore(rootReducer, applyMiddleware(promiseMiddleware))

export default store