import React, {useState} from 'react';
export default function NewTask({OnAddTask}){
    const [newTask,setNewTask]=useState('');
    const [newDate,setNewDate]=useState('');

    const HandleTaskChange = (e) =>{
        setNewTask(e.target.value)
    }
    const HandleDateChange = (e) =>{
        setNewDate(e.target.value)
    }

    const handleAddTask = () => {
        OnAddTask({task:newTask,date:newDate});
        setNewDate("");
        setNewTask("");
    }

    return(
        <>
        <input type='text' value={newTask} onChange={HandleTaskChange} placeholder='Enter Task'></input>
        <input type='date' value={newDate} onChange={HandleDateChange} placeholder='dd-mm-yyyy'></input>
        <button onClick={handleAddTask}>Add Task</button>
        </>
    )
}