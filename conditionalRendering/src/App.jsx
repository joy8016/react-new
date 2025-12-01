import React, { useState } from 'react'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import ComponentC from './components/ComponentC'

const App = () => {
   const option = 'a';

  let Component = option === 'a' ? ComponentA : ComponentB


 return(
  <>

  <Component/>


  </>
 )


}

export default App
