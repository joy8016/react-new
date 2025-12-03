import React from 'react'

const UserCard = ({userDetails}) => {
  return (
    <div style={{backgroundColor:'red', padding:'1em', margin:'1em'}}>
     <h1>{userDetails.name}</h1>
     <h1>{userDetails.age}</h1>
     <h1>{userDetails.id}</h1>
      
    </div>
  )
}

export default UserCard
