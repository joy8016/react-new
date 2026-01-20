import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'




const User = () => {
 
    const dispatch =useDispatch();
    const state = useSelector(state=>state.users)
   


   
  return (
    <div>
        <h1>users</h1>
      
    </div>
  )
}

export default User
