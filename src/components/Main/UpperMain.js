import React from "react";

function UpperMain() {
  return (
    <div className="flex items-center w-full px-0">
      <div className="lg:max-h-[550px] md:max-h-[500px] sm:max-h-[450px] max-h-[400px] w-full shadow-xl overflow-hidden relative">
        {/* Overlay */}
        <div className=" sm:pt-6 rounded-xl absolute w-full h-full max-h-[500px] bg-black/40 justify-center text-white flex flex-col gap-1">
          <h1 className="px-2 pt-2 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
            The <span className="text-orange-500 font-serif">Best</span>
          </h1>
          <h3 className="px-2 pt-2 space-x-3 font-sans font-semibold text-3xl">
            <span className="text-4xl font-bold text-orange-500 mr-3">
              Food
            </span>{" "}
            Can Be Made
          </h3>
          <h5 className="px-2 pt-2 font-bold text-3xl">
            With <span className="text-orange-500">Ease....</span>
          </h5>
        </div>
        <img
          className="rounded-xl w-full max-h-[500px] object-cover"
          alt="/"
          src="https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </div>
    </div>
  );
}

export default UpperMain;
