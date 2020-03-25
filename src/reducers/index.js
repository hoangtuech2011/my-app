import { combineReducers } from 'redux'
import todos from './todos'
import customTodos from './custom_todos'
import visibilityFilter from './visibilityFilter'
export default combineReducers({
  customTodos,
  todos,
  visibilityFilter
})