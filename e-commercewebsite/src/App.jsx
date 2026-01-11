
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Products from './components/Products'

function App() {





  return (
    <>

      <Navbar />
      <Outlet />
      {/* <h1 className='text-[#8203f9] '>joydeb</h1> */}
      {/* <Products/> */}


    </>
  )
}

export default App
