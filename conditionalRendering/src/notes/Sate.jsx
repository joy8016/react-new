import React, { useState } from 'react'

const Sate = () => {
  const [toggle, setToggle] = useState();
 

  // if(!toggle){
  //   return null;
  // }

  return (
    <div>
      {
        toggle
          ?
          (<h1>toggle loggedout ho chuka hain</h1>)
          :
          ( <h1>toggle loggedin ho chuka hai</h1> )

         


}

      <button onClick={() => {
        setToggle(!toggle);
      }}>logg in</button>



    </div>
  )

}

export default Sate
