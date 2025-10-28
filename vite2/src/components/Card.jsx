import React, { useState } from 'react'

const Card = (props) => {

    const[count, setCount] = useState(0);

    function increment(){
        setCount(count+1);
    }
    function decrement(){
       if(count>0){
        setCount(count-1)
       }
    }







  return (
    <div className='card'>
        <h1>{count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <h1>{props.title} </h1>
        <h1>{props.description}</h1>
      
    </div>
  )
}

export default Card
 