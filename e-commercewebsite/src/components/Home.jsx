import React, { useState } from 'react'
import Menu from './Menu'

const Home = () => {
    const [show, setShow] = useState(false)
    // const hadleinput =()=>{
    //     return(
        
    //     )
    // }
    console.log(show)


    return (
        <>

           <div>
            <button className='mt-4 text-red-500' onClick={()=>(
               setShow(!show)
             
             
            )}>{show 
            ? 
            <Menu/>
            :
           "show"
             
             }
             {show
             ?
             
             'hide'
             :
             ""


             }</button>
           </div>


        </>
    )
}

export default Home
