import React, { useCallback, useState } from 'react'
import { Menu,Bell,Search,Clock,User, ChevronRight,MapPin,Filter } from 'lucide-react'
import AddressSearch from './address&search/AddressSearch';
import Catagories from './catagories/Catagories';


const Header = () => {
    const [searchQuery, setSearchQuery] = useState('');
    //  const [activeCategory, setActiveCategory] = useState('All');
    //   const handleSearchChange = useCallback((e) => {
    //     setSearchQuery(e.target.value);
    //   }, []);
      
    return (
        <div className='sticky top-0 z-20'>
            <header className="bg-linear-to-r from-blue-600 to-blue-700 shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Top Bar */}
                    <div className="flex items-center justify-between py-3">
                        <div className="flex items-center space-x-4">
                            <button
                                className="lg:hidden text-white focus:outline-none focus:ring-2 focus:ring-white rounded"
                                aria-label="Open menu"
                            >
                                <Menu className="w-6 h-6" />
                            </button>
                            <div className="flex items-center space-x-2">
                                <div className="bg-white text-blue-600 font-extrabold text-xl px-4 py-2 rounded-xl shadow-md">
                                    SHOPFAST
                                </div>
                                <div className="hidden md:block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-3 py-1 rounded-full">
                                    <Clock className="w-4 h-4 inline mr-1" aria-hidden="true" />
                                    30 min delivery
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <button className="hidden md:flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-white/30 transition-colors focus:outline-none focus:ring-2 focus:ring-white">
                                <Bell className="w-5 h-5" aria-hidden="true" />
                                <span className="text-sm font-semibold">Notifications</span>
                            </button>
                            <button className="flex items-center space-x-2 bg-white text-blue-600 font-semibold px-4 py-2 rounded-full hover:bg-blue-50 transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-white">
                                <User className="w-5 h-5" aria-hidden="true" />
                                <span>John Doe</span>
                                <ChevronRight className="w-4 h-4" aria-hidden="true" />
                            </button>
                        </div>
                    </div>

                    {/* Address & Search */}
                   <AddressSearch/>

                    {/* Categories */}
                 

                    <Catagories/>
                </div>
            </header>

        </div>
    )
}

export default Header
