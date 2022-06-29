import React from "react";
import {TodoContext} from './Provider'
import TodoCounter from "./components/TodoCounter";
import TodoSearch from "./components/TodoSearch";
import TodoListing from "./components/TodoListing";
import TodoItem from "./components/TodoItem";
import CreateTodoButton from "./components/CreateTodoButton";
const Build = () => {
    const {
        componentConfig,
        searched,
        changeComplete,
        deleteTodo
    } = React.useContext(TodoContext)
    return (
        <div className="container">
            <div className='row'>
                <TodoCounter 
                config={componentConfig.TodoCounter} />
                <TodoSearch />
                <TodoListing>
                    {searched.map((todo, i) => (
                        <TodoItem
                            key={i}
                            completed={todo.completed}
                            text={todo.text}
                            onComplete={() => changeComplete(todo)}
                            onDelete={() => deleteTodo(todo)}
                            config={componentConfig.TodoItem} />
                    ))}
                </TodoListing>
                <CreateTodoButton
                    config={componentConfig.CreateTodoButton} />
            </div>
        </div>
        )
}
export default Build