import React, { useState } from 'react'

const SelectMenu = () => {
    const[state , setState] = useState('')

    const hadleChange = (e)=>{
        setState(e.target.value)
    }
  return (
    <div>
        <label >
            <select value={Option} onChange={hadleChange} >
                <option value="option1">Chicken </option>
                <option value="option2">burgur</option>
                <option value="option3">chili chicken</option>

            </select>
        </label>
        <h1>{state}</h1>
        <input type="text" value={state} />
      
    </div>
    
  )

}

export default SelectMenu
