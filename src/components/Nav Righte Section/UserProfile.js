import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    phoneNumber: "",
    dateOfBirth: "",
    gender: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    profilePicture: "",
  });

  const hostId = Cookies.get("user");
  const token = Cookies.get("token");

  useEffect(() => {
    const fetchUserData = async () => {
      if (!hostId) return;
      try {
        const response = await fetch(
          `https://e-commerce-kq4s.onrender.com/user/${hostId}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, [hostId, token]);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSave = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `https://e-commerce-kq4s.onrender.com/user/update/${hostId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(userData),
        }
      );
      console.log(response);
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        alert("Profile updated successfully!");
        navigate("/my-profile");
        console.log(response)
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 font-sans min-h-screen">
      <div className="max-w-4xl mx-auto p-6 lg:p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          User Profile
        </h1>
        <section className="bg-white p-6 rounded-lg shadow-lg text-center mb-8">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
            Profile Picture
          </h2>
          <img
            className="w-32 h-32 rounded-full bg-cover border-4 border-indigo-100 mx-auto"
            style={{
              backgroundImage:
                "url(https://cdn-icons-png.flaticon.com/512/149/149071.png)",
            }}
            alt=""
          />
        </section>
        <form className="space-y-6" onSubmit={handleSave}>
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
              Basic Information
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-1">Username</label>
                <input
                  name="name"
                  value={userData.name}
                  onChange={handleChange}
                  type="text"
                  className="w-full p-3 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Phone Number</label>
                <input
                  name="phoneNumber"
                  value={userData.phoneNumber}
                  onChange={handleChange}
                  type="tel"
                  className="w-full p-3 border rounded-lg"
                />
              </div>
            </div>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
              Personal Details
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-1">
                  Date of Birth
                </label>
                <input
                  name="dateOfBirth"
                  value={userData.dateOfBirth}
                  onChange={handleChange}
                  type="date"
                  className="w-full p-3 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Gender</label>
                <select
                  name="gender"
                  value={userData.gender}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Address</label>
                <input
                  name="address"
                  value={userData.address}
                  onChange={handleChange}
                  type="text"
                  className="w-full p-3 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">State</label>
                <input
                  name="state"
                  value={userData.state}
                  onChange={handleChange}
                  type="text"
                  className="w-full p-3 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Country</label>
                <input
                  name="country"
                  value={userData.country}
                  onChange={handleChange}
                  type="text"
                  className="w-full p-3 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Pincode</label>
                <input
                  name="pincode"
                  value={userData.pincode}
                  onChange={handleChange}
                  type="text"
                  className="w-full p-3 border rounded-lg"
                />
              </div>
            </div>
          </section>

          <div className="text-center">
            <Link
              to="/Myprofile"
              className="bg-indigo-500 text-white py-3 px-8 rounded-lg hover:bg-indigo-600 transition shadow-lg"
            >
              {" "}
              Save chenges{" "}
            </Link>{" "}
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
