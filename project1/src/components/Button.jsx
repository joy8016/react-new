import React from 'react'

const Button = (props) => {
  return (
    
      <div className='flex justify-center gap-4 mt-[1.5rem]'>
        <div>
          <button className='bg-blue-600 rounded-full p-1.5 text-white px-5 '>{props.text}</button>
        </div>


      </div>
      )
}

      export default Button
