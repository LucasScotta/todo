import React from "react";
const TodoListing = (props) => {
    const config = props.config
    return (
        <section id={config.id} className={config.className} style={config.style}>
            <ul style={{listStyle:'none', width:'100%'}}>
                {props.children}
            </ul>
        </section>
    )
}

export default TodoListing