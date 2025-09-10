import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Truck, Award, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

// Sample products data
const featuredProducts: Product[] = [
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
    reviews: [
      {
        id: '1',
        userId: '1',
        userName: 'Priya Sharma',
        rating: 5,
        comment: 'Absolutely delicious! Tastes just like my grandmother used to make.',
        created_at: '2025-01-01T00:00:00Z',
      },
    ],
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
];

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-800 to-green-600 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Pure Traditional
              <span className="block text-yellow-400">Indian Candy</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Experience the authentic taste of Himalayan sweets, crafted with
              love using centuries-old traditional recipes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="inline-flex items-center px-8 py-3 bg-yellow-600 text-white rounded-lg text-lg font-semibold hover:bg-yellow-700 transition-colors"
              >
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              {/* <Link
                to="/about"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg text-lg font-semibold hover:bg-white hover:text-green-800 transition-colors"
              >
                Learn More
              </Link> */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose HIMRAS?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We bring you the finest traditional Indian sweets with uncompromising quality and authenticity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center p-6"
            >
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-800" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">100% Pure & Natural</h3>
              <p className="text-gray-600">
                Made with organic ingredients sourced directly from the Himalayan region,
                ensuring purity and quality in every bite.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-6"
            >
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Traditional Recipes</h3>
              <p className="text-gray-600">
                Authentic recipes passed down through generations, preserving the
                traditional taste and cultural heritage.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center p-6"
            >
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-blue-800" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                Quick and secure delivery across India, ensuring your sweets
                reach you fresh and in perfect condition.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Products</h2>
            <p className="text-lg text-gray-600">
              Discover our most popular traditional Indian sweets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-3 bg-green-800 text-white rounded-lg text-lg font-semibold hover:bg-green-900 transition-colors"
            >
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Anjali Gupta',
                location: 'Mumbai',
                text: 'The quality is exceptional! These traditional sweets remind me of my childhood.',
                rating: 5,
              },
              {
                name: 'Rajesh Kumar',
                location: 'Delhi',
                text: 'Authentic taste and premium quality. HIMRAS has become our family favorite.',
                rating: 5,
              },
              {
                name: 'Meera Patel',
                location: 'Bangalore',
                text: 'Perfect for festivals and special occasions. The packaging is beautiful too!',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-green-800 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated with HIMRAS
            </h2>
            <p className="text-green-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for exclusive offers, new product launches,
              and traditional recipes from the Himalayas.
            </p>

            {/* FIXED FORM */}
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-yellow-600 text-white rounded-lg font-semibold hover:bg-yellow-700 transition-colors w-full sm:w-auto"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;