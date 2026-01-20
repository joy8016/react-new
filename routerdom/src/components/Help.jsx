import React from 'react'
import { useNavigate } from 'react-router-dom'

const Help = () => {
  const navigate = useNavigate();
  const navigatetohome = () => {
    navigate('/about')
  }
  return (
    <div>
      {/* <button className='text-orange-500' onClick={navigatetohome}>go to about</button> */}
      <div className='page'>
        Help


      </div>

    </div>
  )
}

export default Help
