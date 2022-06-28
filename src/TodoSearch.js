import React from "react";
const TodoSearch = (props) => {
    const config = props.config
    return (<input className={config.className} style={config.style} placeholder="TODO a buscar" />)
}

export default TodoSearch