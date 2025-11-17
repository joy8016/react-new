import React from 'react'

const Button = ({ color,setSelectedColor, children }) => {
  // console.log(color)

  function selectedColor(){
    setSelectedColor(color);

  }
  return (
    <div>
     
        <button onClick={selectedColor} style={{
          backgroundColor: color
        }} >
          {children}</button>
      
    </div>
  )
}

export default Button

