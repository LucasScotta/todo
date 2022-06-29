import React from "react";
const TodoSearch = ({config, search, setSearch}) => {
    const changeText = (e) => {
        setSearch(e.target.value)
    }
    return (
        <div className={config.className} style={config.style}>
            <input
                id='searcher'
                type="text"
                placeholder="TODO searcher"
                value={search}
                onChange={changeText} />
        </div>)
}

export default TodoSearch