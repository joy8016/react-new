import React, { useCallback, useState } from 'react'
import { MapPin,Search,Filter } from 'lucide-react'

const AddressSearch = () => {
      const [searchQuery, setSearchQuery] = useState('');
        const handleSearchChange = useCallback((e) => {
              setSearchQuery(e.target.value);
            }, []);
    return (
        <div>
            <div className="pb-4">
                <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-4 space-y-3 lg:space-y-0">
                    {/* Address */}
                    <div className="flex-1">
                        <div className="bg-white rounded-xl px-4 py-3 shadow-sm flex items-center">
                            <MapPin className="w-5 h-5 text-blue-600 mr-3 shrink-0" aria-hidden="true" />
                            <div className="flex-1 min-w-0">
                                <p className="text-sm text-gray-500">Delivering to</p>
                                <p className="font-semibold text-gray-800 truncate">Your Local Market, City Center</p>
                            </div>
                            <button className="text-blue-600 font-semibold text-sm hover:text-blue-700 shrink-0 focus:outline-none focus:underline">
                                Change
                            </button>
                        </div>
                    </div>

                    {/* Search */}
                    <div className="flex-1">
                        <form className="relative" onSubmit={(e) => e.preventDefault()}>
                            <label htmlFor="search" className="sr-only">Search for brands, products, categories</label>
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" aria-hidden="true" />
                            <input
                                id="search"
                                type="text"
                                value={searchQuery}
                                onChange={handleSearchChange}
                                placeholder="Search for brands, products, categories..."
                                className="w-full bg-white rounded-xl pl-12 pr-12 py-3 shadow-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                                aria-label="Filter products"
                            >
                                <Filter className="w-5 h-5 text-blue-600" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddressSearch
