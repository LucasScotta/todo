import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import componentConfig from './componentConfig'
import TodoCounter from './TodoCounter';
import TodoSearch from './TodoSearch';
import TodoListing from './TodoListing';
import TodoItem from './TodoItem'
import CreateTodoButton from './CreateTodoButton'

const todo = [
  {text: 'descripcion1', completed: false},
  {text: 'descripcion2', completed: false},
  {text: 'descripcion3', completed: false},
];

function App() {
  const [todos, setTodos] = useState(todo)
  const [search, setSearch] = useState('')
  const completed = todos.filter(todo => todo.completed).length
  const total = todos.length
  let searched = []
  if (search.length > 0) {
    searched = todos.filter(todo => {
      const searchText = search.toLowerCase()
      const todoText = todo.text.toLowerCase()
      const re = new RegExp(searchText)
      return re.test(todoText)
    })
  }
  else {
    searched = todos
  }
  return (
    <div className="container">
      <div className='row'>
        <TodoCounter
          completed={completed}
          total={total}
          config={componentConfig.TodoCounter} />
        <TodoSearch
          search={search}
          setSearch={setSearch}
          config={componentConfig.TodoSearch} />
        {<TodoListing config={componentConfig.TodoListing}>
          {searched.map(todo => (
            <TodoItem key={todo.text} text={todo.text} config={componentConfig.TodoItem} />
          ))}
        </TodoListing>}
        <CreateTodoButton
          todos={todos}
          setTodos={setTodos}
          config={componentConfig.CreateTodoButton} />
      </div>
    </div>
  );
}

export default App;
