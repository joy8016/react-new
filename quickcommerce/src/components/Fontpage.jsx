import React, { useState, useCallback, useMemo } from 'react';
import {
  Search, ShoppingCart, User, Clock, MapPin, Tag,
  Home, Package, Receipt, ChevronRight, ChevronLeft,
  Star, Heart, Filter, Menu, Bell,
  Shield, Truck, Award
} from 'lucide-react';
import Header from './header/Header';

// ============================================================================
// COMPONENT: OfferCard
// ============================================================================
const OfferCard = React.memo(({ offer }) => (
  <article className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg p-6 border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mb-4" aria-hidden="true">
        <Tag className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-2">
        {offer.title}
      </h3>
      <p className="text-gray-600 mb-4">{offer.subtitle}</p>
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-dashed border-blue-200 rounded-xl px-4 py-3 mb-4">
        <p className="text-sm text-gray-500 mb-1">Use Code</p>
        <p className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-mono">
          {offer.code}
        </p>
      </div>
      <div className="flex items-center justify-center text-sm text-gray-500 mb-4">
        <Clock className="w-4 h-4 mr-1" aria-hidden="true" />
        <span>{offer.validity}</span>
      </div>
      <button
        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        aria-label={`Apply offer code ${offer.code}`}
      >
        Apply Now
      </button>
    </div>
  </article>
));

OfferCard.displayName = 'OfferCard';

// ============================================================================
// COMPONENT: ProductCard
// ============================================================================
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
          <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            {product.discount}% OFF
          </span>
        </div>
      )}

      {/* Product Image */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 p-8 flex items-center justify-center aspect-square">
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
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center group/btn focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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

// ============================================================================
// COMPONENT: FeatureCard
// ============================================================================
const FeatureCard = React.memo(({ icon: Icon, title, description }) => (
  <article className="bg-linear-to-br from-white to-blue-50 rounded-2xl p-6 border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:-translate-y-1">
    <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl mb-4" aria-hidden="true">
      <Icon className="w-7 h-7 text-white" />
    </div>
    <h4 className="font-bold text-gray-800 text-lg mb-2">{title}</h4>
    <p className="text-gray-600 text-sm">{description}</p>
  </article>
));

FeatureCard.displayName = 'FeatureCard';

// ============================================================================
// CONSTANTS & DATA
// ============================================================================
const CATEGORIES = [
  { id: 'all', name: 'All', icon: '🔥' },
  { id: 'men', name: 'Men', icon: '👔' },
  { id: 'women', name: 'Women', icon: '👗' },
  { id: 'fashion', name: 'Fashion', icon: '👟' },
  { id: 'accessories', name: 'Accessories', icon: '🕶️' },
  { id: 'footwear', name: 'Footwear', icon: '👠' }
];

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

const FEATURES = [
  { icon: Truck, title: '30-Min Delivery', description: 'Lightning fast delivery guaranteed' },
  { icon: Shield, title: 'Secure Payment', description: '100% secure & encrypted payments' },
  { icon: Award, title: 'Best Quality', description: 'Premium products from top brands' },
  { icon: Clock, title: '24/7 Support', description: 'Round the clock customer service' }
];

const NAV_ITEMS = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'orders', label: 'Orders', icon: Receipt },
  { id: 'cart', label: 'Cart', icon: ShoppingCart },
  { id: 'rent', label: 'Rent', icon: Package }
];

// ============================================================================
// MAIN COMPONENT: DeliveryApp
// ============================================================================
export default function DeliveryApp() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeTab, setActiveTab] = useState('Home');
  const [cartCount, setCartCount] = useState(3);
  const [favorites, setFavorites] = useState(new Set());
  const [searchQuery, setSearchQuery] = useState('');

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

  const handleTabChange = useCallback((tabLabel) => {
    setActiveTab(tabLabel);
  }, []);

  const handleCategoryChange = useCallback((categoryName) => {
    setActiveCategory(categoryName);
  }, []);

  const handleSearchChange = useCallback((e) => {
    setSearchQuery(e.target.value);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pb-20">
      {/* ====================================================================
          HEADER
          ==================================================================== */}
     <Header/>

      {/* ====================================================================
          MAIN CONTENT
          ==================================================================== */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Hero Banner */}
        <section className="mb-8" aria-labelledby="hero-heading">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
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
              <div className="absolute inset-0 bg-gradient-to-l from-blue-500 to-transparent"></div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="mb-10" aria-labelledby="features-heading">
          <h2 id="features-heading" className="text-2xl font-bold text-gray-800 mb-6">Why Choose Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </section>

        {/* Offers Section */}
        <section className="mb-10" aria-labelledby="offers-heading">
          <div className="flex items-center justify-between mb-6">
            <h2 id="offers-heading" className="text-2xl font-bold text-gray-800">Exclusive Offers</h2>
            <button className="text-blue-600 font-semibold flex items-center hover:text-blue-700 focus:outline-none focus:underline">
              View All <ChevronRight className="w-5 h-5 ml-1" aria-hidden="true" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {OFFERS.map((offer) => (
              <OfferCard key={offer.id} offer={offer} />
            ))}
          </div>
        </section>

        {/* Trending Products */}
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

        {/* Delivery Promise */}
        <section className="mb-10" aria-labelledby="delivery-heading">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
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
                    <div className="w-64 h-64 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center backdrop-blur-sm" aria-hidden="true">
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
      </main>

      {/* ====================================================================
          BOTTOM NAVIGATION
          ==================================================================== */}
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
                      ? 'bg-gradient-to-b from-blue-600 to-blue-700 text-white shadow-lg'
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
  );
}
