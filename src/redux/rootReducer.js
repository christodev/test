import {combineReducers} from 'redux'
import {articlesReducer, authReducer} from './reducers'

const rootReducer = combineReducers({
  auth: authReducer,
  articles: articlesReducer,
})

export default rootReducer
