import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";
import log from "../Assets/logo1.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="text-black shadow-md  top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between py-3 px-6">
        <Link to="/home" className="flex items-center space-x-2">
          <img src={log} alt="" className="h-10 w-22" />
        </Link>

        <div className="hidden lg:flex items-center space-x-8">
          <Link
            to="/"
            className="text-black hover:text-yellow-300 font-medium transition"
          >
            Home
          </Link>
          <Link
            to="/contact"
            className="text-black hover:text-yellow-300 font-medium transition"
          >
            Contact
          </Link>
          <Link
            to="/about"
            className="text-black hover:text-yellow-300 font-medium transition"
          >
            About
          </Link>
          <Link
            to="/signup"
            className="text-black hover:text-yellow-300 font-medium transition"
          >
            Sign Up
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <form className="hidden lg:flex items-center space-x-2 border rounded-md px-2 bg-white">
            <input
              type="text"
              placeholder="Search here..."
              className="px-4 py-1 text-sm text-gray-700 focus:outline-none"
            />
            <button
              type="submit"
              className="text-gray-600 hover:text-green-500 transition"
            >
              <FiSearch className="h-5 w-5" />
            </button>
          </form>

          <button className="text-black hover:text-yellow-300 transition relative">
            <FiHeart className="h-5 w-5" />
          </button>

          <button className="text-black hover:text-yellow-300 transition relative">
            <FiShoppingCart className="h-5 w-5" />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </button>

          <button className="text-black hover:text-yellow-300 transition">
            <FiUser className="h-5 w-5" />
          </button>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden block text-black focus:outline-none focus:ring-2 focus:ring-gray-400"
          aria-label="Toggle navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </nav>
      {isMenuOpen && (
        <div className="lg:hidden bg-teal-600 text-black py-4">
          <div className="flex flex-col items-center space-y-4">
            <Link
              to="/"
              className="text-black hover:text-yellow-300 font-medium transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/contact"
              className="text-black hover:text-yellow-300 font-medium transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/about"
              className="text-black hover:text-yellow-300 font-medium transition"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/signup"
              className="text-black hover:text-yellow-300 font-medium transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
