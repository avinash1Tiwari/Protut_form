import React from 'react'
import InfiniteScroll from "react-infinite-scroll-component";
import { Card } from "keep-react";
import ServiceTags from '../../servicesTags/ServiceTags';
const ProjectsCard = () => {
    const cards = new Array(50).fill({
        name: "John Doe",
        title: "Software Engineer",
        image: "https://www.clipartmax.com/png/middle/201-2012057_software-developer-computer-servers-programmer-web-developer-png.png",
      });
  return (
    <div className='bg-black'>
        <h1 className='text-2xl text-center text-white font-bvp  font-bold'> Projects </h1>
        <hr></hr>
      <InfiniteScroll
          dataLength={50}
          next={() => console.log("load more")}
          hasMore={false} 
          loader={
            <div className="loader" key={0}>
              Loading ...
            </div>
          }
          className="flex "
          scrollableTarget="scrollableDiv"
        >
          <div
            id="scrollableDiv"
            className="grid grid-cols-1 gap-4 overflow-auto"
            style={{ height: "28vh" }}
          >
            {cards.map((card, index) => (
             <div className="bg-black shadow-md rounded-md p-2">
             <h2 className="text-lg text-white font-semibold text-center">Project Name</h2>
             <p className="text-white text-center">Tech Stack: JavaScript, Tailwind CSS, React, Node.js</p>
             <div className="flex flex-col justify-center items-center mt-2 ">
               <p className="text-white mr-2">Total Shares: 3/5</p>
               <button className="bg-indigo-500 text-white py-2 px-4 rounded-full flex items-center">
                 View Details <span className="ml-2">-&gt;</span>
               </button>
             </div>
             <hr className='mt-2'></hr>
           </div>
            ))}
          </div>
        </InfiniteScroll>
    </div>
  )
}


export default ProjectsCard

