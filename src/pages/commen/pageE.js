import React from "react";
import bo1 from "../../Assets/can 1.webp";
import bo2 from "../../Assets/can 2.webp";
import bo3 from "../../Assets/can 3.webp";
import bo4 from "../../Assets/can 4.webp";



const PageE = () => {
  const products = [
    {
      id: 1,
      image: "https://ik.imagekit.io/lw5o8hsaiw/E-commerce/Data-Tushar/4th%20Popular%20This%20Week/can%201-Harmanprit-cour%20Bote-1.webp?updatedAt=1737444147847",
      title: "Unique, high-quality bote bands to elevate your style.",
      price: "999",
      originalPrice: "1299",
    },
    {
      id: 2,
      image: "https://ik.imagekit.io/lw5o8hsaiw/E-commerce/Data-Tushar/4th%20Popular%20This%20Week/can%202%20Hardik-panday%20Bote-2.webp?updatedAt=1737444139860",
      title: "Powerful and stylish Bote Spiker for exceptional sound quality.",
      price: "899",
      originalPrice: "1499",
    },
    {
      id: 3,
      image: "https://ik.imagekit.io/lw5o8hsaiw/E-commerce/Data-Tushar/4th%20Popular%20This%20Week/can%203%20Rashmika-mandana%20Bote-3.webp?updatedAt=1737444147877",
      title: "Smart and stylish Bote Watch to keep you connected on the go.",
      price: "1999",
      originalPrice: "2599",
    },
    {
      id: 4,
      image: "https://ik.imagekit.io/lw5o8hsaiw/E-commerce/Data-Tushar/4th%20Popular%20This%20Week/can%204%20Sreyas%20ayyar%20Bote-4.webp?updatedAt=1737444141167",
      title: "Experience immersive sound with premium Bote Headphones.",
      price: "1599",
      originalPrice: "2599",
    },
  ];

  return (
    <div className="w-full px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-6">Popular This Week</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border rounded-lg shadow-md overflow-hidden flex flex-col items-center p-4 hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full object-cover mb-4"
            />
            <h3 className="text-sm font-medium text-gray-700 text-center mb-2">  {product.title} </h3>
            <div className="text-center mb-2">
              <span className="text-lg font-semibold text-black">
                {product.price}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-400 line-through ml-2">
                  {product.originalPrice}
                </span>
              )}
            </div>
            <button className="mt-auto bg-yellow-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-yellow-400 transition">
               Add in Basket
            </button>
          </div>
        ))}
      </div>
      <div className="mt-6 flex items-center">
      </div>
    </div>
  );
};

export default PageE;
