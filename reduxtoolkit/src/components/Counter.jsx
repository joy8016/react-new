import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeByValue, decrement, increment } from '../store/features/counter/counterSlice';


const Counter = () => {
    // const [value, setValue]=useState(0);
    const storeValue = useSelector(state=>state.counter.value)
    const dispatch = useDispatch();
    console.log(storeValue);
    const handleincrement = ()=>{
        dispatch(increment())

    }
    const handledecrement = ()=>{
        dispatch(decrement())
    }
    const handlechangebyValue = ()=>{
       dispatch(changeByValue(value))
    }
    useEffect(()=>{
        console.log('re-render hua hai')
    })
  return (
    <div>
        <h1>{storeValue}</h1>
        <button onClick={handleincrement}>increment</button>
        <button onClick={handledecrement}>decrement</button>
        <input type="number" onChange={(e)=>setValue(e.target.value)}/>
        <button className='bg-red-500' onClick={handlechangebyValue}>change</button>
      
    </div>
  )
}

export default Counter
