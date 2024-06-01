import React from "react";
import ProtutLogo from "../../assets/protutImage/logo.png";
import frontCardOne from "../../assets/frontImage/Frontcard1.png";
import frontCardTwo from "../../assets/frontImage/Frontcard2.png";
import frontCardThree from "../../assets/frontImage/Frontcard3.png";
import frontCardFour from "../../assets/frontImage/Frontcard4.png";
const DashboardLanding = () => {
  return (
    <div className="lg:h-[70vh] w-full flex flex-row max-md:mt-20">
      <div className="left w-[45em] lg:w-1/2  flex flex-col justify-center items-center lg:block  lg:mt-32 lg:ml-36 xl:ml-56 ">
        <p className="lg:text-4xl max-md:text-2xl text-center lg:text-left font-bvp font-bold max-w-[25rem]  mb-4 ">
          Turn ideas into reality
        </p>
        <p className="lg:text-4xl max-md:text-2xl text-center lg:text-left font-bvp font-bold  mb-4 max-w-[25rem]">
          instantly.
        </p>
        <p className=" lg:text-4xl max-md:text-2xl mb-4 font-bvp font-bold flex max-w-[25rem]">
          Welcome to <img src={ProtutLogo} alt="protut" className="w-40 h-10 max-md:w-36 max-md:h-8 max-md:-mt-1" />
        </p>
        <div className="mt-12 flex gap-3 max-md:justify-center max-md:flex-col">
          <button className=" bg-black hover:bg-gray-700 text-white font-bvp font-semibold p-4 rounded-full">
            Continue as a Provider
          </button>
          <button className=" bg-black hover:bg-gray-700 text-white font-bvp font-semibold p-4 rounded-full">
            Continue as a Learner
          </button>
        </div>
      </div>
      <div className="right max-md:hidden w-1/2 lg:flex lg:flex-row lg:gap-8">
        <div className="flex flex-col max-h-44 max-w-60 mt-16 space-y-6">
          <img src={frontCardOne} />
          <img src={frontCardThree} />
        </div>
        <div className="flex flex-col max-h-44 max-w-60 mt-28 space-y-6">
          <img src={frontCardTwo} />
          <img src={frontCardFour} className="max-lg:hidden"/>

        </div>
      </div>
    </div>
  );
};

export default DashboardLanding;
