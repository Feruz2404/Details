import React, { useRef } from "react";
import { useStateValue } from "../../context";
import { Navigate } from "react-router-dom";

const CheckOut = () => {
  const { cart, setCart } = useStateValue();
  const fname = useRef(null);
  const lname = useRef(null);
  const address = useRef(null);

  if (!cart.length) {
    return <Navigate replace to={"/"} />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setCart([]);
    fname.current.value = "";
    lname.current.value = "";
    address.current.value = "";
    alert("Your order has been placed successfully! 🚀");
  };

  const totalPrice = cart?.reduce(
    (sum, item) => sum + item.price * item.amount,
    0
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 via-white to-blue-50">
      <div className="bg-white shadow-2xl rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Complete Your Order 🛒
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="fname"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              First Name
            </label>
            <input
              ref={fname}
              id="fname"
              type="text"
              required
              placeholder="John"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label
              htmlFor="lname"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Last Name
            </label>
            <input
              ref={lname}
              id="lname"
              type="text"
              required
              placeholder="Doe"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Address
            </label>
            <input
              ref={address}
              id="address"
              type="text"
              required
              placeholder="123 Greenway Blvd"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="bg-gray-50 p-4 rounded-lg shadow-md">
            <p className="text-lg text-gray-700 font-semibold">
              Total:{" "}
              <span className="text-blue-600 text-xl font-bold">
                ${totalPrice.toFixed(2)}
              </span>
            </p>
          </div>

          <button
            type="submit"
            className="w-full py-3 text-lg font-semibold text-white bg-gradient-to-r from-green-400 to-blue-500 rounded-lg shadow-md hover:from-green-500 hover:to-blue-600 transition-transform transform hover:scale-105"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
