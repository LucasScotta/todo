import React from "react";
const TodoItem = (props) => {
    const config = props.config
    return (
        <li id={config.id} className={config.className} style={config.style}>
            <span>C</span>
            <p>{props.text}</p>
            <span>X</span>
        </li>
    )
}

export default TodoItem