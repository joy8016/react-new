import React, { useState } from 'react'
import './App.css'
import { useCounter } from './customhook/useCounter'

const App = () => {
  const [inputValue, setInputValue] = useState(0);

  const {count, increment, decrement, setByvalue}=useCounter()
  return (
    <div>
      {count}
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <input 
      type="number"
      value={inputValue}
      onChange={(e)=>setInputValue(e.target.value)}
       />
       <button onClick={()=>setInputValue(setByvalue(inputValue))}>setvalue</button>
      
    </div>
  )
}

export default App
