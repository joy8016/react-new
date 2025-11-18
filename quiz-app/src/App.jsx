import { useState } from 'react'

import './App.css'
import Timer from './comoponents/Timer'
import Questions from './comoponents/Questions'
import Result from './comoponents/Result';

function App() {
  const [isOver, setISover] = useState(false);
  const [score, setScore] = useState(0);


  return (


    <>

      {
        isOver ? (<Result score={score} />): (
          <>

             <Timer setISover={setISover} />
            <Questions setisover={setISover} setScore={setScore} />


          </>)
      }
    </>
  )
}

export default App
