import React from 'react'

const ColorBox = ({color}) => {
  return (
    <div style={{backgroundColor:color}}className='w-[300px] h-[300px] bg-[red] rounded-2xl font-extrabold  content-center m-2 border-3'>{color}
      
    </div>
  )
}

export default ColorBox
