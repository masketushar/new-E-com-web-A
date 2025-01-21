import React from 'react';
import bot from "../../Assets/bote.webp";
import { FaMobileAlt } from "react-icons/fa";


const PageD = () => {
  return (
    <div className="w-full p-4">
      <div className="w-3 h-6 bg-yellow-500 rounded  flex">
  <span className='text-gray-700 ml-3 text-sm font-medium' >Categories</span></div>
      <section className="mb-8">
        <h1 className="text-2xl font-bold mb-4">Browse By Category</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {['Phones', 'Computers', 'SmartWatch', 'Camera', 'HeadPhones', 'Gaming'].map((category) => (
            <div
              key={category}
              className="flex flex-col items-center p-4 border rounded-lg hover:shadow-md cursor-pointer transition"
            >
              {}
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-2">
                <span className="text-gray-600">{  }</span>
              </div>
              <span className="text-sm font-medium">{category}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="relative bg-black text-white h-1/2 rounded-lg p-6 flex flex-col lg:flex-row items-center justify-between">
        <div className="mb-4 lg:mb-0">
          <h3 className="text-3xl font-bold mb-2">Up to 10% off Voucher</h3>
          <div className="flex space-x-2 text-lg">
            <div>
              <span className="font-bold">23</span> Hours
            </div>
            <div>
              <span className="font-bold">05</span> Days
            </div>
            <div>
              <span className="font-bold">59</span> Minutes
            </div>
            <div>
              <span className="font-bold">35</span> Seconds
            </div>
          </div>
        </div>
        <button className="bg-yellow-500 text-black px-6 py-2 rounded-lg font-medium hover:bg-yellow-400 transition">
          Shop Now
        </button>
        <div className="absolute right-4 bottom-4 w-20 h-20 lg:w-40 lg:h-40">
    
          <img
            src= ""
            alt="Speaker"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default PageD;
