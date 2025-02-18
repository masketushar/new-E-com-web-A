import React, { useState } from "react";
import Cookies from "js-cookie";
import useNavigate from "react-router-dom";

const UserProfile = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pincode, setPincode] = useState("");
  const [profilePicture, setProfilePicture] = useState("");

  const hostId = Cookies.get("user");
  const token = Cookies.get("token");

  const fetchProfile = async (event) => {
    event.preventDefault();

    const api = `https://e-commerce-kq4s.onrender.com/user/update/${hostId}`;

    const Profile = {
      name,
      phoneNumber,
      dateOfBirth,
      gender,
      address,
      city,
      state,
      country,
      pincode,
      profilePicture,
    };

    // if (!hostId) {
    // }
    try {
      const response = await fetch(api, {
        method: "PUT",
        body: JSON.stringify(Profile),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to update profile");
      }

      const data = await response.json();
      console.log("User Profile Updated:", data);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Error updating profile. Please try again.");
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 font-sans min-h-screen">
      <div className="max-w-4xl mx-auto p-6 lg:p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          User Profile
        </h1>

        {/* Profile Picture Section */}
        <section className="bg-white p-6 rounded-lg shadow-lg text-center mb-8">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
            Profile Picture
          </h2>
          <img
            className=" w-32 h-32 rounded-full bg-cover border-4 border-indigo-100 mx-auto"
            style={{
              backgroundImage:
                "url(https://cdn-icons-png.flaticon.com/512/149/149071.png)",
            }}
          />
        </section>
        <form className="space-y-6" onSubmit={fetchProfile}>
          <section className="mb-8 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
              Basic Information
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-1">Username</label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Enter your username"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Phone Number</label>
                <input
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
          </section>

          <section className="mb-8 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
              Personal Details
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-1">
                  Date of Birth
                </label>
                <input
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  type="date"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Gender</label>
                <select
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-1">State</label>
                <input
                  onChange={(e) => setState(e.target.value)}
                  type="text"
                  placeholder="Enter your state"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Country</label>
                <input
                  onChange={(e) => setCountry(e.target.value)}
                  type="text"
                  placeholder="Enter your country"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Pincode</label>
                <input
                  onChange={(e) => setPincode(e.target.value)}
                  type="text"
                  placeholder="Enter your pincode"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
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
