import React, { useCallback, useState } from 'react'
import { Home,Receipt,ShoppingCart, Package } from 'lucide-react';
const NAV_ITEMS = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'orders', label: 'Orders', icon: Receipt },
  { id: 'cart', label: 'Cart', icon: ShoppingCart },
  { id: 'rent', label: 'Rent', icon: Package }
];

const Footer = () => {
    const [activeTab, setActiveTab] = useState('Home');
     const [cartCount, setCartCount] = useState(3);
     const handleTabChange = useCallback((tabLabel) => {
        setActiveTab(tabLabel);
      }, []);
    return (
        <div>
            <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-2xl" aria-label="Main navigation">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-4 gap-1 p-2">
                        {NAV_ITEMS.map((item) => {
                            const isActive = activeTab === item.label;
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => handleTabChange(item.label)}
                                    className={`flex flex-col items-center justify-center py-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${isActive
                                        ? 'bg-linear-to-b from-blue-600 to-blue-700 text-white shadow-lg'
                                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                                        }`}
                                    aria-label={item.label}
                                    aria-current={isActive ? 'page' : undefined}
                                >
                                    <div className="relative">
                                        <item.icon className="w-6 h-6" aria-hidden="true" />
                                        {item.id === 'cart' && cartCount > 0 && (
                                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                                {cartCount}
                                            </span>
                                        )}
                                    </div>
                                    <span className="text-xs font-semibold mt-1">{item.label}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Footer
