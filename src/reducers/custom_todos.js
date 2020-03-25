const customTodos = (state = [], action) => {
  console.log(action)
    switch (action.type) {
      case 'CUSTOM_ADD_NEW_TODO':
        return[
          ...state,
          {
              id: action.id,
              value: action.value,
              completed: true
          }
        ]
      case 'TOGGLE_TODO':
        return state.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        )
      default:
        return state
    }
  }
  export default customTodos