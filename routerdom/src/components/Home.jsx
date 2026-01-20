import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const navigatetochelp = () => {
    navigate('/help')
  }
  return (
    <>
    {/* <button onClick={navigatetochelp}>navigatetohelp</button> */}
      <div className='page'>
        Home

      </div>
    </>
  )
}

export default Home
