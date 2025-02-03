import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";

const MyProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [previewImage, setPreviewImage] = useState("");

  const hostId = Cookies.get("user");
  const token = Cookies.get("token");
  const api = `https://e-commerce-kq4s.onrender.com/user/ ${hostId}`;

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await axios.get(api, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(data);
        setPreviewImage(data.profilePicture);
      } catch {
        setError("Failed to fetch user data");
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [hostId, token]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
      setUser((prevUser) => ({ ...prevUser, profilePicture: imageUrl }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(api, user, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Profile updated successfully!");
    } catch {
      setError("Failed to update profile");
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
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
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">User Profile</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <section className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Profile Picture</h2>
            <img
              src={previewImage || "https://via.placeholder.com/150"}
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-indigo-100 mx-auto"
            />
            <input type="file" onChange={handleProfilePictureChange} className="mt-4 p-2 border w-full max-w-xs mx-auto" />
          </section>

          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Basic Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {["name", "email", "phoneNumber"].map((field) => (
                <div key={field}>
                  <label className="block text-gray-700 capitalize">{field.replace("phoneNumber", "Phone Number")}</label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={user[field] || ""}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-lg"/>
                </div>
              ))}
            </div>
          </section>

          <div className="text-center">
            <button type="submit" className="bg-indigo-500 text-white py-3 px-8 rounded-lg hover:bg-indigo-600">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
