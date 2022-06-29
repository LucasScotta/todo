import React from "react";
const TodoCounter = ({config, completed, total}) => {
     return (
            <h2 id={config.id} className={config.className} style={config.style}>Completed {completed} of {total}</h2>
    );
}
export default TodoCounter