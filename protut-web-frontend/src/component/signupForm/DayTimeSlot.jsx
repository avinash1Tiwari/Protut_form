import React, { useState } from "react";
import { useContext, useEffect } from "react";
import { AppContext } from "../../context/TimeSlot";
import { HiPlus } from "react-icons/hi";
export const DayTimeSlot = ({ day,index }) => {

  // const [timeSlot, setTimeSlot] = useState([]);

  const [timestart, setTimeStart] = useState("");
  const [timeend, setTimeend] = useState("");

  const { setectedTime, handleSelectedSlot,timeSlot1,timeSlot2,setTimeSlot1,setTimeSlot2,createTimeSlots } = useContext(AppContext);

  useEffect(() => {
    setTimeSlot1(createTimeSlots("07:00 AM", "06:30 AM"));
    setTimeSlot2(createTimeSlots("07:00 AM", "06:30 AM"));
  }, []);



  const handleStartTime = (e) => {
    setTimeStart(e.target.value);
    setTimeSlot2(createTimeSlots(e.target.value, "12:00 AM"));

  };

  const handleEndTime = (e) => {
    setTimeend(e.target.value);
  };
  function handleSelectedSlot1()
  {
    const data = {
      day: day,
      startTime: timestart,
      endTime: timeend,
    };

    handleSelectedSlot(data);
    setTimeend('00:00 AM') 
   
    setTimeStart('00:00 AM')  
    setTimeSlot2(createTimeSlots("07:00 AM", "06:30 AM")); 
      
  }

  return (
    <div className="flex flex-row gap-14  w-3/6 justify-around m-auto max-sm:ml-14 max-sm:mt-4 max-sm:gap-7 " >
        <select
          name="dayhour"
          id=""
          value ={timestart}
          className="w-48  mb-3 text-sm font-medium text-gray-900 dark:text-white rounded max-sm:text-sm max-sm:w-3 max-sm:h-8"
          onChange={handleStartTime}
        >
          {timeSlot1.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>
        <select
          name="dayhour"
          id=""
          value={timeend}
          className="w-48  mb-3 text-sm font-medium text-gray-900 dark:text-white rounded max-sm:text-sm max-sm:w-3 max-sm:h-8"
          onChange={handleEndTime}
        >
          {timeSlot2.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>

        <button
          onClick={handleSelectedSlot1}
          className=" text-3xl"
        >
          {/* absolute  ml-32 right-1/4 */}
          <HiPlus />
        </button>
    </div>
  );
};
