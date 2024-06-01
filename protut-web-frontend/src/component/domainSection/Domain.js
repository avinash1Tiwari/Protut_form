import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";
import { FiArrowRight } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import DomainData from "./DomainData";
import SideBar from "./SideBar";
const Domain = () => {
  const [DomainModel, setDomainModel] = useState(false);
  const [Domain, setDomain] = useState("");
  const [search, setSearch] = useState("");
  const [isSidebarOpen,setIsSidebarOpen] = useState(false);

  const handelSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleModel = () => {
    setDomainModel((model) => !model);
  };
  document.body.style.overflow = DomainModel ? "hidden" : "auto";

  return (
    <>
      {isSidebarOpen&&<SideBar Domain={Domain} setIsSidebarOpen={setIsSidebarOpen}/>}
      {isSidebarOpen &&
      <div className="lg:w-2/3 md:w-1/3 max-md:hidden h-screen z-[55] bg-[#000000a0] overflow-y-hidden fixed top-0" onClick={()=>setIsSidebarOpen((isSidebarOpen)=>!isSidebarOpen)}></div>}
      <section className="mt-16">
        <div className="m-auto md::w-1/3 text-center p-8" >
          <h1 className="text-3xl font-bold p-2">Explore your Domain</h1>
          <p className="text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div
          className="bg-[#0000001a] flex p-1 rounded-full max-lg:w-3/4 lg:w-1/4 h-14 m-auto pl-3 cursor-pointer"
          onClick={handleModel}
        >
          <IoIosSearch className="text-xl m-1 text-[#adadad] mt-3" />
          <span className="m-1 text-xl text-[#adadad] mt-2">Search Domain</span>
        </div>
        <div className="flex justify-center flex-wrap lg:w-1/3 m-auto text-sm mt-3">
          <div
            onClick={() => setDomain("Frontend")}
            className={`m-5 cursor-pointer hover:bg-[#00000011] rounded-lg p-2 ${Domain ==="Frontend"&&'bg-[#00000011] '}`}
          >
            <img
              src={DomainData[0].logo}
              alt="frontend"
              className="w-10 m-auto"
            />
            <h6 className="mt-3">{DomainData[0].name}</h6>
          </div>
          <div
            onClick={() => setDomain("Backend")}
            className={`m-5 cursor-pointer hover:bg-[#00000011] rounded-lg p-2  ${Domain ==="Backend"&&'bg-[#00000011] '}`}
          >
            <img
              src={DomainData[1].logo}
              alt="frontend"
              className="w-10 m-auto"
            />
            <h6 className="mt-3">{DomainData[1].name}</h6>
          </div>
          <div
            onClick={() => setDomain("Android")}
            className={`m-5 cursor-pointer hover:bg-[#00000011] rounded-lg p-2 ${Domain ==="Android"&&'bg-[#00000011] '}`}
          >
            <img
              src={DomainData[2].logo}
              alt="frontend"
              className="w-10 m-auto"
            />
            <h6 className="mt-3">{DomainData[2].name}</h6>
          </div>
          <div
            onClick={() => setDomain("AR/VR")}
            className={`m-5 cursor-pointer hover:bg-[#00000011] rounded-lg p-2 ${Domain ==="AR/VR"&&'bg-[#00000011] '}`}
          >
            <img
              src={DomainData[3].logo}
              alt="frontend"
              className="w-10 m-auto"
            />
            <h6 className="mt-3">{DomainData[3].name}</h6>
          </div>
          <div
            className="m-3 cursor-pointer hover:bg-[#00000011] rounded-lg p-2"
            onClick={handleModel}
          >
            <CiCirclePlus className="text-5xl" />
            <h6 className="mt-3">View all</h6>
          </div>
        </div>
        <div className="text-center m-4 mb-10">
          <button className={`bg-black text-white p-3 rounded-full transition-all duration-300 ${Domain&&'scale-105'}`} onClick={()=>setIsSidebarOpen((isSidebarOpen)=>!isSidebarOpen)}>
            Explore Now <FiArrowRight className="inline" />
          </button>
        </div>
      </section>
      {DomainModel && (
        <div className="w-screen h-screen z-50 bg-white m-0 p-0 overflow-y-auto overflow-x-hidden fixed top-0 transition-all duration-150">
          <div className="sticky top-0 bg-white">
            <div
              onClick={handleModel}
              className="border-2 rounded-full w-9 h-9 absolute right-10 top-3 cursor-pointer"
            >
              <RxCross1 className="text-2xl m-1" />
            </div>
            <div className="m-auto lg:w-1/3 max-md:px-20 text-center p-8">
              <h1 className="text-3xl font-bold p-2">Explore your Domain</h1>
              <p className="text-lg">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="lg:w-1/4 m-auto  max-md:m-8 relative">
              <div className="absolute top-3 left-3">
                <IoIosSearch className="text-2xl text-[#a0a0a0]" />
              </div>
              <input
                onChange={handelSearch}
                value={search}
                type="text"
                name="search"
                id="search"
                className="bg-[#0000001a] h-12 rounded-full w-full pl-11"
                placeholder="Search Domain"
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-5 md:grid-cols-4 max-md:w-full max-md:grid-cols-3 justify-between lg:w-1/3 m-auto text-sm mt-3 min-h-[435px]">
            {search.length > 0
              ? DomainData.filter((domain) =>
                  domain.name.toLowerCase().startsWith(search.toLowerCase())
                ).map((domain) => (
                  <div
                    key={domain.id}
                    onClick={() => setDomain(domain.name)}
                    className={`mt-5 mb-3 cursor-pointer hover:bg-[#00000011] rounded-lg p-2 text-center w-full ${Domain === domain.name&&'bg-[#00000011] '}`}
                  >
                    <img
                      src={domain.logo}
                      alt={domain.name}
                      className="w-10 m-auto"
                    />
                    <h6 className="mt-3 text-center">{domain.name}</h6>
                  </div>
                ))
              : DomainData.map((domain) => (
                  <div
                    key={domain.id}
                    onClick={() => setDomain(domain.name)}
                    className={`mt-5 mb-3 cursor-pointer hover:bg-[#00000011] rounded-lg p-2 text-center w-full ${Domain === domain.name&&'bg-[#00000011] '}`}
                  >
                    <img
                      src={domain.logo}
                      alt={domain.name}
                      className="w-10 m-auto"
                    />
                    <h6 className="mt-3 text-center">{domain.name}</h6>
                  </div>
                ))}
          </div>
          <div className="text-center sticky bottom-3 backdrop-blur-sm h-32">
            <button className={`bg-black text-white p-3 rounded-full mt-6 ${Domain&&'scale-105'}`} onClick={()=>setIsSidebarOpen((isSidebarOpen)=>!isSidebarOpen)}>
              Explore Now <FiArrowRight className="inline" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Domain;
