import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar1 from './components/Navbar1'

const Layout = () => {
  return (
    <div >
      <Navbar1 />


     
       <h1 className='text-fuchsia-800 bg-lime-500'>layout</h1>
     

      <Outlet />
    </div>
  )
}

export default Layout
