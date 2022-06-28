import React from "react";
const TodoListing = (props) => {
    const config = props.config
    return (
        <section id={config.id} className={config.className} style={config.style}>
            <ul>
                {props.children}
            </ul>
        </section>
    )
}

export default TodoListing