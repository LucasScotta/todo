import React from "react";
const TodoItem = (props) => {
    return (
        <li>
            <span>C</span>
            <p>{props.text}</p>
            <span>X</span>
        </li>
    )
}

export default TodoItem