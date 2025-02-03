import React from "react";

const About = () => {
  return (
    <div className="flex flex-wrap justify-between items-center p-10 bg-gray-500 rounded-lg shadow-lg mx-5 my-10">
      {/* Content Section */}
      <div className="flex-1 max-w-2xl mr-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          "Welcome to our e-commerce store! 🎉 We're here to bring you
          top-quality products at unbeatable prices, all with exceptional
          service. "
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
        Whether you're after the latest trends or timeless classics,
          we’ve got you covered! Shop with confidence – we’re excited to serve
          you!
        </p>
      </div>

      {/* Image Section */}
      {/* <div className="flex-1 max-w-lg mt-8 md:mt-0">
        <img
          src={aboutImage}
          alt="About Us"
          className="w-full rounded-lg shadow-md"
        />
      </div> */}
    </div>
  );
};

export default About;
