import React, { useState, useEffect, useCallback } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { Link } from "react-router-dom";

const MyProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const hostId = Cookies.get("user");
  const token = Cookies.get("token");
  const api = `https://e-commerce-kq4s.onrender.com/user/${hostId}`;

  /** Fetch user profile details **/
  const fetchProfile = useCallback(async () => {
    if (!hostId) {
      setError("User ID not found. Please log in again.");
      setLoading(false);
      return;
    }

    try {
      const { data } = await axios.get(api, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setUser(data);
    } catch {
      setError("Failed to fetch user data");
    } finally {
      setLoading(false);
    }
  }, [hostId, token, api]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center h-screen space-y-4">
        <p className="text-gray-600">Loading profile...</p>
      </div>
    );

  if (error)
    return (
      <div className="text-center py-8">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg max-w-md mx-auto">
          {error}
        </div>
      </div>
    );

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen py-8">
      <div className="max-w-4xl mx-auto p-6 lg:p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          My Profile
        </h1>
        <section className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
            Profile Picture
          </h2>
          <img className=" w-32 h-32 rounded-full bg-cover border-4 border-indigo-100 mx-auto "
 style={{  backgroundImage: "url(https://cdn-icons-png.flaticon.com/512/149/149071.png)",}}
  alt="" 
             />
          </section>

        <section className="bg-white p-6 rounded-lg shadow-lg mt-6">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
            Basic Information
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700">Username</label>
              <p className="p-3 border rounded-lg">{user.name}</p>
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <p className="p-3 border rounded-lg">{user.email}</p>
            </div>
            <div>
              <label className="block text-gray-700">Phone Number</label>
              <p className="p-3 border rounded-lg">{user.phoneNumber}</p>
            </div>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-lg mt-6">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
            Personal Details
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700">Date of Birth</label>
              <p className="p-3 border rounded-lg">{user.dateOfBirth}</p>
            </div>
            <div>
              <label className="block text-gray-700">Gender</label>
              <p className="p-3 border rounded-lg">{user.gender}</p>
            </div>
            <div>
              <label className="block text-gray-700">State</label>
              <p className="p-3 border rounded-lg">{user.state}</p>
            </div>
            <div>
              <label className="block text-gray-700">Country</label>
              <p className="p-3 border rounded-lg">{user.country}</p>
            </div>
            <div>
              <label className="block text-gray-700">Pincode</label>
              <p className="p-3 border rounded-lg">{user.pincode}</p>
            </div>
          </div>
        </section>

        <div className="text-center mt-6">
        
           <Link to="/UserProfile" className="bg-indigo-500 text-white py-3 px-8 rounded-lg hover:bg-indigo-600 transition shadow-lg"
           > Edit Profile </Link>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
