import React from 'react'
import PropTypes from 'prop-types'
const CustomTodo = ({ onClick, completed, value }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {value}
  </li>
)
CustomTodo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired
}
export default CustomTodo