import React from 'react';
import { FaMedium, FaLinkedin, FaTwitter } from 'react-icons/fa';

const SocialProfiles = () => {
  const profiles = [
    { name: 'Medium', icon: <FaMedium />, url: 'https://medium.com' },
    { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://linkedin.com' },
    { name: 'Twitter', icon: <FaTwitter />, url: 'https://twitter.com' },
  ];

  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl text-black text-center font-bold mb-4 text-center">Social Profiles</h2>
      <div className="flex justify-around">
        {profiles.map((profile, index) => (
          <a
            key={index}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full text-gray-700 hover:bg-gray-200 transition-colors"
            aria-label={profile.name}
          >
            <span className="text-2xl">{profile.icon}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialProfiles;
