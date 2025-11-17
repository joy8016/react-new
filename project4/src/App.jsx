import Button from './components/Button'
import './App.css'
import ColorBox from './components/ColorBox'
import { useState } from 'react'

function App() {

  const colors = ['red', 'blue', 'pink', 'black', 'green','yellow', 'lightseagreen','lightpink']

const [setColor, setSelectedColor]=useState('transparent')
  return (
    <>
    <h1 className='my-8'> 🎨 Color Switcher</h1>
      <div className='flex gap-3 mx-[23rem] my-6'>

        
        {
          colors.map((item) => {
           
            return (
              // console.log(item)
              
              < Button key={item} color={item} setSelectedColor={setSelectedColor}>
                {item}

              </Button >
            )
           


          })
        }
      </div>
      <div className='flex mx-[29rem]'>
        <ColorBox color={setColor} />
      

      </div>
    </>
  )
}

export default App
