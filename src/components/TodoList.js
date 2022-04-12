import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log("newtodo", newTodos)
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
        return;
      }
      setTodos(prev => prev.map(item => item.id === todoId ? newValue : item));
  }

  const updateActivState = (todoId, newState) => {
    if (newState.active) {
        return;
      }
      setTodos(prev => prev.map(item => item.id === todoId ? newState : item));
  }

  const removeTodo = id =>{
    const removeArr = [];
    setTodos(removeArr);
    console.log("removeArr", removeArr)
}
/*   const removeTodo = id =>{
      const removeArr = [...todos].filter(todo => todo.id !== id);
      setTodos(removeArr);
  } */

/*   const completeTodo = id =>{
       todos.map(todo => {
          if(todo.id === id) {
              todo.isComplete = !todo.isComplete;
              console.log(todo.isComplete)
          }
      })
  } */

  return (
    <div className="form-wrap">
      <TodoForm onSubmit={addTodo}/>
      <Todo todos={todos}  removeTodo={removeTodo} updateTodo={updateTodo} updateActivState={updateActivState} />
      <div className="summary">
         <div>{todos.length} item left</div>
         <div className="btn-group">
             <div>All</div>
             <div>Active</div>
             <div>Completed</div>
         </div>
         <div onClick={removeTodo}>Clear completed</div>
      </div>
    </div>
  );
}

export default TodoList;
