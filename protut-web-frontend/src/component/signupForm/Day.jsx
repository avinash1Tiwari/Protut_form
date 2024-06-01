import React, { useState } from "react";

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

function Day({
  day,
  slots,
  addDefaultEntry,
  setShowIndex,
  setRemoveIndex,
  showItem,
}) {
 


  const Handleslots = () => {
    if (!showItem) setShowIndex();
    else setRemoveIndex();
  };

  return (
    <div
      className="relative block m-1 w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50  text-sm font-medium   focus:ring-blue-500
    focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
      dark:focus:ring-blue-500 dark:focus:border-blue-500  mb-2   dark:text-white mt-4 "
    >
      <div className="flex justify-between  ">
      <div className={` relative  block text-sm font-medium text-gray-900 dark:text-white ${showItem ? "mt-3 " : ""}`}>
        {day}
      </div>
      {/* absolute right-5 top-3 */}
      <div className=" cursor-pointer">
        {showItem ? (
          <IoIosArrowUp onClick={() => Handleslots(day)} className="text-3xl" />
        ) : (
          <IoIosArrowDown
            onClick={() => Handleslots(day)}
            className="text-2xl"
          />
        )}
      </div>
      </div>
      

      <div
        className={`h-0 overflow-hidden relative  ${
          showItem ? "h-full  " : ""
        }`}
      >

   
    
        <ul>
          {slots.map(
            (slot, index) =>
              slot          
          )}
        </ul>
      </div>
    </div>
  );
}

export default Day;
