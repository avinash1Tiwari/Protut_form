import React, { useEffect, useState } from "react";
import frontVideo from "../../assets/featuresVideo/FeatureVideo.mp4";
import { FiArrowRight } from "react-icons/fi";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
const FeatureSection = () => {
  const activeItem = ["one", "two", "three", "four"];
  const [activeLabel, setActiveLabel] = useState("one");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => {
        return (prevIndex + 1) % activeItem.length;
      });
    }, 3000);
    setActiveLabel(activeItem[index]);

    return () => {
      clearInterval(timer);
    };
  }, [index]);

  const handleLeftButton = ()=>{
    setIndex((prevIndex) => {
      if(prevIndex===0){
        return activeItem.length-1;
      }
      return (prevIndex - 1) % activeItem.length;
    });
  }

  const handleRightButton = ()=>{
    setIndex((prevIndex) => {
      return (prevIndex + 1) % activeItem.length;
    });
  }
  return (
    <div className="w-full lg:flex lg:flex-col lg:justify-center bg-white mb-20">
      <div className="text-center m-auto">
        <h1 className="text-3xl font-extrabold p-4">
          What we <span className="text-purple-800">Offer</span>
        </h1>
        <p className="text-xl font-extrabold">
          Explore endless Possibilities with our Services!
        </p>
      </div>
      <div className="mt-4 m-auto ">
        <div className="flex justify-between relative sm:align-middle">
          <button onClick={handleLeftButton} className="border p-2 rounded-full w-10 h-10 absolute bottom-1 left-[15%] z-30 lg:hidden sm:hidden">
            <FaAngleLeft />
          </button>
          <div className="flex justify-evenly max-sm:justify-center mt-20 w-full">
            <button
              className={`p-3 rounded-xl relative after:content-[''] transition-all duration-300 ${activeLabel === "one" ? "bg-black text-white after:block after:h-[2px] after:bottom-0 after:w-4/5 after:bg-white after:absolute after:origin-left after:transition-transform after:duration-[3s] after:ease-linear after:scale-x-100 " : "bg-[#d8d8f4] text-black after:scale-x-0 max-sm:hidden"}`}
              onClick={() => {
                setIndex(0);
                setActiveLabel("one");
              }}
            >
              <span className="font-semibold ">Project Teaching</span>
            </button>
            <button
              className={`p-3 rounded-xl relative after:content-[''] transition-all duration-300 ${activeLabel === "two" ? "bg-black text-white after:block after:h-[2px] after:bottom-0 after:w-4/5 after:bg-white after:absolute after:origin-left after:transition-transform after:duration-[3s] after:ease-linear after:scale-x-100 " : "bg-[#d8d8f4] text-black after:scale-x-0 max-sm:hidden"}`}
              onClick={() => {
                setIndex(1);
                setActiveLabel("two");
              }}
            >
              <span className=" font-semibold">Mock Interview</span>
            </button>
            <button
              className={`p-3 rounded-xl relative after:content-[''] transition-all duration-300 ${activeLabel === "three" ? "bg-black text-white after:block after:h-[2px] after:bottom-0 after:w-4/5 after:bg-white after:absolute after:origin-left after:transition-transform after:duration-[3s] after:ease-linear after:scale-x-100 " : "bg-[#d8d8f4] text-black after:scale-x-0 max-sm:hidden"}`}
              onClick={() => {
                setIndex(2);
                setActiveLabel("three");
              }}
            >
              <span className="font-semibold">1:1 Session</span>
            </button>
            <button
              className={`p-3 rounded-xl relative after:content-[''] transition-all duration-300 ${activeLabel === "four" ? "bg-black text-white after:block after:h-[2px] after:bottom-0 after:w-4/5 after:bg-white after:absolute after:origin-left after:transition-transform after:duration-[3s] after:ease-linear after:scale-x-100 " : "bg-[#d8d8f4] text-black after:scale-x-0 max-sm:hidden"}`}
              onClick={() => {
                setIndex(3);
                setActiveLabel("four");
              }}
            >
              <span className="font-semibold">Resume Review</span>
            </button>
          </div>
          <button onClick={handleRightButton} className="border p-2 rounded-full w-10 h-10 absolute bottom-1 right-[15%] z-30 lg:hidden sm:hidden">
            <FaAngleRight />
          </button>
        </div>
        <div className="mt-14">
          <div
            className={`w-11/12 m-auto ${activeLabel === "one" ? "visible" : "hidden"}`}
          >
            <div className="md:flex md:flex-row">
              <iframe
                title="VideoOne"
                className="w-full md:max-w-[40rem] aspect-video  rounded-lg"
                src={frontVideo}
              ></iframe>
              <div className="flex flex-col justify-center items-center m-auto w-full">
                <h3 className="text-center mt-6 w-3/4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus similique, asperiores quis vero aspernatur
                  facilis.
                </h3>
                <button className="mt-12 text-white p-3 bg-[#000000] rounded-2xl flex">
                  Get Started 1 <FiArrowRight className="text-xl" />
                </button>
              </div>
            </div>
          </div>
          <div
            className={`w-11/12 m-auto ${activeLabel === "two" ? "visible" : "hidden"}`}
          >
            <div className=" md:flex md:flex-row">
              <iframe
                title="VideoTwo"
                className="w-full md:max-w-[40rem] aspect-video rounded-lg "
                src={frontVideo}
              ></iframe>
              <div className="flex flex-col justify-center items-center w-full">
                <h3 className="text-center mt-6 w-3/4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus similique, asperiores quis vero aspernatur
                  facilis.
                </h3>
                <button className="mt-12 text-white p-3 bg-[#000000] rounded-2xl flex">
                  Get Started 2 <FiArrowRight className="text-xl" />
                </button>
              </div>
            </div>
          </div>

          <div
            className={`w-11/12 m-auto ${activeLabel === "three" ? "visible" : "hidden"}`}
          >
            <div className=" md:flex md:flex-row">
              <iframe
                title="VideoThree"
                className="w-full md:max-w-[40rem] aspect-video rounded-lg "
                src={frontVideo}
              ></iframe>
              <div className="flex flex-col justify-center items-center w-full">
                <h3 className="text-center mt-6 w-3/4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus similique, asperiores quis vero aspernatur
                  facilis.
                </h3>
                <button className="mt-12 text-white p-3 bg-[#000000] rounded-2xl flex">
                  Get Started 3 <FiArrowRight className="text-xl" />
                </button>
              </div>
            </div>
          </div>
          <div
            className={`w-11/12 m-auto ${activeLabel === "four" ? "visible" : "hidden"}`}
          >
            <div className=" md:flex md:flex-row">
              <iframe
                title="VideoFour"
                className="w-full md:max-w-[40rem] aspect-video rounded-lg "
                src={frontVideo}
              ></iframe>
              <div className="flex flex-col justify-center items-center w-full">
                <h3 className="text-center mt-6 w-3/4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus similique, asperiores quis vero aspernatur
                  facilis.
                </h3>
                <button className="mt-12 text-white p-3 bg-[#000000] rounded-2xl flex">
                  Get Started 4 <FiArrowRight className="text-xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
