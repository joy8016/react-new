import React from 'react'
import { Truck,Package } from 'lucide-react'

const DeliveryPromise = () => {
    return (
        <div>
            <section className="mb-10" aria-labelledby="delivery-heading">
                <div className="bg-linear-to-r from-blue-500 to-indigo-600 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="flex flex-col lg:flex-row items-center justify-between">
                            <div className="lg:w-2/3 mb-8 lg:mb-0">
                                <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                                    <Truck className="w-5 h-5 mr-2" aria-hidden="true" />
                                    <span className="font-semibold">Express Delivery</span>
                                </div>
                                <h2 id="delivery-heading" className="text-3xl font-bold mb-4">
                                    Lightning Fast Delivery in 30 Minutes
                                </h2>
                                <p className="text-lg text-blue-100 mb-6">
                                    Experience the future of shopping. Get your favorite fashion items delivered from local stores faster than ever.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                                        <div className="text-2xl font-bold">500+</div>
                                        <div className="text-sm text-blue-200">Local Stores</div>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                                        <div className="text-2xl font-bold">10K+</div>
                                        <div className="text-sm text-blue-200">Happy Customers</div>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                                        <div className="text-2xl font-bold">4.8</div>
                                        <div className="text-sm text-blue-200">Rating</div>
                                    </div>
                                </div>
                                <button className="bg-white text-blue-600 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600">
                                    Download Our App
                                </button>
                            </div>
                            <div className="lg:w-1/3 flex justify-center">
                                <div className="relative">
                                    <div className="w-64 h-64 bg-linear-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center backdrop-blur-sm" aria-hidden="true">
                                        <Package className="w-32 h-32 opacity-80" />
                                    </div>
                                    <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-gray-900 font-bold px-6 py-2 rounded-full shadow-lg">
                                        ⚡ 30 MIN
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" aria-hidden="true"></div>
                    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl" aria-hidden="true"></div>
                </div>
            </section>

        </div>
    )
}

export default DeliveryPromise
