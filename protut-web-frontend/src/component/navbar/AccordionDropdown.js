import React from 'react'
import { Accordion } from "keep-react";
import { Lock, Activity, Flash, Server } from './Icons';

const AccordianDropdown = () => {
  const icons = [
    { id: 'lock', name: 'MAANG', icon: <Lock className="text-success" fill="currentColor" size={30} /> },
    { id: 'activity', name: 'Startup', icon: <Activity className="text-secondary" fill="currentColor" size={30} /> },
    { id: 'flash', name: 'Product Based', icon: <Flash className="text-primary" fill="currentColor" size={30} /> },
    { id: 'server', name: 'Service Based', icon: <Server className="text-success" fill="currentColor" size={30} /> },
  ];

  return (
    <div className="block md:hidden">
      <Accordion flush={true}>
        <Accordion.Panel>
          <Accordion.Container>
            <p className="text-lg hover:scale-110 cursor-pointer">Products</p>
            <Accordion.Icon />
          </Accordion.Container>
          <Accordion.Content>
            {icons.map(icon => (
              <li key={icon.id} className="flex cursor-pointer items-center gap-2 rounded p-2 text-body-3 font-medium text-metal-600 hover:bg-metal-25">
                <p className="font-medium">{icon.icon}</p>
                <h1 className="text-sm">{icon.name}</h1>
              </li>
            ))}
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  )
}

export default AccordianDropdown
