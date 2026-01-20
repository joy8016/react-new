import React, { useContext } from 'react'
import { useMyContext } from '../Mycontext'

const F = () => {
    const {count,setCount} = useMyContext();
   
  return (
    <div className='bg-violet-500 p-7'>
        <button onClick={()=>setCount(count+1)}>countc</button>
       
        F
      
    </div>
  )
}

export default F
