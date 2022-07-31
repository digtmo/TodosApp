import React from 'react';
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [  /// datos que serán enviados mediante props
  {text: 'Ordenar', completed: false},
  {text: 'Barrer', completed: true},
  {text: 'Trapear', completed: false},
  {text: 'Trotar', completed: false},
]

function App() { 
  const [todos, setTodos] = React.useState(defaultTodos)
  const [searchValue, setSearchValue] = React.useState(''); // en este caso seachValue esta vacio, ya que el input no lleva ningun dato hasta que alguien escribe.
  const completeTodos = todos.filter(todo => !!todo.completed).length // ! = falso, !! = verdadero
  const totalTodos = todos.length

  let searchedTodos = [];

  if (!searchValue.length >= 1){
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter (todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLocaleLowerCase()
      return todoText.includes(searchText);
    })
  }

  return (
    <React.Fragment>
      
        <TodoCounter
        completed={completeTodos}
        total={totalTodos}
        /> 

        <TodoSearch 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        /> 
      
       <TodoList>
          {searchedTodos.map(todo => (
            <TodoItem key={todo.text} text={todo.text}/> // Este props se está enviando al componente TodoItem y está mostrando todo el array "todos". Key es para identificar 
          ))}
        </TodoList>

        <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;
