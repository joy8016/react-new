import React, { useCallback, useMemo, useState } from 'react'
import { Heart, Star, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';
const PRODUCTS = [
    { id: 1, name: 'Casual Shirt', price: 799, discount: 30, image: '👔', category: 'Men', rating: 4.2 },
    { id: 2, name: 'Denim Jacket', price: 1999, discount: 40, image: '🧥', category: 'Men', rating: 4.5 },
    { id: 3, name: 'Floral Dress', price: 1299, discount: 25, image: '👗', category: 'Women', rating: 4.3 },
    { id: 4, name: 'Palazzo Pants', price: 899, discount: 35, image: '👖', category: 'Women', rating: 4.0 },
    { id: 5, name: 'Sneakers', price: 1599, discount: 20, image: '👟', category: 'Footwear', rating: 4.7 },
    { id: 6, name: 'Handbag', price: 1199, discount: 45, image: '👜', category: 'Accessories', rating: 4.4 },
    { id: 7, name: 'Sunglasses', price: 599, discount: 30, image: '🕶️', category: 'Accessories', rating: 4.6 },
    { id: 8, name: 'Watch', price: 2499, discount: 15, image: '⌚', category: 'Accessories', rating: 4.8 }
];
const ProductCard = React.memo(({ product, onAddToCart, onFavorite }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const discountedPrice = useMemo(() =>
        Math.round(product.price - (product.price * product.discount / 100)),
        [product.price, product.discount]
    );

    const savings = useMemo(() =>
        product.price - discountedPrice,
        [product.price, discountedPrice]
    );

    const handleFavoriteClick = useCallback(() => {
        const newFavoriteState = !isFavorite;
        setIsFavorite(newFavoriteState);
        onFavorite?.(product.id, newFavoriteState);
    }, [isFavorite, onFavorite, product.id]);

    const handleAddToCart = useCallback(() => {
        onAddToCart(product);
    }, [onAddToCart, product]);

    return (
        <article
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Favorite Button */}
            <button
                onClick={handleFavoriteClick}
                className="absolute top-3 right-3 z-10 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            >
                <Heart
                    className={`w-5 h-5 transition-colors ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
                />
            </button>

            {/* Discount Badge */}
            {product.discount > 0 && (
                <div className="absolute top-3 left-3 z-10">
                    <span className="bg-linear-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        {product.discount}% OFF
                    </span>
                </div>
            )}

            {/* Product Image */}
            <div className="relative overflow-hidden bg-linear-to-br from-blue-50 to-indigo-100 p-8 flex items-center justify-center aspect-square">
                <div
                    className={`text-6xl transition-transform duration-500 ${isHovered ? 'scale-110 rotate-3' : ''}`}
                    role="img"
                    aria-label={product.name}
                >
                    {product.image}
                </div>

                {/* Quick View Overlay */}
                <div className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    <button className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-white">
                        Quick View
                    </button>
                </div>
            </div>

            {/* Product Info */}
            <div className="p-5">
                <div className="mb-3">
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                        {product.category}
                    </span>
                </div>

                <h3 className="font-bold text-gray-800 mb-2 line-clamp-1 text-lg">{product.name}</h3>

                {/* Rating */}
                <div className="flex items-center mb-3">
                    <div className="flex" role="img" aria-label={`Rated ${product.rating} out of 5 stars`}>
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                            />
                        ))}
                    </div>
                    <span className="text-xs text-gray-500 ml-2">({product.rating})</span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <p className="text-2xl font-bold text-gray-900">₹{discountedPrice.toLocaleString()}</p>
                        <p className="text-sm text-gray-500 line-through">₹{product.price.toLocaleString()}</p>
                    </div>
                    {savings > 0 && (
                        <div className="text-xs text-green-600 font-semibold bg-green-50 px-2 py-1 rounded">
                            Save ₹{savings.toLocaleString()}
                        </div>
                    )}
                </div>

                {/* Add to Cart Button */}
                <button
                    onClick={handleAddToCart}
                    className="w-full bg-linear-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center group/btn focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    aria-label={`Add ${product.name} to cart`}
                >
                    <ShoppingCart className="w-5 h-5 mr-2 group-hover/btn:scale-110 transition-transform" aria-hidden="true" />
                    Add to Cart
                </button>
            </div>
        </article>
    );
});

ProductCard.displayName = 'ProductCard';

const TrendingProducts = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
      const [favorites, setFavorites] = useState(new Set());
    
    // Memoized filtered products
    const filteredProducts = useMemo(() => {
        let products = activeCategory === 'All'
            ? PRODUCTS
            : PRODUCTS.filter(product => product.category.toLowerCase() === activeCategory.toLowerCase());

        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            products = products.filter(product =>
                product.name.toLowerCase().includes(query) ||
                product.category.toLowerCase().includes(query)
            );
        }

        return products;
    }, [activeCategory, searchQuery]);

    // Handlers with useCallback for optimization
    const handleAddToCart = useCallback((product) => {
        setCartCount(prev => prev + 1);
        // TODO: Add actual cart logic here
        console.log('Added to cart:', product);
    }, []);

    const handleFavorite = useCallback((productId, isFavorite) => {
        setFavorites(prev => {
            const newSet = new Set(prev);
            if (isFavorite) {
                newSet.add(productId);
            } else {
                newSet.delete(productId);
            }
            return newSet;
        });
    }, []);
    return (
        <div>
            <section className="mb-10" aria-labelledby="trending-heading">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h2 id="trending-heading" className="text-2xl font-bold text-gray-800">Trending Now</h2>
                        <p className="text-gray-600">Most loved products this week</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button
                            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            aria-label="Previous products"
                        >
                            <ChevronLeft className="w-5 h-5 text-gray-600" />
                        </button>
                        <button
                            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            aria-label="Next products"
                        >
                            <ChevronRight className="w-5 h-5 text-gray-600" />
                        </button>
                    </div>
                </div>

                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {filteredProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                onAddToCart={handleAddToCart}
                                onFavorite={handleFavorite}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">No products found matching your search.</p>
                    </div>
                )}
            </section>

        </div>
    )
}

export default TrendingProducts
