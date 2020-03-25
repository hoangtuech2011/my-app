import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import CustomAddTodo from '../containers/CustomAddTodo'

import VisibleTodoList from '../containers/VisibleTodoList'
import CustomVisibleTodoList from '../containers/CustomVisibleTodoList'
const App = () => (
  <div>
    <AddTodo />
    <CustomAddTodo />
    <VisibleTodoList />
    {/* <CustomVisibleTodoList /> */}
    <Footer />
  </div>
)
export default App