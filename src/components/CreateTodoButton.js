import React from "react";
import { TodoContext } from "../Provider";
const CreateTodoButton = () => {
    const {
        componentConfig,
        modal,
        setModal
    } = React.useContext(TodoContext)
    const buttonClicked = (e) => {
        setModal(true)
    }
    return (
    <button
        id={componentConfig.CreateTodoButton.id}
        className={componentConfig.CreateTodoButton.className}
        style={componentConfig.CreateTodoButton.style}
        onClick={buttonClicked}>
            +
    </button>)
}

export default CreateTodoButton