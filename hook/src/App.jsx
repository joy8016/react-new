
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount]=useState(0);
  const [decr, setDecr]=useState(0);

  useEffect(()=>{
    console.log("hum useeffect hook ke andar hain");
  },[count, decr])
 

  return (
    <>
    <h1>{count}</h1>
    <button onClick={()=>{
      setCount(count+1);
    }}>Increament</button>
    
    <h1>{decr}</h1>
    <button onClick={()=>{
      setDecr(decr-1);
    }}>Decreament</button>
    
    </>
  )
}

export default App
