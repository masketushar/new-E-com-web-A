import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center bg-gradient-to-tr from-pink-300 via-yellow-300 to-white min-h-screen bg-cover bg-center py-4 px-2">
      <div
        className=" text-black p-4 rounded-lg rounded-7xl lg:w-auto  shadow-md"
        style={{
          backgroundImage:
            "url(https://clickdimensions.com/wp-content/uploads/2024/06/CD2411-menu-thumb_contact-us.png)",
        }}
      >
        <h4 className="text-xl font-semibold flex items-center">
          📞 Talk to us
        </h4>
        <p className="mt-4">Call us toll-free</p>
        <p>9:00 AM to 9:00 PM</p>
        <p className="mt-4">
          International Customer Call:
          <a href="tel:+18298737332" className="underline ml-1">
            +18298737332
          </a>
        </p>
      </div>

      <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md lg:w-1/3 mt-8 lg:mt-0 lg:ml-8">
        <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Contact Us
        </h3>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Type your name here"
              className="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Type your email here"
              className="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700">Mobile No</label>
            <input
              type="number"
              placeholder="Type your mobile number here"
              className="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700">Your Query</label>
            <textarea
              placeholder=""
              className="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-blue-500 h-12"
            ></textarea>
          </div>

          <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold p-2 rounded transition">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;


{/* <div className="flex-1 max-w-2xl mr-8">
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
      </div> */}