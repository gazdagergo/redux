import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchTodosIfNeeded } from '../actions'
import Todos from '../components/Todos'

class App extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchTodosIfNeeded())
  }

  handleRefreshClick = e => {
    e.preventDefault()

    const { dispatch } = this.props
    dispatch(fetchTodosIfNeeded())
  }

  render() {
    const { todos, isFetching } = this.props;

    const isEmpty = todos.length === 0
    return (
      <div>
        <p>
          {!isFetching &&
            <button onClick={this.handleRefreshClick}>
              Refresh
            </button>
          }
        </p>
        {isEmpty
          ? (isFetching ? <h2>Loading...</h2> : <h2>Empty.</h2>)
          : <div style={{ opacity: isFetching ? 0.5 : 1 }}>
              <Todos todos={todos} />
            </div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { getTodos } = state;
  if (getTodos.items) {
    const { isFetching, items: todos } = getTodos;
    return { todos, isFetching };
  } 
  return { todos: [], isFetching: true }
}

export default connect(mapStateToProps)(App)
