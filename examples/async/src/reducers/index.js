import { combineReducers } from 'redux'
import {
  REQUEST_POSTS, RECEIVE_POSTS
} from '../actions'

const posts = (state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      }
    case RECEIVE_POSTS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
      }
    default:
      return state
  }
}

const postsBySubreddit = (state = { }, action) => {
  switch (action.type) {
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return {
        ...state,
        frontend: posts(state.frontend, action)
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  postsBySubreddit,
})

export default rootReducer
