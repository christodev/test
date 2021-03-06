import {applyMiddleware, createStore} from 'redux'
import rootReducer from './rootReducer'
import Thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(Thunk))
export default store
