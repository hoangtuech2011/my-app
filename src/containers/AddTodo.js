import React from 'react'
import { connect } from 'react-redux'
import { addNewTodo, customAddNewTodo } from '../actions'
import { createStore } from 'redux'
const AddTodo = ({ dispatch }) => {
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
          dispatch(addNewTodo(input.value))
          input.value = ''
        }}
      >
        <input ref={node => (input = node)} />
          <button type="submit">Add Todo</button>
      </form>

     
    </div>
  )
}
export default connect()(AddTodo)