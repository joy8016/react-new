import { useState } from 'react'
import questions from './questions.json'

const Questions = ({setisover, setScore}) => {

  const [currentIndex, setIndex] = useState(0);
  

  const handleOptionClick = (selectedOption) => {
    if (selectedOption === questions[currentIndex].answer) {
      setScore(prev => prev + 1);
      // setIndex(prev=>prev+1)

    }
    if(currentIndex <questions.length-1){
      setIndex(prev=>prev+1)
    }
    else{
      setisover(true);
    }
  }
  




  // console.log(questions[currentIndex])
  return (
    <div>
    
      <h2 className='m-2'>{questions[currentIndex].question}</h2>
      <div className='flex flex-col gap-1.5  text-red-500'>
        {
          questions[currentIndex].options.map((option) => {
            return <button  key={option} onClick={() => {
              handleOptionClick(option)


            }}>
              {option}
            </button>
          })
        }
      </div>


    </div>
  )
}

export default Questions
