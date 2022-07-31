import React from "react";
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';

function AppUI ({
  totalTodos,
  completedTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo,
}) {
    
    return (
        <React.Fragment>
      
        <TodoCounter
        completed={completedTodos}
        total={totalTodos}
        /> 

        <TodoSearch 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        /> 
      
       <TodoList>
          {searchedTodos.map(todo => (
            <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
            /> // Este props se está enviando al componente TodoItem y está mostrando todo el array "todos". Key es para identificar 
          ))}
        </TodoList>

        <CreateTodoButton/>
    </React.Fragment>
    );
}

export {AppUI}