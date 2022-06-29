import React from "react";
const TodoSearch = (props) => {
    const config = props.config
    const onText = (e) => {
        console.log(e.target.value)
    }
    return (
        <div className={config.className} style={config.style}>
            <input
                id='searcher'
                type="text"
                placeholder="TODO searcher"
                onChange={onText} />
        </div>)
}

export default TodoSearch