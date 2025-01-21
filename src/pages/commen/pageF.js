import React from "react";

const PageF = () => {
  return (
    <div className="w-screen h-screen flex p-2  bg-white">
      {/* Left Container */}
      <div
        className="w-1/2 h-full p-2 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://wallpapers.com/images/hd/ps5-pictures-ylo5nmaaba2v930z.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute bottom-10 text-left text-white">
          <h2 className="text-2xl font-bold">Play Station 5</h2>
          <p>
            Black and White version of the PS5 <br></br> coming out on sale.
          </p>
          <button className="mt-4 bg-black-100 underline decoration-black underline-offset-5 text-xl text-white py-2 px-4 rounded">
            Shop Now
          </button>
        </div>
      </div>

      {/* Right Container */}
      <div className="w-1/2 h-full flex flex-col p- ml-2 bg-cover bg-center relative">
        <div
          className="w-full h-1/2 p-2 bg-cover bg-pink-500 bg-center relative"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/premium-photo/mysterious-woman-black-hat-dress-posing-against-dark-background_14117-578142.jpg')",
          }}
        >
          <div className=" absolute text-left bottom-10  px-1">
            <h2 className="text-xl   text-left text-white font-bold">
              Women's Collections
            </h2>
            <p className=" text-white">
              Featured woman collections that give you another vibe.
            </p>
            <button className="mt-4 bg-black-100   underline  text-right decoration-black underline-offset-5 text-xl text-white py-2 px-4 rounded">
              Shop Now
            </button>
          </div>
        </div>
        <div className="w-full h-1/2 p- flex bg-cover bg-white bg-center">
          <div
            className="w-1/2 h-full p-2 mt-1 bg-cover bg-blue-800 bg-center"
            style={{
              backgroundImage:
                " url('https://i.guim.co.uk/img/media/f183d9937a705b78a19c48d286edd2031e262242/149_311_5091_3054/master/5091.jpg?width=1200&quality=85&auto=format&fit=max&s=580360e8abac04c989b21e67b0215a29')",
            }}
          >
            {" "}
            <div className=" absolute  text-left bottom-10  px-1">
              <h2 className="text-xl text-white text-left font-bold">
                Speakers
              </h2>
              <p className="text-white">Amazon wireless speakers.</p>
              <button className="mt-4 bg-black-100 underline text-left decoration-black underline-offset-5 text-xl text-white py-2 px-4 rounded">
                Shop Now
              </button>
            </div>
          </div>
          <div
            className="w-1/2 h-full p-2 mt-1 ml-2 bg-cover bg-red-700 bg-center"
            style={{
              backgroundImage:
                "url('https://amperscent.sg/cdn/shop/files/SC-Gucci_Intense_Oud_EDP_grande.jpg?v=1730281389')",
            }}
          >
            <div className=" absolute  bottom-10 text-center px-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageF;
