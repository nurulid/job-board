'use client';

import { Grid3X3, Rows3 } from 'lucide-react';
import { useState } from 'react';

export const ToggleDisplay = ({ activeButton, handleToggle }) => {
  // const [activeButton, setActiveButton] = useState('grid');

  // const handleToggle = (buttonName) => {
  //   setActiveButton(buttonName);
  //   onToggle(buttonName); // Call the callback function with the active button value
  // };

  const display = [
    {
      title: 'grid',
      icon: Grid3X3,
    },
    {
      title: 'list',
      icon: Rows3,
    },
  ];

  return (
    <div className="flex gap-1 justify-end p-3">
      {display.map(({ title, icon: Icon }) => (
        <Icon
          key={title}
          size={30}
          onClick={() => handleToggle(title)}
          className={[
            activeButton === title
              ? 'text-purple-700'
              : 'hover:opacity-60 cursor-pointer',
          ].join(' ')}
        />
      ))}
    </div>
  );
};
