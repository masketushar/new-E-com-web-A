import React from "react";
// import cont from "../../../src/Assets/contact.jpg";

const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center bg-red-300 items-center py-16 px-6">
      <div className="bg-yellow-100 text-black p-8 rounded-lg w-80 lg:w-auto h-100 shadow-md">
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

      <div className="bg-white p-8 shadow-lg rounded-lg w-80 lg:w-96 mt-8 lg:mt-0 lg:ml-8">
        <h3 className="text-2xl font-semibold text-gray-800">Contact Us</h3>
        <form className="mt-6 space-y-4">
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
            <input
              type="text"
              placeholder="e.g. I am interested"
              className="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button className=" bg-green-600 text-white p-1 rounded px-4">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
