import React from "react";

export default (props) => {
    return (
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    )
}