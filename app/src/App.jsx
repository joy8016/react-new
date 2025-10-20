
import './App.css'

function App() {
  let name = "joydeb maity"

  function greet(){
    return "how are you?";
  }
  let age = 129;

  return (
    <>
      <h1>hello {name} {greet()} {7+8} </h1>

      <h1>{age>=18?"you can drive": "you can't drive"}</h1>

    </>
  )
}

export default App
 