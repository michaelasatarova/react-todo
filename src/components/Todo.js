import React, { useState, useEffect } from 'react';
//import TodoForm from './TodoForm';
//import {RiCloseCircleLine} from 'react-icons/ri' ;
//import {TiEdit} from 'react-icons/ti';
import {BsCircle} from 'react-icons/bs';
import {BiCheckCircle} from 'react-icons/bi';

function Todo({todos, removeTodo, updateTodo }) {
const [edit, setEdit] = useState({
    id:null,
    value: todos.text,
})

let [test, setTest] = useState(todos);
console.log("test", test);

let [active, setActive] = useState(true);
/* const submitUpdate = value => {
    updateTodo(edit.id, value)
    setEdit({
        id:null,
        value:''
    })
}

if(edit.id){
    return <TodoForm edit={edit} onSubmit={submitUpdate}/>;
} */

const completeTodo = id =>{
    todos.map(todo => {
       if(todo.id === id) {
      /*      todo.isComplete = !todo.isComplete;
           console.log(todo.isComplete) */
         /*   setActive(active = !active)
           console.log(todo) */

       }
   })
}



  return todos.map ((todo, index) =>(
    <div className='todo-row' key={index}>
        <div key={todo.id}  onClick={() => completeTodo(todo.id)}>
        {active ? <BsCircle className='checkIco'/> : <BiCheckCircle className='checkIco'/>}
            {todo.text}
        </div>
        <div className='icons'>
{/*         <RiCloseCircleLine onClick={() => removeTodo(todo.id)} className='delete-icon'/>
            <TiEdit onClick={() => setEdit({id:todo.id, value: todo.text})} className='edit-icon'/> */}
        </div>
    </div>
  )) 
}

export default Todo