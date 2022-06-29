import React from "react";
const TodoItem = (props) => {
    const config = props.config
    const onComplete = () => {
        alert('TodoItem')
    }
    const onDelete = () => {
        alert('borrar TODO')
    }
    return (
        <li id={config.id} className={`${config.className}`} style={config.style}>
            <span
                className="col-3 offset-2 item item-check"
                onClick={onComplete}>✓</span>
            <p className="col-3">{props.text}</p>
            <span
                className="col-3 item item-close"
                onClick={onDelete}>X</span>
        </li>
    )
}

export default TodoItem