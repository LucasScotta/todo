import React from "react";
const TodoListing = (props) => {
    return (
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    )
}

export default TodoListing