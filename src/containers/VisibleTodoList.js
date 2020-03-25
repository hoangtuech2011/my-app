import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import { VisibilityFilters } from '../actions'
const getVisibleTodos = (todos, filter) => {
  console.log(todos)
  console.log(filter)
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const getVisibleCustomTodos = (customTodos, customFilter) => {
  console.log(customFilter)
  // switch (customFilter) {
  //   case VisibilityFilters.SHOW_ALL:
  //     return customTodos
  //   case VisibilityFilters.SHOW_COMPLETED:
  //     return customTodos.filter(t => t.completed)
  //   case VisibilityFilters.SHOW_ACTIVE:
  //     return customTodos.filter(t => !t.completed)
  //   default:
  //     throw new Error('Unknown filter: ' + customFilter)
  // }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})
const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

// const customMapStateToProps = state => ({
//   customTodos: getVisibleCustomTodos(state.customTodos, state.visibilityFilter)
// })

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  // customMapStateToProps
)(TodoList)