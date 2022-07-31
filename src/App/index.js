import React from 'react';
import './App.css';
import { AppUI } from './AppUI';

const defaultTodos = [  /// datos que serán enviados mediante props
  {text: 'Ordenar', completed: false},
  {text: 'Barrer', completed: true},
  {text: 'Trapear', completed: false},
  {text: 'Trotar', completed: false},
]

function App() { 
  const [todos, setTodos] = React.useState(defaultTodos)
  const [searchValue, setSearchValue] = React.useState(''); // en este caso seachValue esta vacio, ya que el input no lleva ningun dato hasta que alguien escribe.
  const completedTodos = todos.filter(todo => !!todo.completed).length // ! = falso, !! = verdadero
  const totalTodos = todos.length

  let searchedTodos = []; // Array vacio que utilizaremos mas adelante

  if (!searchValue.length >= 1){ 
    searchedTodos = todos; // si searchTodos esta vacio, entonces muestra todos
  } else {
    searchedTodos = todos.filter (todo => { // si hay algo escrito en el input se filtra y busca si el texto escrito esta incluido en todos
      const todoText = todo.text.toLowerCase(); // se lleva todo a minuscula 
      const searchText = searchValue.toLocaleLowerCase();  // se lleva todo a minuscula 
      return todoText.includes(searchText); // devuelve el texto que incluye las palabras escritas en el input
    })
  }

  const completeTodo = (text) => { // se le envía el text como props
    const todoIndex = todos.findIndex(todo => todo.text === text) // se busca el text en cada todo, una vez que lo encuentra devuelve su posicion
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos)
  }

  const deleteTodo = (text) => { // se le envía el text como props
    const todoIndex = todos.findIndex(todo => todo.text === text) // se busca el text en cada todo, una vez que lo encuentra devuelve su posicion
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos)
  }


  return (
  <AppUI
    totalTodos={totalTodos}
    completedTodos={completedTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
  />
  );
}

export default App;
