import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-gray-800 dark:text-white mb-4">
          404
        </h1>
        <p className="text-lg font-light text-gray-600 dark:text-gray-400 mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg shadow focus:outline-none focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800 transition-all"
        >
          Back to Home
        </button>
      </div>
    </section>
  );
};

export default NotFound;
