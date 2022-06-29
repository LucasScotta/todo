import React from "react";
import { TodoContext } from '../Provider'
const TodoListing = (props) => {
    const {
        componentConfig
    } = React.useContext(TodoContext)
    return (
        <section id={componentConfig.TodoListing.id} className={componentConfig.TodoListing.className} style={componentConfig.TodoListing.style}>
            <ul style={{listStyle:'none', width:'100%'}}>
                {props.children}
            </ul>
        </section>
    )
}

export default TodoListing