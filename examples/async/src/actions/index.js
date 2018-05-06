export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'

export const requestPosts = () => ({
  type: REQUEST_POSTS,
})

export const receivePosts = json => ({
  type: RECEIVE_POSTS,
  posts: json.data.children.map(child => child.data),
})

const fetchPosts = () => dispatch => {
  dispatch(requestPosts())
  return fetch(`https://www.reddit.com/r/frontend.json`)
    .then(response => response.json())
    .then(json => dispatch(receivePosts(json)))
}

export const fetchPostsIfNeeded = () => (dispatch, getState) => {
  return dispatch(fetchPosts())
}
