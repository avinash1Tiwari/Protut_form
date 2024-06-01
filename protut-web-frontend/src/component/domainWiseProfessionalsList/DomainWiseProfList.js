import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Card } from "keep-react";
import ServiceTags from "../servicesTags/ServiceTags";

const cards = new Array(50).fill({
  name: "John Doe",
  title: "Software Engineer",
  image: "https://www.clipartmax.com/png/middle/201-2012057_software-developer-computer-servers-programmer-web-developer-png.png",
});

const DomainWiseProfList = () => {
  return (
    <div className="h-[80vh] flex flex-col items-center">
      <h1 className="text-center mt-10 mb-10 text-2xl font-bvp font-bold max-w-[30rem] lg:max-w-[45rem]">
        HERE ARE YOUR POTENTIAL MENTORS FROM SELECTED TECH, DOMAIN, COMPANY TYPE
      </h1>
      <div className="w-full overflow-hidden">
      <InfiniteScroll
          dataLength={50}
          next={() => console.log("load more")}
          hasMore={false} 
          loader={
            <div className="loader" key={0}>
              Loading ...
            </div>
          }
          className="flex flex-wrap justify-center items-center"
          scrollableTarget="scrollableDiv"
        >
          <div
            id="scrollableDiv"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 overflow-auto"
            style={{ height: "62vh" }}
          >
            {cards.map((card, index) => (
              <Card
                key={index}
                className="w-[20rem] h-[20rem] p-4 border border-gray-300 shadow-lg transition-transform transform hover:scale-95"
              >
                <div className="flex items-center">
                  <img
                    src={card.image}
                    alt={card.name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div className="ml-4">
                    <h2 className="text-lg font-medium">{card.name}</h2>
                    <p className="text-gray-500">{card.title}</p>
                  </div>
                </div>
                <div className=" mt-4 mb-4 text-md font-bvp flex justify-center gap-5">
                <h1> Ratings : 5/5</h1>
                <h1>Total Sessions : 20</h1>
                </div>
                
                 <h1 className="text-center text-2xl font-bvp mb-7">Services</h1>
                <ServiceTags />
              </Card>
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default DomainWiseProfList;
