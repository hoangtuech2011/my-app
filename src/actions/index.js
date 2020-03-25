let nextTodoId = 0
let nextCustomTodoId = 1
export const addNewTodo = text => ({
  type: 'ADD_NEW_TODO',
  id: nextTodoId++,
  text
})

export const customAddNewTodo = value => ({
  type: 'CUSTOM_ADD_NEW_TODO',
  id: nextCustomTodoId++,
  value
})


export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})
export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}