import React, { useState } from 'react';

import {BsCircle} from 'react-icons/bs';
import {BiCheckCircle} from 'react-icons/bi';

function Todo({todos }) {

let [edit, setEdit] = useState(todos)

const completeTodo = id =>{
    todos.map(todo => {
       if(todo.id === id) {
         setEdit(todo.active = !todo.active);
       }
   })
}

  return todos.map ((todo, index) =>(
    <div className='todo-row' key={index} onClick={() => completeTodo(todo.id)}>
        <div key={todo.id}  >
        {todo.active ? <BsCircle className='checkIco'/> : <BiCheckCircle className='checkIco'/>}
            {todo.text}
        </div>
    </div>
  )) 
}

export default Todo