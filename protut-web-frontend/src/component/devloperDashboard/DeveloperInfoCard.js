import React from 'react';

const DeveloperInfoCard = () => {
  const person = {
    name: 'Protut',
    designation: 'Software Developer',
    profilePicture: 'https://www.clipartmax.com/png/middle/201-2012057_software-developer-computer-servers-programmer-web-developer-png.png',
    rating: 4.8,
    sessions: 120,
    techStack: ['React', 'JavaScript', 'TypeScript', 'C++'],
  };

  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="flex justify-center ">
        <img
          className="w-32 h-32 rounded-full"
          src={person.profilePicture}
          alt={`${person.name} profile`}
        />
      </div>
      <div className="p-2 text-center">
        <h2 className="text-2xl text-black font-bold mb-2">{person.name}</h2>
        <p className="text-gray-700 mb-4">{person.designation}</p>
        <div className="mb-4">
          <p className="text-gray-700">
            <strong>Rating:</strong> {person.rating} / 5
          </p>
          <p className="text-gray-700">
            <strong>Sessions:</strong> {person.sessions}
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Tech Stack</h3>
          <div className="flex flex-wrap justify-center">
            {person.techStack.map((tech, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm mr-2 mb-2"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperInfoCard;
