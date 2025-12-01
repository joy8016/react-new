import React from 'react'

const If = () => {


    const option = 'b';


    if (option === 'a') {
        return (
            <>
                <h1>component a</h1>
            </>
        )
    }
    if (option === 'b') {
        return (
            <>
           
                <h1>component b</h1>
                <h1>hello joydeb maity</h1>
           </>
        )
    }
    if (option === 'c') {
        return (
            <>
                <h1>component c</h1>
            </>
        )
    }


  return(
    <h1>others component</h1>
  )




}

export default If
