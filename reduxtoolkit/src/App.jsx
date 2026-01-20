
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Counter from './components/Counter'
import { useEffect, useState } from 'react';
import { changeByName } from './store/features/counter/counterSlice';
import User from './components/User';
import { fecthUser } from './store/features/user/userSlice';

function App() {
  // const [name, setName]=useState('')

  const dispatch = useDispatch();
  console.log(name);

useEffect(()=>{
  dispatch(fecthUser())
},[])


  return (
    <>
      <Counter />
      <input className='border-2' type="text" onChange={(e) => { dispatch(changeByName(e.target.value)) }} />

      <User />
    </>
  )
}

export default App
