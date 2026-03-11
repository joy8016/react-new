import React, { useState } from 'react'

const Taskform = () => {
    const [task, setTask]=useState('')
    const [priority, setPriority]=useState("medium")
    const [catagory, setCatagory]=useState("general")
  return (
    <form className='task-form '>
        <div id='inp'>
            <input 
            type="text" 
            placeholder='enter your task'
            />
            <span><button>Add Task</button></span>

        </div>
        <div id='value'>
            <select >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>

            </select>
            <select >
                <option value="General">General</option>
                <option value="Work">Work</option>
                <option value="Private">Private</option>

            </select>
        </div>
    </form>
  
  )
}

export default Taskform
