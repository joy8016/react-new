import React from 'react'
import C from './C'
import D from './D'
import { useMyContext } from '../Mycontext'

const A = () => {
    const {count} = useMyContext();
  return (
    <div className='bg-amber-500 p-5'>
        <h1>{count}</h1>
      A
      <C/>
      <D/>
    </div>
  )
}

export default A
