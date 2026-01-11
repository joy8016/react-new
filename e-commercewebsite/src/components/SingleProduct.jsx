import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useState, useEffect } from 'react';
import Loader from './Loader';

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loader, setLoader] = useState(false);
  const fetchData = async () => {
    setLoader(true)
    const response = await axios(`https://fakestoreapi.com/products/${id}`)
    setProduct(response.data)
    setLoader(false)
  }
  console.log(product);


  useEffect(() => {
    fetchData()
  }, [])



  if (loader) return <Loader />

  // console.log(params);
  return (

    <div className='group mt-8'>
      <div  key={product.id} className=" flex items-center  rounded-lg max-[1120px]:flex-col gap-2
      ">
        <img className='aspect-square object-contain p-4   transition-all hover:scale-90 duration-400 ' src={product?.image} alt="" />
        <div className='p-2 max-[1120px]:mt-9'>
          <h1 className='text-2xl  hover:text-blue-600' >{product?.title}</h1>

          <div className='flex gap-3 py-3'>
            <p className=' bg-yellow-900 rounded-lg px-1'><span className='text-[20px]'>⭐</span><span className=' p-1 rounded-lg '>{product?.rating?.rate}</span></p>
            <p className='text-[1.1em]'><span className='bg-red-400'>{product?.rating?.count}</span></p>
          </div>
          <p className='text-[1.4rem] text-gray-400 font-medium'>${product?.price}</p>
          <p>{product?.description}</p>

        </div>

      </div>
    </div>
  )
}

export default SingleProduct
