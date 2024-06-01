import { DayTimeSlot } from "./DayTimeSlot";
import { useState, useContext } from "react";
import { AppContext } from "../../context/TimeSlot";
import axios from "axios"
import Day from "./Day";
function Form3({ setCurrentForm, currentForm, setComplete,formData,setFormData }) {
  const [selectedSlot, setSelectedSlot] = useState({
    Monday: [<DayTimeSlot day="Monday" index={0}/>],
    Tuesday: [<DayTimeSlot day="Tuesday" index={0} />],
    Wednesday: [<DayTimeSlot day="Wednesday" index={0} />],
    Thursday: [<DayTimeSlot day="Thursday" index={0} />],
    Friday: [<DayTimeSlot day="Friday" index={0} />],
    Saturday: [<DayTimeSlot day="Saturday" index={0} />],
    Sunday: [<DayTimeSlot day="Sunday" index={0} />],
  });

  const [showIndex,setShowIndex] = useState(null)
  let [showItem,setShowItem] = useState(false)
  
  
  const addDefaultEntry = (day,index) => {
    // console.log("day " + day)
    
    setSelectedSlot((prevSlots) => ({
      ...prevSlots,
      [day]: [...prevSlots[day], <DayTimeSlot day={day} index={index}/>],
    }));
  };

  const handleBackForm = (e) => {
    setComplete(false)
    setCurrentForm((currentForm) => currentForm - 1);
  };
  const { setectedTime } = useContext(AppContext);







const submitHandler = (e) => {
    // e.preventDefault();  // Prevent the default form submission behavior
    alert("form submitted");

    axios.post('http://localhost:3001/api/registerdeveloper', formData, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        if (error.response) {
            // Server responded with a status other than 200 range
            console.error('Response error:', error.response.data);
        } else if (error.request) {
            // Request was made but no response was received
            console.error('No response received:', error.request);
        } else {
            // Something happened in setting up the request
            console.error('Error in setup:', error.message);
        }
    });
}







  return (
      <div className="bg-white p-4 md:mx-16 lg:w-max-w-md lg:justify-center lg:items-center lg:mx-48 xl:mx-48">
        
        <div>
          {/* Render a Day component for each entry in selectedSlot */}
          {Object.entries(selectedSlot).map(([day, slots]) => (
            <Day
              key={day}
              day={day}
              slots={slots}
              addDefaultEntry={addDefaultEntry}
              showItem ={day === showIndex ? true : false}
                setShowIndex = {() =>setShowIndex(day)}
                setRemoveIndex = {() =>setShowIndex(null)}
            />
          ))}
        </div>
        <div className="flex justify-between mt-10 max-sm:flex-col max-sm:ml-7 max-sm:gap-5">
          <h1 className="ml-7 mt-5 font-bold text-xl max-sm:ml-2">Selected Schedules</h1>
          <div className="border-2  border-black p-9 text-sm font-medium text-gray-900 dark:text-white flex  flex-wrap w-[22%]  mr-10 rounded max-sm:w-full">
            {setectedTime &&
              Object.keys(setectedTime).map((day) => (
                <ul className="flex flex-wrap justify-between">
                  {setectedTime[day].map((timeSlot, index) => (
                    <li key={index}>
                      {day} {timeSlot[0]}-{timeSlot[1]}
                    </li>
                  ))}
                </ul>
              ))}
          </div>
        </div>

        <div className="flex justify-between my-10 mr-10 max-sm:flex-col max-sm:text-xl-5 max-sm:gap-5">
          <div className="ml-7 mt-5 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Meeting Link</div>
          <input placeholder="meeting link" className="border-2 border-black w-1/2 rounded max-sm:w-full max-sm:ml-7 max-sm:text-xl max-sm:h-12 px-3"/>
        </div>

        <div className="flex flex-col gap-5 mr-10 ">
          <div className="flex justify-between max-sm:flex-col max-sm:gap-5">
              <div className="ml-7 mt-5 block mb-2 text-sm font-medium text-gray-900 dark:text-white " >Maximum number of lorem  lorem  from Learner side</div>
              <div className="border-2 border-black w-1/2 rounded flex flex-row justify-between p-1 max-sm:ml-7 max-sm:w-full">
              <button className="border-2 border-black p-[2px]  min-w-14 rounded">2 days</button>
                <button className="border-2 border-black p-[2px] min-w-14 rounded">3 days</button>
                <button className="border-2 border-black  p-[2px] min-w-14 rounded">5 days</button>
                
              </div>
          </div>
          <div className="flex justify-between max-sm:flex-col max-sm:gap-5">
              <div className="ml-7 mt-5 block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Reschedule only before how many hours ? </div>
              <div className="border-2 border-black w-1/2 rounded flex flex-row justify-between p-1 max-sm:ml-7 max-sm:w-full">
              <button className="border-2 border-black  p-[2px] min-w-14 rounded">2 h</button>
                <button className="border-2 border-black  p-[2px] min-w-14 rounded">3 h</button>
                <button className="border-2 border-black p-[2px] min-w-14 rounded">5 h</button>
                
              </div>
          </div>
          <div className="flex justify-between max-sm:flex-col max-sm:gap-5">
              <div className="ml-7 mt-5 block mb-2 text-sm font-medium text-gray-900 dark:text-white max-sm:flex-col max-sm:gap-5" >Maximum number of lorem  lorem  from Learner side</div>
              <div className="border-2 border-black w-1/2 rounded flex flex-row justify-between p-1 max-sm:ml-7 max-sm:w-full">
              <button className="border-2 border-black  p-[2px] min-w-14 rounded">2 days</button>
                <button className="border-2 border-black  p-[2px]  min-w-14 rounded">3 days</button>
                <button className="border-2 border-black  p-[2px] min-w-14 rounded">5 days</button>
                
              </div>
          </div>
          <div className="flex justify-between max-sm:flex-col max-sm:gap-5">
              <div className="ml-7 mt-5 block mb-2 text-sm font-medium text-gray-900 dark:text-white max-sm:flex-col max-sm:gap-5" >Booking period range</div>
              <div className="border-2 border-black w-1/2 rounded flex flex-row justify-between p-1 max-sm:ml-7 max-sm:w-full">
              <button className="border-2 border-black  p-[2px] min-w-14 rounded">2 days</button>
                <button className="border-2 border-black  p-[2px] min-w-14 rounded">3 days</button>
                <button className="border-2 border-black  p-[2px] min-w-14 rounded">5 days</button>
                
              </div>
          </div>
        </div>

        <div className="flex justify-center items-center mt-8" >
         
          <button
              className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600 m-2"
             onClick={handleBackForm}
            >
             Previous
            </button>
           {currentForm===2 ? <button
              onClick={ () =>{
                alert("form submitted")
                submitHandler()
              } }
              >
                Submit
              </button>
              : <button
              className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600 m-2"
              onClick={() => {
                currentForm === 2
                  ? setComplete(true)
                  : setCurrentForm((prev) => prev + 1);
              }}
            >
              Next
            </button> 
              
            }
          </div>
        </div>
  );
}

export default Form3;
