import React, { useState } from 'react'

const Card = () => {

    const [count, setCount] = useState(0);

    function increament(){
        setCount(count+1);

    //    setCount((prev)=>{
    //     prev = prev+1;
        console.log(count);
        
    //    })
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increament}>increament</button>
      
    </div>
  )
}

export default Card
