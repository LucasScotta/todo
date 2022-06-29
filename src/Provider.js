import { createContext, useState } from 'react'
import componentConfig from './util/componentConfig'
import TodoCounter from './components/TodoCounter';
import TodoSearch from './components/TodoSearch';
import TodoListing from './components/TodoListing';
import TodoItem from './components/TodoItem'
import CreateTodoButton from './components/CreateTodoButton'
import useLocalStorage from './hooks/useLocalStorage'

const TodoContext = createContext()

const TodoProvider = (props) => {
    const [todos, saveTodos] = useLocalStorage('todos', [])
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
        saveTodos(arr)
    }
    const deleteTodo = (todo) => {
        const index = todos.indexOf(todo)
        const arr = [...todos]
        arr.splice(index, 1)
        saveTodos(arr)
    }
    return (
        <TodoContext.Provider value={{
            componentConfig,
            TodoCounter,
            TodoSearch,
            TodoListing,
            TodoItem,
            CreateTodoButton,
            setSearch,
            total,
            completed,
            changeComplete,
            deleteTodo,
            searched,
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}
export { TodoProvider, TodoContext }