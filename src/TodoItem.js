import React from "react";
const TodoItem = (props) => {
    const config = props.config
    return (
        <li id={config.id} className={config.className} style={config.style}>
            <span className="col col-sm-4 item item-check">✓</span>
            <p className="col col-sm-4">{props.text}</p>
            <span className="col col-sm-4 item item-close">X</span>
        </li>
    )
}

export default TodoItem