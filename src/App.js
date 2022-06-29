import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import componentConfig from './util/componentConfig'
import TodoCounter from './components/TodoCounter';
import TodoSearch from './components/TodoSearch';
import TodoListing from './components/TodoListing';
import TodoItem from './components/TodoItem'
import CreateTodoButton from './components/CreateTodoButton'

const todo = [
  {text: 'descripcion1', completed: true},
  {text: 'descripcion2', completed: false},
  {text: 'descripcion3', completed: false},
  {text: 'asd', completed: false},
  {text: 'asd', completed: false},
];

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || todo)
  const [search, setSearch] = useState('')
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
  const completed = searched.filter(todo => todo.completed).length
  const changeComplete = (todo) => {
    const index = todos.indexOf(todo)
    const arr = [...todos]
    arr[index].completed = !arr[index].completed
    setTodos(arr)
    localStorage.setItem('todos', JSON.stringify(arr))
  }
  const deleteTodo = (todo) => {
    const index = todos.indexOf(todo)
    const arr = [...todos]
    arr.splice(index, 1)
    setTodos(arr)
    localStorage.setItem('todos', JSON.stringify(arr))
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
          {searched.map((todo, i) => (
            <TodoItem
              key={i}
              completed={todo.completed}
              text={todo.text}
              onComplete={() => changeComplete(todo)}
              onDelete={() => deleteTodo(todo)}
              todo={todo}
              todos={todos}
              config={componentConfig.TodoItem} />
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
