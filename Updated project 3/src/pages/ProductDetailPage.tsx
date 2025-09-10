import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, Heart, ShoppingCart, Plus, Minus, Shield, Truck, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';

// This would typically come from an API call based on the product ID
const getProductById = (id: string) => {
  const product = {
    id: '1',
    name: 'Traditional Thekua',
    description: 'Authentic crispy wheat cookies sweetened with jaggery, made using traditional Himalayan recipes passed down through generations. Each piece is carefully crafted to preserve the authentic taste and texture that has made this sweet a beloved treat across India.',
    price: 299,
    originalPrice: 349,
    category: 'Traditional Sweets',
    images: [
      'https://images.pexels.com/photos/1395235/pexels-photo-1395235.jpeg',
      'https://images.pexels.com/photos/1395235/pexels-photo-1395235.jpeg',
      'https://images.pexels.com/photos/1395235/pexels-photo-1395235.jpeg',
    ],
    stock: 25,
    weight: '500g',
    ingredients: ['Whole Wheat Flour', 'Jaggery', 'Pure Ghee', 'Fennel Seeds', 'Cardamom'],
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
        comment: 'Absolutely delicious! Tastes just like my grandmother used to make. The quality is exceptional and the packaging is beautiful.',
        created_at: '2025-01-01T00:00:00Z',
      },
      {
        id: '2',
        userId: '2',
        userName: 'Rajesh Kumar',
        rating: 5,
        comment: 'Perfect for gifting during festivals. Everyone loved these traditional sweets.',
        created_at: '2025-01-02T00:00:00Z',
      },
    ],
    rating: 4.8,
    isOrganic: true,
    created_at: '2025-01-01T00:00:00Z',
  };
  return product;
};

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = getProductById(id || '1');

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`${quantity} x ${product.name} added to cart!`);
  };

  const handleAddToWishlist = () => {
    toast.success(`${product.name} added to wishlist!`);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm mb-8">
          <Link to="/" className="text-gray-500 hover:text-green-800">Home</Link>
          <span className="text-gray-400">/</span>
          <Link to="/products" className="text-gray-500 hover:text-green-800">Products</Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-800">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-4"
            >
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg shadow-md"
              />
            </motion.div>
            
            <div className="flex space-x-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-green-800' : 'border-gray-200'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">
                  {product.rating} ({product.reviews.length} reviews)
                </span>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-green-800">₹{product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">
                    ₹{product.originalPrice}
                  </span>
                )}
                {product.originalPrice && (
                  <span className="bg-yellow-600 text-white px-2 py-1 rounded text-sm font-semibold">
                    SAVE ₹{product.originalPrice - product.price}
                  </span>
                )}
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>

              {/* Product Details */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Weight</h3>
                  <p className="text-gray-600">{product.weight}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Stock</h3>
                  <p className={`font-semibold ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {product.stock > 0 ? `${product.stock} available` : 'Out of stock'}
                  </p>
                </div>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-100 transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="p-2 hover:bg-gray-100 transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                  className="flex-1 flex items-center justify-center space-x-2 bg-green-800 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-900 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>Add to Cart</span>
                </button>

                <button
                  onClick={handleAddToWishlist}
                  className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Heart className="h-5 w-5 text-gray-600" />
                </button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <p className="text-xs text-gray-600">100% Pure</p>
                </div>
                <div className="text-center">
                  <Truck className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-xs text-gray-600">Fast Delivery</p>
                </div>
                <div className="text-center">
                  <Award className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                  <p className="text-xs text-gray-600">Premium Quality</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="border-b border-gray-200">
              <nav className="flex">
                <button className="px-6 py-4 text-green-800 border-b-2 border-green-800 font-semibold">
                  Ingredients
                </button>
                <button className="px-6 py-4 text-gray-600 hover:text-gray-800 transition-colors">
                  Nutrition Facts
                </button>
                <button className="px-6 py-4 text-gray-600 hover:text-gray-800 transition-colors">
                  Reviews ({product.reviews.length})
                </button>
              </nav>
            </div>
            
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Ingredients</h3>
              <div className="flex flex-wrap gap-2">
                {product.ingredients.map((ingredient, index) => (
                  <span
                    key={index}
                    className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                  >
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;