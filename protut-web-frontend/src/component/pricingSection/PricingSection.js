import React from "react";
import Icons from "./Icons";
import { Divider, Badge } from "keep-react";
import m1 from "./assets/maang1.png";
import m2 from "./assets/maang2.png";
import m3 from "./assets/maang3.png";
import m4 from "./assets/maang4.png";
import m5 from "./assets/maang5.png";
import sp1 from "./assets/sp1.png";
import sp2 from "./assets/sp2.png";
import sp3 from "./assets/sp3.png";
import sp4 from "./assets/sp4.png";
import sp5 from "./assets/sp5.png";
import pb1 from "./assets/pb1.png";
import pb2 from "./assets/pb2.png";
import pb3 from "./assets/pb3.png";
import pb4 from "./assets/pb4.png";
import pb5 from "./assets/pb5.png";
import sb1 from "./assets/sb1.png";
import sb2 from "./assets/sb2.png";
import sb3 from "./assets/sb3.png";
import sb4 from "./assets/sb4.png";
import sb5 from "./assets/sb5.png";

const PricingSection = () => {
  return (
    <div className="md:h-[90rem] lg:h-[48rem]  w-full flex justify-center ">
      <section className="w-full bg-white dark:bg-gray-900">
        <div className="py-10 px-4   mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-24 lg:mb-24">
            <h2 className="mb-4 flex justify-center items-center space-x-2 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              <span className="text-violet-950">Flexible</span>
              <span>Pricing</span>
            </h2>
          </div>
          <div className=" md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 gap-6 xl:gap-10 lg:space-y-0 ">
            <div className="group flex flex-col p-6 mx-auto max-w-80 text-center text-gray-900 bg-gray-300 dark:bg-gray-800 rounded-2xl border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:text-white  hover:bg-black hover:text-white hover:scale-110 transition-all duration-500">
              <h3 className="mb-4 text-2xl text-left font-bvp font-bold">
                Start-up Based
              </h3>
              <p className="text-sm text-left font-bvp font-bold">3000/user</p>
              <div className="flex p-4 justify-between">
                <img src={m1} alt="maang1" className="w-8 mx-auto aspect-square object-contain" />
                <img src={m2} alt="maang2" className="w-8 mx-auto aspect-square object-contain" />
                <img src={m3} alt="maang3" className="w-8 mx-auto aspect-square object-contain" />
                <img src={m4} alt="maang4" className="w-8 mx-auto aspect-square object-contain" />
                <img src={m5} alt="maang5" className="w-8 mx-auto aspect-square object-contain" />
              </div>
              <Divider className="p-4" />
              <p className="font-bvp font-bold text-left text-lg ml-10 mb-5">
                {" "}
                Includes:
              </p>
              <ul className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <Icons />
                  <span>
                    Free updates:{" "}
                    <span className="font-semibold">36 months</span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Icons />
                  <span>
                    Free updates:{" "}
                    <span className="font-semibold">36 months</span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Icons />
                  <span>
                    Free updates:{" "}
                    <span className="font-semibold">36 months</span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Icons />
                  <span>
                    Free updates:{" "}
                    <span className="font-semibold">36 months</span>
                  </span>
                </li>
              </ul>
              <p>
                <button className="max-w-40 bg-violet-950 hover:bg-gray-700 text-white font-bvp font-semibold py-2 px-6 rounded-xl">
                  Get Started
                </button>
              </p>
            </div>
            <div className="relative group flex flex-col p-6 max-md:mt-5 mx-auto max-w-80 text-center text-gray-900 bg-gray-300 dark:bg-gray-800 rounded-2xl border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:text-white hover:bg-black hover:text-white hover:scale-110 transition-all duration-500">
              <div className="absolute top-0 right-16 z-10 transform translate-x-1/2 -translate-y-1/2">
                <Badge
                  color="success"
                  variant="background"
                  className="bg-green-600"
                >
                  Most Popular
                </Badge>
              </div>
              <h3 className="mb-4 text-2xl text-left font-bvp font-bold">
                MAANG
              </h3>
              <h4 className="text-sm text-left font-bvp font-bold">
                3000/user
              </h4>
              <div className="flex p-4  justify-between">
                <img src={sp1} alt="sp1" className="w-8 mx-auto aspect-square object-contain" />
                <img src={sp2} alt="sp2" className="w-8 mx-auto aspect-square object-contain" />
                <img src={sp3} alt="sp3" className="w-8 mx-auto aspect-square object-contain" />
                <img src={sp4} alt="sp4" className="w-8 mx-auto aspect-square object-containo" />
                <img src={sp5} alt="sp5" className="w-8 mx-auto aspect-square object-contain" />
              </div>

              <Divider className="p-4" />
              <p className="font-bvp font-bold text-left text-lg ml-10 mb-5">
                Includes:
              </p>
              <ul className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <Icons />
                  <span>
                    Free updates:{" "}
                    <span className="font-semibold">36 months</span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Icons />
                  <span>
                    Free updates:{" "}
                    <span className="font-semibold">36 months</span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Icons />
                  <span>
                    Free updates:{" "}
                    <span className="font-semibold">36 months</span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Icons />
                  <span>
                    Free updates:{" "}
                    <span className="font-semibold">36 months</span>
                  </span>
                </li>
              </ul>
              <p>
                <button className="max-w-40 bg-violet-950 hover:bg-gray-700 text-white font-bvp font-semibold py-2 px-6 rounded-xl">
                  Get Started
                </button>
              </p>
            </div>

            <div className="group flex flex-col p-6 max-md:mt-5 mx-auto max-w-80 text-center text-gray-900 bg-gray-300 dark:bg-gray-800 rounded-2xl border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:text-white  hover:bg-black hover:text-white hover:scale-110 transition-all duration-500">
              <h3 className="mb-4 text-2xl text-left font-bvp font-bold">
                Product Based
              </h3>
              <p className="text-sm text-left font-bvp font-bold">3000/user</p>

              <div className="flex p-4  justify-evenly">
                <img src={pb1} alt="pb1" className="w-8 mx-auto aspect-square object-contain" />
                <img src={pb2} alt="pb2" className="w-8 mx-auto aspect-square object-containo" />
                <img src={pb3} alt="pb3" className="w-8 mx-auto aspect-square object-contain" />
                <img src={pb4} alt="pb4" className="w-8 mx-auto aspect-square object-contain" />
                <img src={pb5} alt="pb5" className="w-8 mx-auto aspect-square object-contain" />
              </div>

              <Divider className="p-4 " />
              <p className="font-bvp font-bold text-left text-lg  ml-10 mb-5">
                {" "}
                Includes:
              </p>
              <ul className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <Icons />
                  <span>
                    Free updates:{" "}
                    <span className="font-semibold">36 months</span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Icons />
                  <span>
                    Free updates:{" "}
                    <span className="font-semibold">36 months</span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Icons />
                  <span>
                    Free updates:{" "}
                    <span className="font-semibold">36 months</span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Icons />
                  <span>
                    Free updates:{" "}
                    <span className="font-semibold">36 months</span>
                  </span>
                </li>
              </ul>
              <p>
                <button className=" max-w-40 bg-violet-950 hover:bg-gray-700 text-white font-bvp font-semibold py-2 px-6  rounded-xl">
                  Get Started
                </button>
              </p>
            </div>
            <div className="group flex flex-col p-6 max-md:mt-5 mx-auto max-w-80 text-center text-gray-900 bg-gray-300 dark:bg-gray-800 rounded-2xl border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:text-white  hover:bg-black hover:text-white hover:scale-110 transition-all duration-500">
              <h3 className="mb-4 text-2xl text-left font-bvp font-bold">
                Service Based
              </h3>
              <p className="text-sm text-left font-bvp font-bold">3000/user</p>
              <div className="flex p-4 justify-between">
                <img src={sb1} alt="sb1" className="w-8 mx-auto aspect-square object-contain" />
                <img src={sb2} alt="sb2" className="w-8 mx-auto aspect-square object-contain" />
                <img src={sb3} alt="sb3" className="w-8 mx-auto aspect-square object-contain" />
                <img src={sb4} alt="sb4" className="w-8 mx-auto aspect-square object-contain" />
                <img src={sb5} alt="sb5" className="w-8 mx-auto aspect-square object-contain" />
              </div>

              <Divider className="p-4" />
              <p className="font-bvp font-bold text-left text-lg  ml-10 mb-5">
                {" "}
                Includes:
              </p>
              <ul className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <Icons />
                  <span>
                    Free updates:{" "}
                    <span className="font-semibold">36 months</span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Icons />
                  <span>
                    Free updates:{" "}
                    <span className="font-semibold">36 months</span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Icons />
                  <span>
                    Free updates:{" "}
                    <span className="font-semibold">36 months</span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Icons />
                  <span>
                    Free updates:{" "}
                    <span className="font-semibold">36 months</span>
                  </span>
                </li>
              </ul>
              <p>
                <button className=" max-w-40 bg-violet-950 hover:bg-gray-700 text-white font-bvp font-semibold py-2 px-6  rounded-xl">
                  Get Started
                </button>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingSection;
