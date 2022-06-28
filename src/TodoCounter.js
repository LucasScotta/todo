import React from "react";
const TodoCounter = (props) => {
    const config = props.config
     return (
        <h2 className={config.className} style={config.style}>Completed 2 of 3</h2>
    );
}
export default TodoCounter