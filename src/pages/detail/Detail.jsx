import axios from "../../api";
import React, { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useStateValue } from "../../context";
import { IoCartOutline, IoCartSharp } from "react-icons/io5";

const Detail = () => {
  const { setWishlist, wishlist, setCart, cart } = useStateValue();
  const [data, setData] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`/product/${id}`);
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleLike = (product) => {
    const exists = wishlist.some((item) => item.id === product.id);
    if (exists) {
      setWishlist((prev) => prev.filter((item) => item.id !== product.id));
    } else {
      setWishlist((prev) => [...prev, product]);
    }
  };

  const handleAddToCart = (product) => {
    const exists = cart.some((item) => item.id === product.id);
    setCart((prev) =>
      exists
        ? prev.filter((item) => item.id !== product.id)
        : [...prev, { ...product, amount: 1 }]
    );
  };

  if (loading) {
    return (
      <div className="text-center min-h-52 py-24">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-24">
        <p>{error.message || "Something went wrong!"}</p>
      </div>
    );
  }

  return (
    <div className="container min-h-[80vh] py-5 grid grid-cols-2 gap-8">
      <div>
        <div>
          <img
            src={data?.images[index]}
            alt={data?.title || "Product Image"}
            className="w-[558px] h-[558px] object-contain"
          />
        </div>
        <div className="flex gap-2 mt-4">
          {data?.images?.map((url, inx) => (
            <img
              onClick={() => setIndex(inx)}
              className={`w-24 h-24 cursor-pointer object-contain rounded border-2 transition ${
                index === inx
                  ? "opacity-100 border-emerald-400"
                  : "opacity-60 border-gray-300"
              }`}
              src={url}
              key={inx}
              alt={`Thumbnail ${inx + 1}`}
            />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-semibold mb-4">{data?.title}</h2>
        <p className="text-gray-600 mb-6">{data?.description}</p>
        <button
          onClick={() => handleLike(data)}
          className="flex items-center gap-2 px-6 my-5 py-3 bg-gradient-to-r from-green-300 to-emerald-400 text-white font-medium rounded-lg shadow-lg transition-all duration-300 hover:brightness-90"
          aria-label="Toggle Wishlist"
        >
          {wishlist?.some((item) => item.id === data?.id) ? (
            <FaHeart className="text-red-500" />
          ) : (
            <FaRegHeart />
          )}
          <span className="text-sm font-medium">
            {wishlist?.some((item) => item.id === data?.id)
              ? "Remove from Wishlist"
              : "Add to Wishlist"}
          </span>
        </button>
        <button
          onClick={() => handleAddToCart(data)}
          className="flex items-center gap-2 px-6 my-5 py-3 bg-blue-500 text-white font-medium rounded-lg shadow-lg transition-all duration-300 hover:brightness-90"
          aria-label="Toggle Cart"
        >
          {cart.some((item) => item.id === data?.id) ? (
            <IoCartSharp className="w-[18px] h-[18px] text-amber-500" />
          ) : (
            <IoCartOutline className="w-[18px] h-[18px]" />
          )}
          <span className="text-sm font-medium">
            {cart?.some((item) => item.id === data?.id)
              ? "Already in the Cart"
              : "Add to Cart"}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Detail;
