import React from 'react'
import { Provider } from 'react-redux'
import store from './redux'
import Users from './users'

const Root = () => {
  return (
    <Provider store = {store}>
      <Users />
    </Provider>
  )
}

export default Root