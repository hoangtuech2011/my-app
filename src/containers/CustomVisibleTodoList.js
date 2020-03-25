import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import { VisibilityFilters } from '../actions'


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

const customMapStateToProps = state => ({
  customTodos: getVisibleCustomTodos(state.customTodos, state.visibilityFilter)
})

const customMapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
  customMapStateToProps,
  customMapDispatchToProps
)(TodoList)