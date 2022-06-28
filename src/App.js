import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import componentConfig from './componentConfig'
import TodoCounter from './TodoCounter';
import TodoSearch from './TodoSearch';
import TodoListing from './TodoListing';
import TodoItem from './TodoItem'
import CreateTodoButton from './CreateTodoButton'

const todos = [
  {text: 'descripcion1', completed: false},
  {text: 'descripcion2', completed: false},
  {text: 'descripcion3', completed: false},
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter config={componentConfig.TodoCounter} />
      <TodoSearch />
      {<TodoListing>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoListing>}
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
