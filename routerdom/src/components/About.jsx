import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
// import './App.css'

const About = () => {
  const navigate = useNavigate()
  const navigatetohome = () => {
    navigate('/')

  }
  return (
    <>
      
      {/* <button onClick={navigatetohome}>navigatetohome</button> */}
      <Outlet />
      <h1 className='text-white page'>
        About

      </h1>
     
      {/* <div className='h-30 w-20 bg-amber-900'></div>  */}
      
    </>
  )
}

export default About
