import React from "react";

const UserProfile = () => {
    return (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 font-sans min-h-screen">
            <div className="max-w-4xl mx-auto p-6 lg:p-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">User Profile</h1>

                {/* Basic Information Section */}
                <section className="mb-8 bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Basic Information</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="username" className="block text-gray-700 mb-1">Username</label>
                            <input
                                type="text"
                                id="username"
                                placeholder="Enter your username"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-700 mb-1">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-gray-700 mb-1">Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter your password"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-gray-700 mb-1">Phone Number</label>
                            <input
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
                    <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Personal Details</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="dob" className="block text-gray-700 mb-1">Date of Birth</label>
                            <input
                                type="date"
                                id="dob"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="gender" className="block text-gray-700 mb-1">Gender</label>
                            <select
                                id="gender"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="profile-picture" className="block text-gray-700 mb-1">Profile Picture</label>
                            <input
                                type="file"
                                id="profile-picture"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                    </div>
                </section>

                {/* Address Section */}
                <section className="mb-8 bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Address</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="sm:col-span-2">
                            <label htmlFor="address" className="block text-gray-700 mb-1">Permanent Address</label>
                            <input
                                type="text"
                                id="address"
                                placeholder="Enter your address"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="city" className="block text-gray-700 mb-1">City</label>
                            <input
                                type="text"
                                id="city"
                                placeholder="Enter your city"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="state" className="block text-gray-700 mb-1">State</label>
                            <input
                                type="text"
                                id="state"
                                placeholder="Enter your state"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="country" className="block text-gray-700 mb-1">Country</label>
                            <input
                                type="text"
                                id="country"
                                placeholder="Enter your country"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="zip" className="block text-gray-700 mb-1">ZIP/Postal Code</label>
                            <input
                                type="text"
                                id="zip"
                                placeholder="Enter your ZIP/Postal Code"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                    </div>
                </section>

                <div className="text-center">
                    <button className="bg-indigo-500 text-white py-3 px-8 rounded-lg hover:bg-indigo-600 transition shadow-lg">
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
