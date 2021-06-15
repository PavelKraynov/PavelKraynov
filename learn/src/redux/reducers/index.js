import { combineReducers } from 'redux'
import users from './users'

const combineRootReducers = () =>
combineReducers({
  users
})

export default combineRootReducers