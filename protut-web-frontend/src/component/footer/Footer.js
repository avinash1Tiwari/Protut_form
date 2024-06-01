import React from "react";
import { Link } from "react-router-dom";
import protutLogo from "../../assets/protutImage/protutLogo.jpeg";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="grid lg:grid-cols-3 justify-center w-full bg-[#353535] lg:pb-8 max-md:m-auto py-10">
        <div className="flex lg:flex-col max-md:flex-col justify-center lg:ml-20 items-start m-auto max-md:text-center">
          <div className="flex flex-col w-full max-md:mb-5">
            <img
              className="w-1/4 max-md:w-1/5 h-15 lg:ml-0 m-auto"
              src={protutLogo}
              alt=""
            />
          </div>
          <div className="w-full max-md:ml-4">
            <p className="text-start mt-2 max-w-96 w-full text-white text-lg ">
              Top learning experience that creates more talent in the world
            </p>
            <ul className="flex min-md:justify-center mt-3 gap-4 ">
              <Link to="#">
                <FaSquareXTwitter className="text-[#979797] text-2xl  hover:text-[#161616] hover:scale-125 hover:transition-all " />
              </Link>
              <Link to="#">
                <FaLinkedin className="text-[#979797] text-2xl  hover:text-[#0A66C2] hover:scale-125 hover:transition-all" />
              </Link>
              <Link to="#">
                <FaGithub className="text-[#979797] text-2xl  hover:text-[#161616] hover:scale-125 hover:transition-all" />
              </Link>
              <Link to="#">
                <FaFacebook className="text-[#979797] text-2xl  hover:text-[#1e90fa] hover:scale-125 hover:transition-all" />
              </Link>
            </ul>
          </div>
        </div>
        <div className="col-span-2 max-md:mt-12 lg:pb-20 max-md:ml-4 max-lg:m-auto">
          <div className="flex lg:justify-evenly max-md:flex-col max-md:justify-start ">
            <ul className="md:p-10 text-white ">
              <span className="font-bold text-lg text-[#979797] p-1 ">
                Product
              </span>
              <Link to="#">
                <li className="text-lg p-1">Overview</li>
              </Link>
              <Link to="#">
                <li className="text-lg p-1">Features</li>
              </Link>
              <Link to="#">
                <li className="text-lg p-1">Solutions</li>
              </Link>
              <Link to="#">
                <li className="text-lg p-1">Tutorials</li>
              </Link>
              <Link to="#">
                <li className="text-lg p-1">Pricing</li>
              </Link>
            </ul>
            <ul className="md:p-10 text-white max-md:mt-6">
              <span className="font-bold text-lg text-[#979797] p-1">
                Company
              </span>
              <Link to="#">
                <li className="text-lg p-1">About us</li>
              </Link>
            </ul>
            <ul className="md:p-10 text-white max-md:mt-6">
              <span className="font-bold text-lg text-[#979797] p-1">
                Social
              </span>
              <Link to="#">
                <li className="text-lg p-1">Twitter</li>
              </Link>
              <Link to="#">
                <li className="text-lg p-1">LinkedIn</li>
              </Link>
              <Link to="#">
                <li className="text-lg p-1">GitHub</li>
              </Link>
            </ul>
            <ul className="md:p-10 text-white max-md:mt-6">
              <span className="font-bold text-lg text-[#979797] p-1">
                Legal
              </span>
              <Link to="#">
                <li className="text-lg p-1">Terms</li>
              </Link>
              <Link to="#">
                <li className="text-lg p-1">Privacy</li>
              </Link>
              <Link to="#">
                <li className="text-lg p-1">Cookies</li>
              </Link>
              <Link to="#">
                <li className="text-lg p-1">Contact</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <p className="bg-black w-full text-white text-center p-2">
        &copy; 2024, PROTUT All rights reserved.
      </p>
    </>
  );
};

export default Footer;
