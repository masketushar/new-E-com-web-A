import React, { useState, useEffect, useCallback, useMemo } from "react";
import Cookies from "js-cookie";
import axios from "axios";

const MyProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  const [imageLoaded, setImageLoaded] = useState(false);

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

    const startTime = performance.now(); // Measure API call time

    try {
      const { data } = await axios.get(api, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const endTime = performance.now();
      console.log(`API Response Time: ${(endTime - startTime).toFixed(2)} ms`);

      setUser(data);
      setPreviewImage(data.profilePicture || "https://via.placeholder.com/150");
    } catch {
      setError("Failed to fetch user data");
    } finally {
      setLoading(false);
    }
  }, [hostId, token, api]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const userFields = useMemo(() => ["name", "email", "phoneNumber"], []);

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center h-screen space-y-4">
        <div className="animate-pulse bg-gray-300 h-12 w-12 rounded-full"></div>
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
        <form className="space-y-6">
          <section className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
              Profile Picture
            </h2>
            <img className=" w-32 h-32 rounded-full bg-cover border-4 border-indigo-100 mx-auto "
 style={{  backgroundImage: "url(https://cdn-icons-png.flaticon.com/512/149/149071.png)",}}
              onLoad={() => setImageLoaded(true)} />
          </section>

          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
              Basic Information
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {userFields.map((field) => (
                <div key={field}>
                  <label className="block text-gray-700 capitalize">
                    {field.replace("phoneNumber", "Phone Number")}
                  </label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={user[field] || ""}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-lg"
                  />
                </div>
              ))}
            </div>
          </section>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
