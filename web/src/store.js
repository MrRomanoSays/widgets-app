import { createStore, combineReducers } from 'redux'

import { set, lensProp } from 'ramda'

const initialState = {
  name: "",
  price: ""
}

const item = (state=initialState, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return set(lensProp('name'), action.payload, state)
    case 'SET_PRICE':
      return set(lensProp('price'), action.payload, state)
    case 'CLEAR_ITEM':
      return {}
    default:
      return state
  }
}

const items = (state=[], action) => {
  switch (action.type) {
    case 'LOAD_ITEMS':
      return action.payload
    default:
      return state
  }
}

const store = createStore(combineReducers({
    item: item,
    items: items
  })
)


export default store
