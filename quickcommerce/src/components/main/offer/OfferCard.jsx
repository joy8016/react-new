import React from 'react'
import { Tag, Clock, ChevronRight } from 'lucide-react'
const OFFERS = [
  {
    id: 1,
    title: 'FLAT 50% OFF',
    subtitle: 'On your first order',
    code: 'FIRST50',
    validity: 'Valid till Feb 28',
  },
  {
    id: 2,
    title: 'FREE DELIVERY',
    subtitle: 'On orders above ₹499',
    code: 'FREEDEL',
    validity: 'No minimum order',
  },
  {
    id: 3,
    title: 'BUY 2 GET 1 FREE',
    subtitle: 'On selected items',
    code: 'BUY2GET1',
    validity: 'Limited period offer',
  }
];
const Offercard = React.memo(({ id, title, subtitle, code, validity}) => (
  <article className="bg-linear-to-br from-white to-blue-50 rounded-2xl shadow-lg p-6 border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-12 h-12 bg-linear-to-r from-blue-500 to-blue-600 rounded-full mb-4" aria-hidden="true">
        <Tag className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-2xl font-bold bg-linear-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-2">
        {title}
      </h3>
      <p className="text-gray-600 mb-4">{subtitle}</p>
      <div className="bg-linear-to-r from-blue-50 to-indigo-50 border-2 border-dashed border-blue-200 rounded-xl px-4 py-3 mb-4">
        <p className="text-sm text-gray-500 mb-1">Use Code</p>
        <p className="text-xl font-bold bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-mono">
          {code}
        </p>
      </div>
      <div className="flex items-center justify-center text-sm text-gray-500 mb-4">
        <Clock className="w-4 h-4 mr-1" aria-hidden="true" />
        <span>{validity}</span>
      </div>
      <button
        className="w-full bg-linear-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        aria-label={`Apply offer code ${code}`}
      >
        Apply Now
      </button>
    </div>
  </article>
));

Offercard.displayName = 'Offercard';


const OfferCard = () => {
    return (
        <div>
            <section className="mb-10" aria-labelledby="offers-heading">
                <div className="flex items-center justify-between mb-6">
                    <h2 id="offers-heading" className="text-2xl font-bold text-gray-800">Exclusive Offers</h2>
                    <button className="text-blue-600 font-semibold flex items-center hover:text-blue-700 focus:outline-none focus:underline">
                        View All <ChevronRight className="w-5 h-5 ml-1" aria-hidden="true" />
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {OFFERS.map((offer) => (
                        <Offercard key={offer.id} offer={offer} />
                    ))}
                </div>
            </section>



        </div>
    )
}

export default OfferCard
