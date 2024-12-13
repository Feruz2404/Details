import React from "react";

const Discovery = () => {
  const collections = [
    {
      id: 1,
      title: "Eco-Friendly Candles",
      description: "Sustainable, natural, and handmade candles for your home.",
      image:
        "https://citizensustainable.com/wp-content/uploads/2019/04/eco-friendly-candle-natural-non-toxic-safe-wax.jpg",
    },
    {
      id: 2,
      title: "Aromatherapy Collection",
      description: "Relax and unwind with soothing scents and calming aromas.",
      image:
        "https://koala.eco/cdn/shop/files/RoomPillow-GiftBox-Green-Resized-web.jpg?v=1731525609",
    },
    {
      id: 3,
      title: "Seasonal Favorites",
      description: "Celebrate every season with our exclusive candle designs.",
      image:
        "https://i.pinimg.com/736x/8f/98/08/8f980807f520978f34b5c7c276ac60e3.jpg",
    },
  ];

  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        Discover Our Collections
      </h1>
      <p className="text-center text-gray-600 mb-12">
        Explore a variety of handmade, eco-friendly, and beautifully designed
        candles for every mood and occasion.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {collections.map((collection) => (
          <div
            key={collection.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <img
              src={collection.image}
              alt={collection.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {collection.title}
              </h3>
              <p className="text-gray-600 mb-4">{collection.description}</p>
              <button className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
                View More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discovery;
