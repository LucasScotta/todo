import React from "react";
import { TodoContext } from "../Provider";
const TodoSearch = () => {
    const {
        componentConfig,
        search,
        setSearch,
    } = React.useContext(TodoContext)
    const changeText = (e) => {
        setSearch(e.target.value)
    }
    return (
        <div className={componentConfig.TodoSearch.className} style={componentConfig.TodoSearch.style}>
            <input
                id='searcher'
                type="text"
                placeholder="TODO searcher"
                value={search}
                onChange={changeText} />
        </div>
        )
}

export default TodoSearch