import React from "react";
import { FiTrash2 } from "react-icons/fi";
import { BsPlus, BsDash } from "react-icons/bs";

const AddToCart = () => {
    return (
        <div className="bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 min-h-screen font-sans">
            <div className="max-w-6xl mx-auto p-6">
                <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-10">Your Cart (4 items)</h1>

                {/* Cart Items Section */}
                <div className="bg-white shadow-xl rounded-3xl p-8 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center border-b pb-6 mb-6">
                        <div className="col-span-2">
                            <h2 className="text-2xl font-bold text-gray-900">Pi Pizza Oven</h2>
                            <p className="text-sm text-orange-500 font-medium">Estimated Ship Date: June 6th</p>
                            <p className="text-sm text-gray-600">Fuel Source: Wood Only</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <button className="p-3 bg-gray-200 hover:bg-gray-300 rounded-full shadow-md"><BsDash /></button>
                            <span className="font-semibold text-gray-900 text-lg">1</span>
                            <button className="p-3 bg-gray-200 hover:bg-gray-300 rounded-full shadow-md"><BsPlus /></button>
                        </div>
                        <div className="flex justify-between md:justify-end items-center">
                            <span className="font-bold text-gray-900 text-xl">$469.99</span>
                            <button className="ml-4 text-red-500 hover:text-red-700"><FiTrash2 size={24} /></button>
                        </div>
                    </div>

                    {/* Another Item Example */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center border-b pb-6 mb-6">
                        <div className="col-span-2">
                            <h2 className="text-2xl font-bold text-gray-900">Grill Ultimate Bundle</h2>
                            <p className="text-sm text-gray-600">Add accident protection for $29.99</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <button className="p-3 bg-gray-200 hover:bg-gray-300 rounded-full shadow-md"><BsDash /></button>
                            <span className="font-semibold text-gray-900 text-lg">1</span>
                            <button className="p-3 bg-gray-200 hover:bg-gray-300 rounded-full shadow-md"><BsPlus /></button>
                        </div>
                        <div className="flex justify-between md:justify-end items-center">
                            <span className="font-bold text-gray-900 text-xl">$549.99</span>
                            <button className="ml-4 text-red-500 hover:text-red-700"><FiTrash2 size={24} /></button>
                        </div>
                    </div>
                </div>

                {/* Summary Section */}
                <div className="bg-white shadow-xl rounded-3xl p-8">
                    <div className="flex justify-between mb-6">
                        <span className="text-gray-800 text-lg">Subtotal</span>
                        <span className="font-bold text-gray-900 text-lg">$1,019.98</span>
                    </div>
                    <div className="flex justify-between mb-6">
                        <span className="text-gray-800 text-lg">Sales Tax</span>
                        <span className="font-bold text-gray-900 text-lg">$102.00</span>
                    </div>
                    <div className="flex justify-between border-t pt-6">
                        <span className="text-xl font-extrabold text-gray-900">Grand Total</span>
                        <span className="text-xl font-extrabold text-green-600">$1,121.98</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-4">Congrats, you're eligible for <span className="text-green-600 font-medium">Free Shipping</span>.</p>

                    <div className="mt-8 flex flex-col sm:flex-row justify-between">
                        <button className="w-full sm:w-auto bg-gray-300 text-gray-900 py-3 px-6 rounded-lg hover:bg-gray-400 mb-4 sm:mb-0 font-semibold shadow-md">Continue Shopping</button>
                        <button className="w-full sm:w-auto bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 font-semibold shadow-md">Proceed to Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddToCart;
