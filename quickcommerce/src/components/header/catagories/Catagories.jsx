import React, { useCallback, useState } from 'react'
const CATEGORIES = [
    { id: 'all', name: 'All', icon: '🔥' },
    { id: 'men', name: 'Men', icon: '👔' },
    { id: 'women', name: 'Women', icon: '👗' },
    { id: 'fashion', name: 'Fashion', icon: '👟' },
    { id: 'accessories', name: 'Accessories', icon: '🕶️' },
    { id: 'footwear', name: 'Footwear', icon: '👠' }
];

const Catagories = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const handleCategoryChange = useCallback((categoryName) => {
        setActiveCategory(categoryName);
    }, []);

    return (
        <div>
            <nav className="pb-4 overflow-x-auto" aria-label="Product categories">
                <div className="flex space-x-2">
                    {CATEGORIES.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => handleCategoryChange(category.name)}
                            className={`flex items-center px-4 py-2 rounded-full font-semibold whitespace-nowrap transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white ${activeCategory === category.name
                                ? 'bg-white text-blue-600 shadow-lg transform scale-105'
                                : 'bg-white/20 text-white hover:bg-white/30'
                                }`}
                            aria-pressed={activeCategory === category.name}
                        >
                            <span className="mr-2" aria-hidden="true">{category.icon}</span>
                            {category.name}
                        </button>
                    ))}
                </div>
            </nav>

        </div>
    )
}

export default Catagories
