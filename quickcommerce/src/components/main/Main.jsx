import React from 'react'
import HeroBanner from './headerbanar/HeroBanner'
import FeatureGrid from './featuresgrid/FeatureGrid'
import OfferCard from './offer/OfferCard'
import TrendingProducts from './trendingproducts/TrendingProducts'
import DeliveryPromise from './deliverypromise/DeliveryPromise'
import Footer from './footer/Footer'

const Main = () => {
  return (
    <div className='m-8'>
        <HeroBanner/>
        <FeatureGrid/>
        {/* <FeatureGrid/> */}
        <OfferCard/>
        <TrendingProducts/>
        <DeliveryPromise/>
        <Footer/>
      
    </div>
  )
}

export default Main
