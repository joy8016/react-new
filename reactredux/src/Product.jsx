import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Product = () => {
    const products = useSelector(state=>state.productReducer.products)
    // console.log(state)
    useEffect(()=>{
      console.log('re-render hua')
    })
  return (
    <div>
        {
           JSON.stringify(products)
        }

    </div>
  )
}

export default Product

