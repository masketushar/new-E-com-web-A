import React from "react";

const NewArival = () => {
  return (
    <div className="w-full h-screen overflow-hidden flex flex-wrap bg-white">
      {/* Left Container */}
      <div
        className="w-full md:w-1/2 h-1/2 md:h-full  p-2 bg-cover bg-center relative box-border"
        style={{
          backgroundImage:
            "url('https://wallpapers.com/images/hd/ps5-pictures-ylo5nmaaba2v930z.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute bottom-10 left-5 text-left text-white">
          <h2 className="text-lg md:text-2xl font-bold">Play Station 5</h2>
          <p className="text-sm md:text-base">
            Black and White version of the PS5 <br /> coming out on sale.
          </p>
          <button className="mt-4 underline decoration-black underline-offset-5 text-sm md:text-xl text-white py-2 px-4 rounded">
            Shop Now
          </button>
        </div>
      </div>

      {/* Right Container */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col gap-2 box-border">
        {/* Top Right */}
        <div
          className="w-full h-1/2 bg-cover bg-center relative"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/premium-photo/mysterious-woman-black-hat-dress-posing-against-dark-background_14117-578142.jpg')",
          }}
        >
          <div className="absolute md:bottom-10   left-5 text-left">
            <h2 className="text-lg md:text-xl text-white font-bold">
              Women's Collections
            </h2>
            <p className="text-sm md:text-base text-white">
              Featured woman collections <br /> that give you another vibe.
            </p>
            <button className="md:mt-4 underline decoration-black underline-offset-5 text-sm md:text-xl text-white py-2 px-4 rounded">
              Shop Now
            </button>
          </div>
        </div>

        {/* Bottom Right */}
        <div className="w-full h-1/2 flex gap-2">
          {/* Bottom Left */}
          <div
            className="w-1/2 h-full bg-cover bg-center relative"
            style={{
              backgroundImage:
                "url('https://i.guim.co.uk/img/media/f183d9937a705b78a19c48d286edd2031e262242/149_311_5091_3054/master/5091.jpg?width=1200&quality=85&auto=format&fit=max&s=580360e8abac04c989b21e67b0215a29')",
            }}
          >
            <div className="absolute md:bottom-10 left-5 text-left">
              <h2 className="text-sm  md:text-lg text-white font-bold">
                Speakers
              </h2>
              <p className="text-sm text-white">Amazon wireless speakers.</p>
              <button className="md:mt-4  underline decoration-black underline-offset-5 text-sm md:text-lg text-white py-2 px-4 rounded">
                Shop Now
              </button>
            </div>
          </div>

          {/* Bottom Right */}
          <div
            className="w-1/2 h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://amperscent.sg/cdn/shop/files/SC-Gucci_Intense_Oud_EDP_grande.jpg?v=1730281389')",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default NewArival;
