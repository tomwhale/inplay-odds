import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'

import odds from './odds'

export default createStore(
  combineReducers({ odds }),
  applyMiddleware(thunkMiddleware)
)
