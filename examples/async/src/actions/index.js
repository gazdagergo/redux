export const REQUEST_TODOS = 'REQUEST_TODOS'
export const RECEIVE_TODOS = 'RECEIVE_TODOS'

export const requestTodos = () => ({
  type: REQUEST_TODOS,
})

export const receiveTodos = json => ({
  type: RECEIVE_TODOS,
  todos: json.data.children.map(child => child.data),
})

const fetchTodos = () => dispatch => {
  dispatch(requestTodos())
  return fetch(`https://www.reddit.com/r/frontend.json`)
    .then(response => response.json())
    .then(json => dispatch(receiveTodos(json)))
}

export const fetchTodosIfNeeded = () => (dispatch, getState) => {
  return dispatch(fetchTodos())
}
