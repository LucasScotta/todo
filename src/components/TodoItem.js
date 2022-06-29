import React from "react";
const TodoItem = ({config, text, completed, onComplete, onDelete}) => {
    return (
        <li id={config.id} className={`${config.className}`} style={config.style}>
            <span className="col-2 offset-2 item-check" />
            <input
                className="form-check-input item"
                onClick={onComplete}
                type="checkbox"
                defaultChecked={completed ? 'checked' : ''}
                id="flexSwitchCheckDefault" />
            <p className='col-3'>{text}</p>
            <span
                className="col-3 item item-close"
                onClick={onDelete}>X</span>
        </li>
    )
}

export default TodoItem