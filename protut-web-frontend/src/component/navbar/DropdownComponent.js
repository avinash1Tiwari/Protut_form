import React from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { Lock, Activity, Flash, Server } from './Icons';

const DropdownComponent = () => {
  const icons = [
    { id: 'lock', name: 'MAANG', icon: <Lock className="text-success" fill="currentColor" size={30} /> },
    { id: 'activity', name: 'Startup', icon: <Activity className="text-secondary" fill="currentColor" size={30} /> },
    { id: 'flash', name: 'Product Based', icon: <Flash className="text-primary" fill="currentColor" size={30} /> },
    { id: 'server', name: 'Service Based', icon: <Server className="text-success" fill="currentColor" size={30} /> },
  ];

  return (
    <>
      <div className="relative inline-block group">
        <div className="flex items-center px-2 rounded-lg hover:bg-black hover:text-white transition duration-300 ease-in-out group-hover:bg-black group-hover:text-white">
          <p className="text-xl font-bvp font-semibold hover:scale-110 cursor-pointer">Products</p>
          <RiArrowDropDownLine className="text-xl hover:scale-110 cursor-pointer" />
        </div>
        <div className="absolute left-0 top-full mt-2 w-64 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
          <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 p-4">
            {icons.map(icon => (
              <li key={icon.id} className="flex items-center gap-2 rounded p-2 text-body-3 font-bvp font-semibold text-metal-600 hover:bg-metal-25 cursor-pointer">
                <p className="font-bvp font-semibold">{icon.icon}</p>
                <h1 className="text-sm">{icon.name}</h1>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default DropdownComponent;
