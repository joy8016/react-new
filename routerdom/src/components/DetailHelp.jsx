import React from 'react'
import { useParams } from 'react-router-dom'

const DetailHelp = () => {
    const params = useParams()
    console.log(params);
  return (
    <div className='page'>
      Detailhelp:{params.id}
    </div>
  )
}

export default DetailHelp
