import React from "react";
import { FaMobileAlt, FaArrowRight } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { MdOutlineCameraAlt } from "react-icons/md";
import { BsSmartwatch } from "react-icons/bs";
import { FaHeadphones } from "react-icons/fa6";
import { SiFacebookgaming } from "react-icons/si";

const BrawseByCategry = () => {
  return (
    <div className="w-full h-screen overflow-hidden p-4">
      <div className="w-3 h-6 bg-yellow-500 rounded flex">
        <span className="text-gray-700 ml-3 text-sm font-medium">
          Categories
        </span>
      </div>
      <section className="mb-8">
        <h1 className="text-2xl font-bold mb-4">Browse By Category</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            "Phones",
            "Computers",
            "SmartWatch",
            "Camera",
            "HeadPhones",
            "Gaming",
          ].map((category) => (
            <div
              key={category}
              className="flex flex-col items-center p-6 border rounded-lg hover:shadow-md cursor-pointer transition"
            >
              <div className="md:w-12 md:h-12   w-8 h-8 flex items-center justify-center mb-2">
                {category === "Phones" ? (
                  <FaMobileAlt className="text-5xl text-gray-600" />
                ) : category === "Computers" ? (
                  <RiComputerLine className="text-5xl text-gray-600" />
                ) : category === "SmartWatch" ? (
                  <BsSmartwatch className="text-5xl text-gray-600" />
                ) : category === "Camera" ? (
                  <MdOutlineCameraAlt className="text-5xl text-gray-600" />
                ) : category === "HeadPhones" ? (
                  <FaHeadphones className="text-5xl text-gray-600" />
                ) : category === "Gaming" ? (
                  <SiFacebookgaming className="text-5xl text-gray-600" />
                ) : (
                  <span className="text-gray-600">{category[0]}</span>
                )}
              </div>
              <span className="text-sm font-medium">{category}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black text-white h-1/2 rounded-lg p-6 flex flex-col w-full sm:h-full sm:w-full  lg:flex-row items-center justify-between" >
      <div className="mb-4 w-full sm:h-full sm:w-full  lg:w-3/5  lg:mb-0" >        
          <h3 className="text-4xl lg:text-4xl  lg:mt-2 font-bold mb-2">
            Up to <br /> 10% Off <br /> Voucher
          </h3>
          <div className="flex space-x-2  text-lg mb-4">
            <div>
              <button className="w-20 h-20 rounded-full bg-white text-black shadow-md flex flex-col items-center justify-center font-bold">
                <span>23</span>
                <span>Hours</span>
              </button>
            </div>
            <div className="flex space-x-4 items-center">
              <div className="w-20 h-20 rounded-full bg-white text-black shadow-md flex flex-col items-center justify-center font-bold">
                <span>05</span>
                <span>Days</span>
              </div>

              <div className="w-20 h-20 rounded-full bg-white text-black shadow-md flex flex-col items-center justify-center font-bold">
                <span>59</span>
                <span>Minutes</span>
              </div>

              <div className="w-20 h-20 rounded-full  bg-white text-black shadow-md flex flex-col items-center justify-center font-bold">
                <span>35</span>
                <span>Seconds</span>
              </div>
            </div>
          </div>

          <button className="bg-yellow-500 text-white flex underline decoration-black underline-offset-5 text-left mt-2 px-2  rounded-lg font-medium hover:bg-yellow-400 transition">
            Shop Now{" "}
            <p className="text-white ml-2 mt-2 flex text-center">
              <FaArrowRight />
            </p>
          </button>
        </div>

        <div className="w-16 bg-pink-700 lg:w-2/5  text-right mt-4 lg:mt-0"style={{ backgroundImage: "url('https://media.wired.com/photos/65d8da9ff620a7044c2de43a/2:3/w_1200,h_1800,c_limit/Best-Smart-Speakers-Gear.jpg')"}}>
{/* hear this pink box is not shoving i dont kno why in large device  */}
        </div>
      </section>
    </div>
  );
};

export default BrawseByCategry;
