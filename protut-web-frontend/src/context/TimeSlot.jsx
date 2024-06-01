import { useState } from "react";
import { createContext } from "react";
import moment from "moment";
// context creation
export const AppContext = createContext();

//  make provider
export default function AppContextProvider({ children }) {
  const [setectedTime, setSelectedSlot] = useState({});
  const [timeSlot1, setTimeSlot1] = useState([]);
  const [timeSlot2, setTimeSlot2] = useState([]);


  const createTimeSlots = (fromTime, toTime) => {
    let startTIme = moment(fromTime, "hh:mm A");
    let endTime = moment(toTime, "hh:mm A");

    if (endTime.isBefore(startTIme)) {
      endTime.add(1, "day");
    }

    let arr = [];
    while (startTIme <= endTime) {
      arr.push(new moment(startTIme).format("hh:mm A"));
      startTIme.add(30, "minutes");
    }

    return arr;
  };




  const handleSelectedSlot = (data,index) => {
    
      const { day, startTime, endTime } = data;

      let x = true;
      let oldarray = setectedTime[day];
      // console.log("typeof(oldarray)")
      // console.log(typeof(oldarray))
      if(oldarray){
      for(let i=0;i<oldarray.length;i++)
        {
          if((startTime === oldarray[i][0] && endTime === oldarray[i][1])||(startTime === "00:00 AM" && endTime==="00:00 AM"))
            {
                alert("Please add a schedule")
              x = false;
              break;
            }
        }}


      if (x && startTime !== "" && endTime !== "") {
        if (setectedTime!=null &&
           day in setectedTime) {
          const updatedArray = [...setectedTime[day], [startTime, endTime]];
 
          if(startTime !== "00:00 AM" && endTime !== "00:00 AM"){
            console.log("hm yha hai1")
          setSelectedSlot(() => {
          return { ...setectedTime, [day]: updatedArray }
        });}
        }
        else {

          if(startTime !== "00:00 AM" && endTime !== "00:00 AM"){
          const newObj = { [day]: [[startTime, endTime]] };
          setSelectedSlot(() => {
          return { ...setectedTime, ...newObj }});
        }}


      }

    };
    
  
   

  const value = {
    setectedTime,
    setSelectedSlot,
    handleSelectedSlot,
    timeSlot1,
    timeSlot2,
    setTimeSlot1,
    setTimeSlot2,
    createTimeSlots
  };



  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
