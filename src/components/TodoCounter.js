import React from "react";
import { TodoContext } from "../Provider";
const TodoCounter = () => {
    const {
        componentConfig,
        completed,
        total,
    } = React.useContext(TodoContext)
     return (
            <h2
                id={componentConfig.TodoCounter.id}
                className={componentConfig.TodoCounter.className}
                style={componentConfig.TodoCounter.style}>Completed {completed} of {total}</h2>
    );
}
export default TodoCounter