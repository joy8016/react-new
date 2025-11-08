import React from 'react'
import Hero from './Hero'
import About from './About'



const Layout = ({Data}) => {

    console.log(Data);
  return (
    <div style={{background:'green', padding:'2rem'}}>

    <h3>layout</h3>

    <Hero data = {Data}/>
    <About data={Data}/>



      
      
    </div>
  )
}

export default Layout
