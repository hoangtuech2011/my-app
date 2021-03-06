import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

const TodoList = ({ todos, toggleTodo }) => (
  <ul>
    {
      confirmonsole.log('release v.0.0.2');
      confirmonsole.log('happy coding');
      confirmonsole.log('todo 11');
      confirmonsole.log('todo 12');
      confirmonsole.log('todo 13');
    todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
    ))}
  </ul>
);
TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
};
export default TodoList;
