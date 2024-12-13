import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="min-h-scree flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-32">
        <div className="w-full max-w-md p-8 space-y-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white">
            Welcome Back!
          </h2>
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            Sign in to your account to continue
          </p>
          <form className="mt-6 space-y-6" action="#">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-2 block w-full px-4 py-2 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="example@example.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="mt-2 block w-full px-4 py-2 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="********"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                />
                <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                  Remember me
                </span>
              </label>
              <a
                href="#"
                className="text-sm text-green-600 hover:underline dark:text-green-500"
              >
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 rounded-lg font-semibold dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-700"
            >
              Sign In
            </button>
            <p className="text-center text-sm text-gray-600 dark:text-gray-400">
              Don’t have an account?{" "}
              <a
                href="#"
                className="text-green-600 hover:underline dark:text-green-500"
              >
                Create one
              </a>
            </p>
          </form>
          <button
            className="block mx-auto text-green-600 hover:underline dark:text-green-500 font-medium"
            onClick={() => navigate("/")}
          >
            Back to Home
          </button>
        </div>
      </section>
    </>
  );
};

export default Login;
