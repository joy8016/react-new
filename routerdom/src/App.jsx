import React from 'react'
import Navbar1 from './components/Navbar1'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Help from './components/Help'
import './App.css'
import Layout from './Layout'

const App = () => {
  const rou = createBrowserRouter([
   {
    path:'/',
    element:<Layout/>,
    children:[
       {
      path:'/',
      element:<Home/>

    },
    {
      path:'/about',
      element:<About/>,
     

    },
    {
      path:'/contact',
      element:<Contact/>

    },
    {
      path:'/help',
      element:<Help/>

    }
    ]
   }
  ])
  return (
    <div>
      <RouterProvider router={rou}/>
      {/* <Navbar1/> */}
      
     
      
      
      
    </div>
  )
}

export default App
