import React from 'react'

const ResumeReviewCard = () => {
  const features = [
    'Feature 1',
    'Feature 2',
    'Feature 3',
    'Feature 1',
    'Feature 2',
    'Feature 3',
  ];
  return (
    <div className="max-w-[26rem] rounded overflow-hidden shadow-lg p-6 bg-black">
      <h2 className="text-xl text-white font-bold mb-4">Resume Review</h2>
      <ul className="list-none p-0">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center mb-2">
            <svg
              className="w-6 h-6 text-green-500 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <span className='text-white'>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ResumeReviewCard