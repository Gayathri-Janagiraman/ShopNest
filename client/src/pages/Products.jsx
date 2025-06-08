import React from 'react';
import { useCart } from '../context/CartContext';

function Products({ products }) {
    const { addToCart } = useCart();

    return (
        <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-14 p-4 mx-2">
                {products.map((product) => {
                    // console.log("Image URL:", product.image);
                    // console.log("Products received:", products);

                    return (
                        <div
                            key={product._id || product.id}
                            className="bg-white rounded-xl shadow-md overflow-hidden transition transform hover:scale-105 md:my-7"
                        >
                            {/* Product Image */}
                            <div className="relative w-full h-32 md:h-48">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-full md:w-full object-cover"
                                    onError={(e) => {
                                        e.target.src = "/fallback.jpg";
                                    }}
                                />
                                 <div className="absolute inset-0 bg-gray-800 bg-opacity-30"></div>
                            </div>

                            {/* Product Details */}
                            <div className="p-3">
                                <h3 className="text-base font-semibold truncate">{product.name}</h3>
                                <p className="text-blue-600 font-medium text-sm mt-1">{product.price}</p>

                                {/* Rating */}
                                <div className="text-yellow-500 text-sm mt-1">
                                    {"★".repeat(product.rating) + "☆".repeat(5 - product.rating)}
                                </div>

                                
                                <p className="text-gray-500 text-xs mt-1 line-clamp-2">
                                    {product.description}
                                </p>

                                
                                <button
                                    onClick={() => addToCart(product)}
                                    className="mt-3 w-full md:w-32 bg-blue-500 text-white text-sm px-4 py-1.5 rounded-full hover:bg-blue-600"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Products;
