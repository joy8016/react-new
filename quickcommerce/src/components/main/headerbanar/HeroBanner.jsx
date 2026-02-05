import React from 'react'

const HeroBanner = () => {
  return (
    <div>
      <section  aria-labelledby="hero-heading">
        <div className="bg-linear-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <h1 id="hero-heading" className="text-3xl md:text-4xl font-bold mb-4">
              Fashion Delivered to Your Doorstep
              <span className="block text-2xl md:text-3xl text-blue-100 mt-2">
                In Just 30 Minutes! ⚡
              </span>
            </h1>
            <p className="text-lg text-blue-100 mb-6 max-w-2xl">
              Shop from 500+ local stores. Fresh collections, amazing discounts, and lightning-fast delivery.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-blue-600 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600">
                Start Shopping Now
              </button>
              <button className="bg-white/20 backdrop-blur-sm text-white font-bold px-6 py-3 rounded-xl hover:bg-white/30 transition-colors border border-white/30 focus:outline-none focus:ring-2 focus:ring-white">
                Explore Collections
              </button>
            </div>
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-1/3 hidden lg:block">
            <div className="absolute inset-0 bg-linear-to-l from-blue-500 to-transparent"></div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default HeroBanner
