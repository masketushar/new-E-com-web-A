import React from "react";

const About = () => {
  return (
    <div className="relative flex items-center justify-center h-screen w-full bg-cover bg-center px-4 text-white"
      style={{ backgroundImage: "url('https://t4.ftcdn.net/jpg/02/69/53/07/360_F_269530796_71KTLQB8qBadfS0Pm214BzJgW7zwYDwV.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto p-6 text-center md:text-left">
        <div className="w-full md:w-11/12 bg-black bg-opacity-50 p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-extrabold text-yellow-300 mb-4">About Us</h1>

          <h1 className="text-6xl font-extrabold text-red-500 mb-4 animate-pulse">Sale 20% Off</h1>
          <h2 className="text-4xl font-bold text-yellow-200 mb-4">On Everything</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-200 leading-relaxed mb-4">
              "Welcome to our e-commerce store! 🎉 We're here to bring you
              top-quality products at unbeatable prices, all with exceptional
              service. "
            </p>
            <p className="text-lg text-gray-200 leading-relaxed">
              Whether you're after the latest trends or timeless classics, we’ve
              got you covered! Shop with confidence – we’re excited to serve you!
            </p>
          </div>
          <button className="mt-6 bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 font-bold rounded-lg shadow-lg hover:scale-110 transform transition-all duration-300">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
