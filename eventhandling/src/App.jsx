
import { useState } from 'react'
import './App.css'

function App() {

  // const [count, setCount]=useState(0);
  const [name, setName]=useState('');

  // function click(event){
  //   // alert("button clicked ho gaya hain")

  //   // console.log(event.timeStamp)
  //   // console.log(event.target.value)

  //   setTimeout(()=>{console.log(event.target.value)},1000)
 
    

  // }

  function fullName(n){
    console.log('joydeb ' + n)
  }
 


  return (
    <>
     {/* <button onClick={click}>increament</button> */}

     {/* <input type="text "  onChange={click} placeholder='write here your name'/> */}
     <button onClick={()=>{fullName('maity')}}>submit</button>
    </>
  )
}

export default App
