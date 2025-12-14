import React, { useState } from 'react'


const Checked = () => {
    const [state, setState]=useState('');
  return (
    <div>
        <label >
            Accept Terms:
            <input type="checkbox" checked={state} onChange={(e)=>{
                setState(e.target.checked)

            }}/>
        </label>
        <p>Checked:{state?"yes":'no'}</p>
      
    </div>
  )
}

export default Checked
