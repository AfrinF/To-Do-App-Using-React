import NewTask from "./NewTask";
import React,{useState} from "react";

export default function TaskList(){
    const [todo,setTodo]=useState([]);

    const handleRemoveTask = (index) => {
        setTodo(todo.filter((_,i) => i!==index));
    }
    const addTask = (newTask) =>{
        setTodo([...todo,newTask]);
    }

    return(
        <>
        <NewTask OnAddTask={addTask}/>
        <div className="task-todo">
            {todo.map((item,index) => (
            <>
            <hr></hr>
            <p key={index}>
            <b>Task: </b> {item.task} <b>Due: </b> {item.date}
            <button onClick={() => handleRemoveTask(index)}>Completed</button>
            </p>
            </>
        ))}
                
        </div>
        </>
    )

}