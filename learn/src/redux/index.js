import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import combineRootReducers from './reducers'
import  thunk  from 'redux-thunk'

const initialState = {}

const middleware = [thunk]
const composeFunc =
  process.env.NODE_ENV === "development" ? composeWithDevTools : compose;
const composeEnchanters = composeFunc(applyMiddleware(...middleware));
const store = createStore(
  combineRootReducers(),
  initialState,
  composeEnchanters
);

export default store