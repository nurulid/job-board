import * as Tooltip from '@radix-ui/react-tooltip';
import { useState } from 'react';
import { Grid3X3, Rows3 } from 'lucide-react';

export const ToggleDisplay = ({ activeDisplay, setActiveDisplay }) => {
  // const [activeDisplay, setActiveDisplay] = useState('grid');

  // const handleToggle = (display) => {
  //   setActiveDisplay(display);
  //   onToggle(display); // Call the callback function with the active button value
  // };

  const display = [
    {
      title: 'grid',
      icon: Grid3X3,
    },
    {
      title: 'row',
      icon: Rows3,
    },
  ];

  return (
    <div className="flex gap-1 justify-end p-3">
      {display.map(({ title, icon: Icon }) => (
        <Tooltip.Provider key={title} delayDuration={200}>
          <Tooltip.Root>
            <Tooltip.Trigger>
              <Icon
                size={30}
                onClick={() => setActiveDisplay(title)}
                className={[
                  activeDisplay === title
                    ? 'text-purple-700'
                    : 'hover:opacity-60 cursor-pointer',
                ].join(' ')}
              />
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content className='capitalize'>
                {`${title} list`}
                <Tooltip.Arrow className="TooltipArrow" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      ))}
    </div>
  );
};
