import React from "react";
import { MdFavoriteBorder } from "react-icons/md";

const products = [
  {
    name: "The makeup kit",
    price: 999,
    originalPrice: 1999,
    rating: 4,
    reviews: 105,
    image:
      "https://ik.imagekit.io/lw5o8hsaiw/E-commerce/Data-Tushar/3rd%20Best%20Selling%20Products/makeup--pageC-1st-product-pic-one.avif?updatedAt=1737444135557",
  },
  {
    name: "Baby spa facewash",
    price: 499,
    originalPrice: 899,
    rating: 3,
    reviews: 79,
    image:
      "https://ik.imagekit.io/lw5o8hsaiw/E-commerce/Data-Tushar/3rd%20Best%20Selling%20Products/face%20wash-pageC-2nd-product-pic-two.avif?updatedAt=1737444136492",
  },
  {
    name: "Glasses",
    price: 2999,
    originalPrice: 3500,
    rating: 3,
    reviews: 35,
    image:
      "https://ik.imagekit.io/lw5o8hsaiw/E-commerce/Data-Tushar/3rd%20Best%20Selling%20Products/glasses-pageC-3rd-product-pic-three.avif?updatedAt=1737444136494",
  },
  {
    name: "Lip MAXIMIZER",
    price: 599,
    originalPrice: 1399,
    rating: 5,
    reviews: 122,
    image:
      "https://ik.imagekit.io/lw5o8hsaiw/E-commerce/Data-Tushar/3rd%20Best%20Selling%20Products/perfume-pageC-4th-product-pic-forth.avif?updatedAt=1737444143824",
  },
];

const BestSellingProdct = () => {
  return (
    <div className="py-8 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <div className="w-3 h-6 bg-yellow-500 rounded  flex">
              <span className="text-gray-700 ml-3 text-sm w-4 font-medium">
                ThisMonth
              </span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900">
              Best Selling Products
            </h1>
          </div>
          <button className="bg-yellow-500 text-white py-2 px-6 rounded hover:bg-yellow-600">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-4 relative"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {product.name}
              </h3>
              <div className="flex items-center mb-2">
                <span className="text-red-500 text-xl font-bold mr-2">
                  {product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-gray-500 line-through">
                    {product.originalPrice}
                  </span>
                )}
              </div>
              <div className="flex items-center text-yellow-500 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill={i < product.rating ? "currentColor" : "none"}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.177c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.368-2.448a1 1 0 00-1.176 0l-3.368 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.957 9.394c-.783-.57-.38-1.81.588-1.81h4.177a1 1 0 00.95-.69l1.286-3.966z"
                    />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                ({product.reviews} reviews)
              </p>
              <div className="absolute top-4 right-4 flex flex-col space-y-2">
                <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                  <MdFavoriteBorder className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSellingProdct;
