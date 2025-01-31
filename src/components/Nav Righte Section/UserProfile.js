import React from "react";
import Cookies from "js-cookie";
import { useState } from "react";

const UserProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [dateOfBirth, setdateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [address, setaddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pincode, setpincode] = useState("");
  const [profilePicture, setProfilePicture] = useState("");

  const hostId = Cookies.get("user");
  const token = Cookies.get("token");

  const fetchProfile = async () => {
    const api = `https://e-commerce-kq4s.onrender.com/user${hostId}`;

    const Profile = {
      name: name,
      email: email,
      password: password,
      phoneNumber: phoneNumber,
      dateOfBirth: dateOfBirth,
      gender: gender,
      address: address,
      city: city,
      state: state,
      country: country,
      pincode: pincode,
      profilePicture: profilePicture,
    };

    const UserProfile = {
      method: "PUT",
      body: JSON.stringify(Profile),

      headers: { Authorization: `Bearer ${token}` },
    };
    const response = await fetch(api, UserProfile);
    const data = await response.json();
    console.log("User Profile:", data);
  };
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 font-sans min-h-screen">
      <div className="max-w-4xl mx-auto p-6 lg:p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          User Profile
        </h1>
        <form className="space-y-6" onChange={fetchProfile}>
          {/* Basic Information Section */}
          <section className="mb-8 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
              Basic Information
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="username" className="block text-gray-700 mb-1">
                  Username
                </label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  id="username"
                  placeholder="Enter your username"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-1">
                  Email Address
                </label>
                <input onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-gray-700 mb-1">
                  Password 
                </label>
                <input onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-1">
                  Phone Number
                </label>
                <input onChange={(e) => setphoneNumber(e.target.value)}
                  type="tel"
                  id="phone"
                  placeholder="Enter your phone number"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
          </section>

          {/* Personal Details Section */}
          <section className="mb-8 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
              Personal Details
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="dob" className="block text-gray-700 mb-1">
                  Date of Birth
                </label>
                <input onChange={(e) => setdateOfBirth(e.target.value)}
                  type="date"
                  id="dob"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="gender" className="block text-gray-700 mb-1">
                  Gender
                </label>
                <select onChange={(e) => setGender(e.target.value)}
                  id="gender"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="profile-picture"
                  className="block text-gray-700 mb-1"
                >
                  Profile Picture
                </label>
                <input onChange={(e) => setProfilePicture(e.target.value)}
                  type="file"
                  id="profile-picture"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
          </section>

          {/* Address Section */}
          <section className="mb-8 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
              Address
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="sm:col-span-2">
                <label htmlFor="address" className="block text-gray-700 mb-1">
                  Permanent Address
                </label>
                <input  onChange={(e) => setaddress(e.target.value)}
                  type="text"
                  id="address"
                  placeholder="Enter your address"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="city" className="block text-gray-700 mb-1">
                  City
                </label>
                <input onChange={(e) => setCity(e.target.value)}
                  type="text"
                  id="city"
                  placeholder="Enter your city"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="state" className="block text-gray-700 mb-1">
                  State
                </label>
                <input onChange={(e) => setState(e.target.value)}
                  type="text"
                  id="state"
                  placeholder="Enter your state"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="country" className="block text-gray-700 mb-1">
                  Country
                </label>
                <input onChange={(e) => setCountry(e.target.value)}
                  type="text"
                  id="country"
                  placeholder="Enter your country"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="zip" className="block text-gray-700 mb-1">
                  ZIP/Postal Code
                </label>
                <input onChange={(e) => setpincode(e.target.value)}
                  type="text"
                  id="zip"
                  placeholder="Enter your ZIP/Postal Code"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
          </section>

          <div className="text-center">
            <button
              type="submit"
              className="bg-indigo-500 text-white py-3 px-8 rounded-lg hover:bg-indigo-600 transition shadow-lg"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
