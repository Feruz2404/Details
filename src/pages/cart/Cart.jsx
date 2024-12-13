import React, { useEffect } from "react";
import { useStateValue } from "../../context";
import Empty from "../../components/empty/Empty";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, setCart } = useStateValue();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleIncrement = (product) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === product.id ? { ...item, amount: item.amount + 1 } : item
      )
    );
  };

  const handleDecrement = (product) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === product.id && item.amount > 1
          ? { ...item, amount: item.amount - 1 }
          : item
      )
    );
  };

  const handleDelete = (product) => {
    setCart((prev) => prev.filter((item) => item.id !== product.id));
  };

  const totalPrice = cart?.reduce(
    (sum, item) => sum + item.price * item.amount,
    0
  );

  return (
    <section className="min-h-[80vh] py-8 bg-gray-50">
      <div className="container mx-auto">
        {cart.length ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md"
                >
                  <img
                    src={item.images[2] || item.images[1] || item.images[0]}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-green-600 font-medium">
                      ${(item.price * item.amount).toFixed(2)}
                    </p>
                    <button
                      onClick={() => handleDelete(item)}
                      className="text-red-500 text-sm hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleDecrement(item)}
                      disabled={item.amount <= 1}
                      className="px-3 py-1 bg-gray-200 text-gray-600 rounded hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="px-3 py-1 bg-gray-100 rounded">
                      {item.amount}
                    </span>
                    <button
                      onClick={() => handleIncrement(item)}
                      className="px-3 py-1 bg-gray-200 text-gray-600 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center sticky top-20">
              <h2 className="text-xl font-semibold text-gray-800">
                Your Order
              </h2>
              <p className="text-lg font-medium mt-4">
                Total:{" "}
                <span className="text-green-600">${totalPrice.toFixed(2)}</span>
              </p>
              <button
                onClick={() => navigate("/checkout")}
                className="mt-6 w-full py-2 bg-green-600 text-white rounded-md shadow hover:bg-green-700 transition"
              >
                Checkout
              </button>
            </div>
          </div>
        ) : (
          <Empty
            title="Your cart is currently empty"
            url="https://uzum.uz/static/img/shopocat.490a4a1.png"
          />
        )}
      </div>
    </section>
  );
};

export default Cart;
