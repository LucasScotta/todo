import React from "react";
const CreateTodoButton = (props) => {
    const config = props.config
    return (<button id={config.id} className={config.className} style={config.style}>+</button>)
}

export default CreateTodoButton