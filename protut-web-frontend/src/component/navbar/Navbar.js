import React from "react";
import DropdownComponent from "./DropdownComponent";
import Logo from "../../assets/protutImage/logo.png";
import { Navbar, Divider } from "keep-react";
import AccordianDropdown from "./AccordionDropdown";

const Nav = () => {
  return (
    <>
      <Navbar fluid={true} className="!py-5 sticky top-0 z-40">
        <Navbar.Container className="flex items-center justify-between">
          <div className="flex md:space-x-6 lg:space-x-24 xl:space-x-80 md:justify-center items-center w-full justify-between">
            <Navbar.Brand>
              <img
                src={Logo}
                alt="logo"
                className="h-15 w-40 md:max-w-28 lg:max-w-40 mx-4"
              />
            </Navbar.Brand>

            <Navbar.Container>
              <ul className="hidden md:flex items-center  lg:gap-6">
                <DropdownComponent />
                <li className="text-xl px-2 font-bvp font-semibold hover:scale-110 cursor-pointer rounded-lg hover:bg-black hover:text-white transition duration-300 ease-in-out">
                  Pricing
                </li>
                <li className="text-xl px-2 font-bvp font-semibold hover:scale-110 cursor-pointer md:truncate rounded-lg hover:bg-black hover:text-white  transition duration-300 ease-in-out">
                  Contacts
                </li>
                <li className="text-xl px-2 font-bvp font-semibold hover:scale-110 cursor-pointer md:truncate rounded-lg hover:bg-black hover:text-white  transition duration-300 ease-in-out">
                  FAQ
                </li>
              </ul>
            </Navbar.Container>

            <div className="flex">
              <button className="hidden md:flex  bg-black hover:bg-gray-700 text-white font-bvp font-semibold py-2 px-6  rounded-full mr-4">
                <p className="md:truncate"> Log In</p>
              </button>
              <button className="hidden md:flex bg-black hover:bg-gray-700 text-white font-bvp font-semibold py-2 px-4  rounded-full">
                <p className="md:truncate"> Join for free</p>
              </button>
            </div>
          </div>
          <Navbar.Collapse
            collapseType="sidebar"
            className="fixed right-0 top-0 bg-white p-10 xl:!w-1/6 lg:!w-2/6 md:!w-1/2"
          >
            <Navbar.Container
              tag="ul"
              className="flex flex-col gap-5 max-h-[90vh] overflow-y-auto"
            >
              <AccordianDropdown />
              <p className="text-lg pl-6">Pricing</p>
              <Divider />
              <p className="text-lg pl-6">Contact-Us</p>
              <Divider />
              <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
                Login
              </button>
              <button className=" bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full">
                Signup
              </button>
            </Navbar.Container>
          </Navbar.Collapse>
          <div className="md:hidden">
            <Navbar.Container className="flex gap-1">
              <Navbar.Toggle className="block" />
              Menu
            </Navbar.Container>
          </div>
        </Navbar.Container>
      </Navbar>
    </>
  );
};

export default Nav;
