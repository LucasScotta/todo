import React from "react";
const TodoSearch = (props) => {
    const config = props.config
    return (
        <div className={config.className} style={config.style}>
            <input id='searcher' type="text" placeholder="TODO searcher" />
        </div>)
}

export default TodoSearch