import React from "react";
import image1 from "../../Assets/bman2.webp"; 
import image2 from "../../Assets/bman.png";  
import { FaArrowRight } from "react-icons/fa";


const Page = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen bg-white">
     
      <div className="relative w-full lg:w-3/5 flex flex-col justify-center items-center bg-gray-200">
        <img
          src={"https://ik.imagekit.io/lw5o8hsaiw/E-commerce/Data-Tushar/1st%20Renderpage/bman%20C-pageA-left1-black%20man.png?updatedAt=1737444143945"}
          alt="cloth pic"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start px-6 lg:px-12 text-white">
          <h1 className="text-3xl lg:text-7xl font-bold">SHODWE <br></br>  E-MAGZ</h1>
          <p className="text-lg lg:text-2xl mt-4">
            Find inspirations to styling  <br /> dress and upgrade your outfite
          </p>
          <button className="bg-white text-black py-3 px-6 mt-6 text-lg font-semibold rounded">
            Read Now
          </button>
        </div>
      </div>

      <div className="w-full lg:w-2/5 flex flex-col items-center justify-center">
        <div className="w-full h-3/5">
          <img
            src={"https://ik.imagekit.io/lw5o8hsaiw/E-commerce/Data-Tushar/1st%20Renderpage/bman2%20C-pageA-right-group-off-people.webp?updatedAt=1737444136205"}
            alt="people"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-2/5 flex flex-row bg-blue-200 ">
           <div className="w-2/5  flex   justify-center items-center text-7xl text-center 
            bg-black ">  <p className="text-white flex text-center"><FaArrowRight /></p>
           </div> 
           <div className="w-3/5  bg-yellow-300  text-black text-4xl font-bold py-4 text-center cursor-pointer">
            <h1>READ</h1>
            <h1>MAGZ</h1>   </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
