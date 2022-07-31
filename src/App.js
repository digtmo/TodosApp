import React from 'react';
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const todos = [  /// datos que serán enviados mediante props
  {text: 'Ordenar', completed: false},
  {text: 'Barrer', completed: false},
  {text: 'Trapear', completed: false},
]

function App(props) { 
  return (
    <React.Fragment>
      
      <TodoCounter/> 
        <TodoSearch/> 
        <input placeholder='Completa acá'/>

       <TodoList>
          {todos.map(todo => (
            <TodoItem key={todo.text} text={todo.text}/> // Este props se está enviando al componente TodoItem y está mostrando todo el array "todos". Key es para identificar 
          ))}
        </TodoList>

        <CreateTodoButton/>
        {props.children}
    </React.Fragment>
  );
}

export default App;
