import React from "react";
const CreateTodoButton = (props) => {
    const config = props.config
    const buttonClicked = (e) => {
        console.log(e)
    }
    return (
    <button
        id={config.id}
        className={config.className}
        style={config.style}
        onClick={buttonClicked}>
            +
    </button>)
}

export default CreateTodoButton