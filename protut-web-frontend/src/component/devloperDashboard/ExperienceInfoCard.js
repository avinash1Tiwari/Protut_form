import React from 'react';

const ExperienceInfoCard = () => {
  const experiences = [
    {
      companyName: 'Google',
      logo: 'https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg?width=595&height=400&name=image8-2.jpg', 
      duration: 'Apr 2023 - Mar 2024',
    },
    {
      companyName: 'Amazon',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/600px-Amazon_icon.svg.png?20210720180728', 
      duration: 'May 2021 - Mar 2023',
    },
    {
      companyName: 'Microsoft',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png?20210729021049', 
      duration: 'Jun 2019 - Apr 2021',
    },
  ];

  return (
    <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl text-black text-center font-bold mb-4">Work Experience</h2>
      {experiences.map((experience, index) => (
        <div key={index} className="flex items-center mb-4">
          <img
            className="w-12 h-12 rounded-full mr-4"
            src={experience.logo}
            alt={`${experience.companyName} logo`}
          />
          <div>
            <h3 className="text-lg text-black font-semibold">{experience.companyName}</h3>
            <p className="text-gray-600">{experience.duration}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceInfoCard;
