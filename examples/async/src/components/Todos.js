import React from 'react'
import PropTypes from 'prop-types'

const Todos = ({todos}) => (
  <ul>
    {todos.map((post, i) =>
      <li key={i}>{post.title}</li>
    )}
  </ul>
)

Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos
