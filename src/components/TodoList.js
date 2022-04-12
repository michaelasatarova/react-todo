import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [filtredState, setFiltredState] = useState(null);

  //add to list
  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log("newtodo", newTodos);
  };

  //remove all items from list
  const removeTodo = (e) => {
      e.preventDefault()
    const removeArr = [];
    setTodos(removeArr);
    setFiltredState(removeArr);
    console.log("removeArr", removeArr);
  };

  const AllItems = () => {
    return todos;
  };

  //filter active or inactive task state
 const filterFunction = (isActive) =>{
    let myBool = (isActive.toLowerCase() === 'true'); 
    let filtredState = AllItems().filter(state =>  state.active === myBool );
    console.log("filtredState", filtredState);
    return filtredState;
}

 //send to todos component correct value
  const HandleFilters = (state) => {
      state.preventDefault();
      console.log(state.target.value)
      state.target.value !== "all" 
    ? setFiltredState(filterFunction(state.target.value))
    : setFiltredState(AllItems());
    console.log("new", filtredState)
  };


  return (
    <div className="form-wrap">
      <TodoForm onSubmit={addTodo} />
      <Todo todos={filtredState ? filtredState : todos } />
      <div className="summary">
        <div>{filtredState ? filtredState.length :todos.length} item</div>
        <div className="btn-group">
             <button onClick={HandleFilters} value="all">All</button>
             <button onClick={HandleFilters} value="true">Active</button>
             <button onClick={HandleFilters} value="false">Completed</button> 
        </div>
        <button onClick={removeTodo}>Clear completed</button>
      </div>

    </div>
  );

}

export default TodoList;
