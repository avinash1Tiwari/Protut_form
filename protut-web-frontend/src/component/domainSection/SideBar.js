import React from 'react'
import { FiArrowLeft } from "react-icons/fi";
const SideBar = ({Domain,setIsSidebarOpen}) => {
  document.body.style.overflow = "hidden"
  const handleBack =()=>{
    
  }
  return (
    <div className="lg:w-1/3 md:w-2/3 max-md:w-full h-screen z-[60] bg-[#cacaca] m-0 p-0 overflow-y-auto overflow-x-hidden fixed top-0 transition-all duration-150 right-0">
      <div className='flex text-3xl text-center p-12'>
        <FiArrowLeft className='cursor-pointer' onClick={()=>setIsSidebarOpen((isopen)=>!isopen)}/>
        <span className='ml-6'>{Domain}</span> 
      </div>
    </div>
  )
}

export default SideBar