import React from "react";
import ReactDOM from "react-dom";

function Modal({children, config}) {
    return ReactDOM.createPortal(
        <div
            className={config.className}
            id={config.id}
            style={config.style}>
            {children}
        </div>,
        document.getElementById('modal')
    )
}

export default Modal