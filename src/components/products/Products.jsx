import React from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IoCartOutline, IoCartSharp } from "react-icons/io5";
import { useStateValue } from "../../context";
import { useNavigate } from "react-router-dom";

const Products = ({ data }) => {
  const { setWishlist, wishlist, setCount, setCart, cart } = useStateValue();
  const navigate = useNavigate();

  const handleLike = (product) => {
    const exists = wishlist.some((item) => item.id === product.id);
    setWishlist((prev) =>
      exists
        ? prev.filter((item) => item.id !== product.id)
        : [...prev, product]
    );
    setCount((prev) => (exists ? prev - 1 : prev + 1));
  };

  const handleAddToCart = (product) => {
    const exists = cart.some((item) => item.id === product.id);
    setCart((prev) =>
      exists
        ? prev.filter((item) => item.id !== product.id)
        : [...prev, { ...product, amount: 1 }]
    );
  };

  return (
    <div id="products-section" className="container mx-auto my-12 font-poppins">
      <h2 className="text-4xl font-bold text-gray-800 text-center mb-4">
        Our Products
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Explore and choose your favorites!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
          >
            <div className="relative h-48 grid place-items-center">
              <img
                onClick={() => navigate(`/product/${product.id}`)}
                src={
                  product.images[2] || product.images[1] || product.images[0]
                }
                alt={product.title}
                className="w-48 h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute top-2 right-2 flex gap-2">
                <button
                  onClick={() => handleLike(product)}
                  className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition"
                >
                  {wishlist.some((item) => item.id === product.id) ? (
                    <FaHeart className="text-red-500" />
                  ) : (
                    <FaRegHeart className="text-gray-500" />
                  )}
                </button>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition"
                >
                  {cart.some((item) => item.id === product.id) ? (
                    <IoCartSharp className="text-green-500" />
                  ) : (
                    <IoCartOutline className="text-gray-500" />
                  )}
                </button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 truncate hover:text-green-600">
                {product.title}
              </h3>
              <p className="text-xl text-green-500 font-bold mt-2">
                ${product.price} USD
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
