import React, { useEffect, useRef, useState } from 'react'
import"./Css/Todo.css"
import { TodoItem } from './TodoItem';

let count=0;
export const Todo = () => {

    const [todos,setTodos]=useState([]);
    const inputRef=useRef(null);

    const add= ()=>{
           setTodos([...todos,{no:count++,text:inputRef.current.value,display:""}]);
           inputRef.current.value="";
           localStorage.setItem("todos_count",count)
    }

    useEffect(()=>{
        setTodos(JSON.parse(localStorage.getItem("todos")));
        count=localStorage.getItem("todos_count");
    },[])

    useEffect(()=>{
        setTimeout(()=>{
            console.log(todos);
            localStorage.setItem("todos",JSON.stringify(todos));
        },100)
    },[todos])

  return (
    <div className='todo'>
        <div className="todoHeader">To-DO List</div>
        <div className="todo-add">
            <input ref={inputRef} type="text" placeholder='Add Your Task' className='todo-input'  />
            <div onClick={()=>{add()}} className="todo-add-btn">ADD</div>
        </div>
        <div className="todo-List">
             {todos.map((item,index)=>{
                 return  <TodoItem key={index} setTodos={setTodos} no={item.no} display={item.display} text={item.text}/>
             })}
        </div>
    </div>
  )
}
