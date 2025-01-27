import React, { useState } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

const FavoriteItems = () => {
  const [favorites, setFavorites] = useState([]);

  const items = [
    { id: 1, name: "Stylish Jacket", price: "$89.99", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Casual Sneakers", price: "$69.99", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Elegant Watch", price: "$199.99", image: "https://via.placeholder.com/150" },
  ];

  const handleFavoriteToggle = (item) => {
    if (favorites.some((fav) => fav.id === item.id)) {
      setFavorites(favorites.filter((fav) => fav.id !== item.id));
    } else {
      setFavorites([...favorites, item]);
    }
  };

  return (
    <div className="bg-gradient-to-br from-pink-50 to-purple-100 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">Favorite Items</h1>

        {favorites.length === 0 ? (
          <p className="text-center text-lg text-gray-600">No favorite items yet. Add some by clicking the heart icon!</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {favorites.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-32 h-32 object-cover mb-4 rounded-md"
                />
                <h2 className="text-lg font-semibold text-gray-700 mb-2">{item.name}</h2>
                <p className="text-md font-medium text-indigo-600 mb-4">{item.price}</p>
                <button
                  onClick={() => handleFavoriteToggle(item)}
                  className="text-red-500 hover:text-red-600 text-2xl">
                  <MdFavorite />
                </button>
              </div>
            ))}
          </div>
        )}

        <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4">All Items</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-32 h-32 object-cover mb-4 rounded-md"
              />
              <h2 className="text-lg font-semibold text-gray-700 mb-2">{item.name}</h2>
              <p className="text-md font-medium text-indigo-600 mb-4">{item.price}</p>
              <button
                onClick={() => handleFavoriteToggle(item)}
                className="text-gray-500 hover:text-red-500 text-2xl">
                {favorites.some((fav) => fav.id === item.id) ? <MdFavorite /> : <MdFavoriteBorder />}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavoriteItems;
