import React from 'react'
// import userData from './feature.json'

const FeatureCard = () => {
  return (
    <div>
      {userData.map((data)=>(
        <h1>{data.title}</h1>
       

      ))}
      
    </div>
  )
}

export default FeatureCard
