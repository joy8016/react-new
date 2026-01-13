import React, { useEffect } from 'react'
import Wrapper from '../components/Wrapper'
import api from '../axiosinstance/api'
import { useContexthook } from '../context/Mycontext'
import Loader from '../components/Loader'



const News = ({ className }) => {

    const { news, setNews, fetchNews,loader } = useContexthook()
    // console.log(setNews)

    useEffect(() => {
        (async () => {
            const data = await fetchNews()
            // console.log(data)
            setNews(data.articles)

        })()

    }, [])

if(loader) return <Loader className={"py-34 w-fit m-auto"}/>

    return (
       
            <div className={`px-4 ${className} `}>
                {
                    news.map((newsDetails, index) => {
                        if(!newsDetails.urlToImage) return null
                        return (
                            
                            <CardNews key={index} details={newsDetails} />
                        )
                    })
                }
          




            </div>
      
    )
//    console.log(newsDetails)
}

const CardNews = ({ details }) => {
    // console.log(details)
    return (
        <>
            <div >
                <div className="card  text-white  shadow-sm border border-black">
                    <figure>
                        <img className='object-contain aspect-video w-full'
                            src={details.urlToImage}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title line-clamp-1">{details.title}</h2>
                        <p className='line-clamp-2'>{details.description}</p>
                        <div className="card-actions justify-end ">
                            <button onClick={()=>window.open(details.url)} className="btn-neutral btn-outline btn mt-5">Read More</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}



export default News
