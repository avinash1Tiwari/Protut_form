import React from 'react'

const Availability = () => {
  const availabilitySlot = [
    { day: 'Monday', time: '10:00 AM - 12:00 PM' },
    { day: 'Tuesday', time: '7:00 PM - 8:00 PM' },
    { day: 'Wednesday', time: '2:00 PM - 4:00 PM' },
    { day: 'Thursday', time: '5:00 PM - 6:00 PM' },
    { day: 'Friday', time: '9:00 AM - 11:00 AM' },
    { day: 'Saturday', time: '3:00 PM - 5:00 PM' },
    { day: 'Sunday', time: '1:00 PM - 3:00 PM' },
  ];
  return (
    <div className="max-w-4xl mx-auto bg-black rounded-lg shadow-lg overflow-hidden p-6">
    <h2 className="text-2xl text-white text-center font-bold mb-4">Availability</h2>
    <div className="flex flex-col md:flex-row md:flex-wrap">
      {availabilitySlot.map((slot, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-between p-4 bg-gray-100 rounded-lg shadow-sm mb-4 md:mr-4 md:last:mr-0 w-full md:w-48"
        >
          <span className="font-semibold text-gray-700">{slot.day}</span>
          <span className="text-gray-600">{slot.time}</span>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Availability