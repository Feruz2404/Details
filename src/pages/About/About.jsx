import React from "react";

const About = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          About Us
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Learn more about our journey, our values, and what makes us unique.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-80 lg:h-96 overflow-hidden rounded-lg shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1506459225024-1428097a7e18?auto=format&fit=crop&w=800&q=60"
              alt="About Us"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-gray-800">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              At Candleaf, our mission is to provide eco-friendly and handmade
              candles that bring warmth, relaxation, and sustainability to your
              home. Each candle is crafted with care, using natural soy wax and
              high-quality ingredients.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe in creating products that not only look beautiful but
              also have a positive impact on the environment. Join us on our
              journey to light up your life in the most natural way possible.
            </p>
            <button className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
