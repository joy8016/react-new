

import './App.css'
import A from './components/A'
import B from './components/B'
import {useMyContext } from './Mycontext';

function App() {


  return (
    <>
      <div className='bg-red-500 p-5'>
       
        <h1 className='text-red-400 bg-blue-500 p-4 rounded-2xl '>  <span className='  hover:scale-80 transform-3d transition-all'>app</span></h1>
        <A />
        <B />

      </div>
    </>
  )
}

export default App
