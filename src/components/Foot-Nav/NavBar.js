import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";
import axios from "axios";
import log from "../../Assets/logo1.png";
import { useNavigate } from "react-router-dom";
import { HiOutlineLogout } from "react-icons/hi";
import Cookies from "js-cookie";





const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const token = Cookies.get("token");

  function usrProfile() {
    if (token) {
      navigate("/MyProfile");
    } else {
      navigate("/UserProfile");
    }
  }
  const handleLogout = () => {
    Cookies.remove("token");  // Cookies se token delete karo
    localStorage.removeItem("authToken");  // localStorage clear karo
    sessionStorage.clear();  // sessionStorage clear karo
        navigate("/login");  // Login page ya home page par redirect karo
};
  // Fetch Categories
  useEffect(() => {
    axios
      .get("https://e-commerce-kq4s.onrender.com/categories")
      .then((response) => {
        // Check if response.data.categories exists and is an array
        if (response.data && Array.isArray(response.data.categories)) {
          setCategories(response.data.categories);
          console.log("Categories data:", response.data.categories);
        } else {
          console.error(
            "Categories data is not in expected format:",
            response.data
          );
        }
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="text-black shadow-md top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between py-3 px-6">
        {/* Logo */}
        <Link to="/home" className="flex items-center space-x-2">
          <img src={log} alt="Logo" className="h-10 w-22" />
        </Link>

        {/* Desktop Navigation Links */}
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

        {/* Search Bar and Icons */}
        <div className="flex items-center space-x-4">
          {/* Search Bar with Category Dropdown */}
          <form className="hidden lg:flex items-center space-x-2 border rounded-md px-2 bg-white">
            <div className="relative">
              <button
                type="button"
                onClick={toggleDropdown}
                className="px-4 py-1 text-sm text-gray-700 bg-gray-100 rounded-md focus:outline-none"
              >
                {selectedCategory} ▼
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-1 w-40 bg-white border rounded-md shadow-md z-10">
                  <p
                    className="px-4 py-1 text-sm text-gray-700 hover:bg-gray-200 cursor-pointer"
                    onClick={() => {
                      setSelectedCategory("All");
                      setIsDropdownOpen(false);
                    }}
                  >
                    All
                  </p>
                  {categories.length > 0 ? (
                    categories.map((category) => (
                      <p
                        key={category._id}
                        className="px-4 py-1 text-sm text-gray-700 hover:bg-gray-200 cursor-pointer"
                        onClick={() => {
                          setSelectedCategory(category.title);
                          setIsDropdownOpen(false);
                        }}
                      >
                        {category.title}
                      </p>
                    ))
                  ) : (
                    <p className="px-4 py-2 text-sm text-gray-700">
                      No categories available
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Search Input */}
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

          {/* Action Icons */}
          <Link to="/FavoriteItems">
            <button className="text-black hover:text-yellow-300 transition relative">
              <FiHeart className="h-5 w-5" />
            </button>
          </Link>
          <Link to="/AddToCart">
            <button className="text-black hover:text-yellow-300 transition relative">
              <FiShoppingCart className="h-5 w-5" />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </button>
          </Link>
          <button
            onClick={usrProfile}
            className="text-black hover:text-yellow-300 transition relative"
          >
            <FiUser className="h-5 w-5" />
          </button>
          <button
            onClick={handleLogout}
            className="text-black bg-red-600 rounded hover:text-yellow-300 transition relative"
          >
            <HiOutlineLogout className="h-5 w-5" />
          </button>
        </div>

        {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white text-black py-4 shadow-md">
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
            {/* Mobile Search */}
            <div className="w-full px-4">
              <form className="flex items-center space-x-2 border rounded-md px-2 bg-white">
                <input
                  type="text"
                  placeholder="Search here..."
                  className="px-4 py-1 text-sm text-gray-700 focus:outline-none w-full"
                />
                <button
                  type="submit"
                  className="text-gray-600 hover:text-green-500 transition"
                >
                  <FiSearch className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
