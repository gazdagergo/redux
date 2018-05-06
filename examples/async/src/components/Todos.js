import React from 'react'
import PropTypes from 'prop-types'

const Todos = ({todos}) => (
  <ul>
    {todos.map((post, i) => {
      console.log(post);
      return null;
    }
    )}
  </ul>
)

Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos
