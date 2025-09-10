import React, { useState, useMemo } from 'react';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

// Extended sample products data
const allProducts: Product[] = [
  {
    id: '1',
    name: 'Traditional Thekua',
    description: 'Authentic crispy wheat cookies sweetened with jaggery, made using traditional Himalayan recipes.',
    price: 299,
    originalPrice: 349,
    category: 'Traditional Sweets',
    images: ['https://images.pexels.com/photos/1395235/pexels-photo-1395235.jpeg'],
    stock: 25,
    weight: '500g',
    ingredients: ['Whole Wheat Flour', 'Jaggery', 'Ghee', 'Fennel Seeds'],
    nutritionalInfo: {
      calories: 120,
      protein: 3,
      carbs: 22,
      fat: 4,
      fiber: 2,
      sugar: 8,
    },
    reviews: [],
    rating: 4.8,
    isOrganic: true,
    created_at: '2025-01-01T00:00:00Z',
  },
  {
    id: '2',
    name: 'Jaggery Thekua',
    description: 'Premium organic jaggery-based sweet treats, rich in minerals and natural goodness.',
    price: 399,
    originalPrice: 449,
    category: 'Organic Sweets',
    images: ['https://images.pexels.com/photos/1395235/pexels-photo-1395235.jpeg'],
    stock: 18,
    weight: '750g',
    ingredients: ['Organic Wheat Flour', 'Organic Jaggery', 'Pure Ghee', 'Cardamom'],
    nutritionalInfo: {
      calories: 135,
      protein: 3.5,
      carbs: 25,
      fat: 4.5,
      fiber: 2.5,
      sugar: 12,
    },
    reviews: [],
    rating: 4.9,
    isOrganic: true,
    created_at: '2025-01-01T00:00:00Z',
  },
  {
    id: '3',
    name: 'Himalayan Combo Pack',
    description: 'Perfect gift set containing our best traditional sweets from the Himalayan region.',
    price: 799,
    originalPrice: 999,
    category: 'Combo Packs',
    images: ['https://images.pexels.com/photos/1395235/pexels-photo-1395235.jpeg'],
    stock: 12,
    weight: '1.5kg',
    ingredients: ['Mixed Traditional Sweets', 'Organic Ingredients', 'Pure Ghee'],
    nutritionalInfo: {
      calories: 125,
      protein: 3.2,
      carbs: 23,
      fat: 4.2,
      fiber: 2.2,
      sugar: 10,
    },
    reviews: [],
    rating: 4.7,
    isOrganic: true,
    created_at: '2025-01-01T00:00:00Z',
  },
  {
    id: '4',
    name: 'Organic Sesame Laddoo',
    description: 'Nutritious sesame seed balls made with pure jaggery and traditional spices.',
    price: 449,
    category: 'Organic Sweets',
    images: ['https://images.pexels.com/photos/1395235/pexels-photo-1395235.jpeg'],
    stock: 20,
    weight: '600g',
    ingredients: ['Sesame Seeds', 'Jaggery', 'Cardamom', 'Ghee'],
    nutritionalInfo: {
      calories: 145,
      protein: 4,
      carbs: 18,
      fat: 6,
      fiber: 3,
      sugar: 9,
    },
    reviews: [],
    rating: 4.6,
    isOrganic: true,
    created_at: '2025-01-01T00:00:00Z',
  },
];

const ProductsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [sortBy, setSortBy] = useState('name');
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['all', ...Array.from(new Set(allProducts.map(p => p.category)))];

  const filteredProducts = useMemo(() => {
    let filtered = allProducts.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      
      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [searchQuery, selectedCategory, priceRange, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Our Traditional Sweets</h1>
          <p className="text-lg text-gray-600">
            Discover authentic Himalayan sweets made with pure, natural ingredients
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="name">Sort by Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">Newest First</option>
            </select>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-4 py-2 bg-green-800 text-white rounded-lg hover:bg-green-900 transition-colors"
            >
              <SlidersHorizontal className="h-4 w-4" />
              <span>Filters</span>
            </button>
          </div>

          {/* Advanced Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-6 pt-6 border-t border-gray-200"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}
                    </label>
                    <div className="flex space-x-4">
                      <input
                        type="range"
                        min="0"
                        max="1000"
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                        className="flex-1"
                      />
                      <input
                        type="range"
                        min="0"
                        max="1000"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                        className="flex-1"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Results */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            Showing {filteredProducts.length} of {allProducts.length} products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setPriceRange([0, 1000]);
              }}
              className="mt-4 px-6 py-2 bg-green-800 text-white rounded-lg hover:bg-green-900 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;