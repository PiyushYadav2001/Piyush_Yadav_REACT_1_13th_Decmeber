import React from "react";
import "./Css/TodoItem.css";
import cross from './assest/cross.png'
import not from './assest/not_tick.png'
import tick from './assest/tick.png'

export const TodoItem = ({no,display,text,setTodos}) => {

       const delete1=(no)=>{
        let data=JSON.parse(localStorage.getItem("todos"));
         data=data.filter((todo)=>
            todo.no!==no);
         setTodos(data);
       }

    const toggle=(no)=>{
        let data=JSON.parse(localStorage.getItem("todos"));
        for(let i=0; i<data.length; i++){
                if(data[i].no===no){
                    if(data[i].display===""){
                        data[i].display="Line-through";
                    }else{
                        data[i].display="";
                    }
                    break;
                }
        }
            setTodos(data);
    }
  return (
    <div className="todoitems">
     
      <div className={`todoitems-container ${display}`} onClick={()=>{toggle(no)}}>
        {display===""?<img src={not} alt="" />: <img src={tick} alt="" />}
        <div className="todoitems-text">{text}</div>
      </div>
      <img  className='todoCross' src={cross} alt="" onClick={()=>{delete1(no)}} />
    </div>
  );
};
