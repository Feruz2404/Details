import React from "react";

const ContactUs = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mb-12">
          We’d love to hear from you! Fill out the form below and we’ll get back
          to you as soon as possible.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-gray-800">
              Get in Touch
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Have questions, feedback, or just want to say hello? Reach out to
              us through the form or contact us directly.
            </p>
            <div className="space-y-4">
              <p>
                <strong>Email:</strong> support@candleaf.com
              </p>
              <p>
                <strong>Phone:</strong> +998 (99) 190-84-51
              </p>
              <p>
                <strong>Address:</strong> 123 Eco Street, Green City, GA 30301
              </p>
            </div>
          </div>

          <form className="bg-white p-6 rounded-lg shadow-lg space-y-4">
            <div>
              <label className="block text-gray-600 mb-1" htmlFor="name">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-1" htmlFor="email">
                Your Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-1" htmlFor="message">
                Your Message
              </label>
              <textarea
                id="message"
                rows="5"
                placeholder="Write your message"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
