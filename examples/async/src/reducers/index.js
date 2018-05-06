import { combineReducers } from 'redux'
import {
  REQUEST_TODOS, RECEIVE_TODOS
} from '../actions'

const initialStatre = {isFetching: false, items: []}

const getTodos = (state = initialStatre, action) => {
  switch (action.type) {
    case REQUEST_TODOS:
      return {
        ...state,
        isFetching: true,
      }
    case RECEIVE_TODOS:
      return {
        ...state,
        isFetching: false,
        items: action.todos,
      }
    default:
      return state
  }
};

const rootReducer = combineReducers({
  getTodos,
})

export default rootReducer
