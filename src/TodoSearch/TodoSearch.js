import React from "react";
import './TodoSearch.css'

function TodoSearch ({searchValue, setSearchValue}) {

    const onSearchValueChange = (event) => {
        console.log(event.target.value) // Se entra en la propiededad que contiene el texto escrito en el input.
        setSearchValue(event.target.value);
    }
    return [
        <input
        className="TodoSearch" 
        placeholder='Completa acá'
        value={searchValue} // se conecta al estado vacio.
        onChange={onSearchValueChange}
        />,
    ];
}

export {TodoSearch}