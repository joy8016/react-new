import React, { useState } from 'react'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import ComponentC from './components/ComponentC'

const App = () => {

   const [statusOption, setStatusOption] = useState("");

   const status = {
      loading: <h1>loading.....</h1>,
      error: <h1>Appeared a error</h1>,
      success: <h1>successfully landed on moon</h1>

   }
return(
   <>
   {status[statusOption]}

   <button onClick={()=>{
      setStatusOption('loading')
   }}>loading</button>

   <button onClick={()=>{
      setStatusOption('error')
   }}>error</button>

   <button onClick={()=>{
      setStatusOption('success')
   }}>success</button>
   </>
)
   
 


}

export default App
