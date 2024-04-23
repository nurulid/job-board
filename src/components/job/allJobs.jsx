'use client';

// import dynamic from 'next/dynamic';
import { useState } from 'react';
import { ToggleDisplay } from './toggleDisplay';
import Card from '../ui/card';

// const Card = dynamic(() => import('@/components/ui/card'), {
//   loading: () => <p>oooooop...</p>,
// });

export const AllJobs = ({ jobs }) => {
  const [activeButton, setActiveButton] = useState('grid');

  const handleToggle = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <>
      <ToggleDisplay handleToggle={handleToggle} activeButton={activeButton} setActiveButton={setActiveButton}/>
      <div
        className={[
          'grid gap-4',
          activeButton === 'grid' ? 'grid-cols-3' : 'grid-cols-1',
        ].join(' ')}
      >
        <Card jobs={jobs} activeButton={activeButton} />
      </div>
    </>
  );
};
