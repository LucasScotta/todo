import React from "react";
import {TodoContext} from './Provider'
import TodoCounter from "./components/TodoCounter";
import TodoSearch from "./components/TodoSearch";
import TodoListing from "./components/TodoListing";
import TodoItem from "./components/TodoItem";
import CreateTodoButton from "./components/CreateTodoButton";
import Modal from "./components/Modal";

const Build = () => {
    const {
        componentConfig,
        searched,
        changeComplete,
        deleteTodo,
        modal,
        setModal,
        addTodo
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
                {modal && <Modal config={componentConfig.Modal}>
                <form className="form-inline">
                    <div className="form-group mx-sm-3 mb-2">
                    
                        <input id="TODO" className="form-control" type="placeholder" />
                    </div>
                    <div 
                        className="btn btn-success mb-2"
                        style={{marginLeft:'10px',marginRight:'20px'}}
                        onClick={addTodo}>Add TO DO</div>
                    <div 
                        className="btn btn-danger mb-2"
                        onClick={() => setModal(!modal)}>CANCEL</div>
                    </form>
                </Modal>}
                <CreateTodoButton
                    config={componentConfig.CreateTodoButton} />
            </div>
        </div>
        )
}
export default Build