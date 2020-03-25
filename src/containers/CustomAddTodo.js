import React from 'react'
import { connect } from 'react-redux'
import { addNewTodo, customAddNewTodo } from '../actions'
const CustomAddTodo = ({ dispatch }) => {
  let input
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          // console.log(input.value);
          if (!input.value.trim()) {
            return
          }
          dispatch(customAddNewTodo(input.value))
          input.value = ''
        }}
      >
        <input ref={node => (input = node)} />
          <button type="submit">Custom Add Todo</button>
      </form>

     
    </div>
  )
}
export default connect()(CustomAddTodo)