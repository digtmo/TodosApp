import React from "react";



function TodoItem (props) {
    return (
       <li>
        <span>C</span>
        <p>{props.text}</p>
        <span>C</span>
       </li>
    );
}

export {TodoItem}