'use client';

// import dynamic from 'next/dynamic';
import { useState } from 'react';
import { ToggleDisplay } from './toggleDisplay';
import Card from '../ui/card';

// const Card = dynamic(() => import('@/components/ui/card'), {
//   loading: () => <p>oooooop...</p>,
// });

export const JobList = ({ jobs }) => {
  const [activeDisplay, setActiveDisplay] = useState('grid');

  // const handleToggle = (display) => {
  //   setActiveDisplay(display);
  // };

  return (
    <>
      <ToggleDisplay activeDisplay={activeDisplay} setActiveDisplay={setActiveDisplay} />
      <div
        className={[
          'grid',
          activeDisplay === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6' : 'grid-cols-1 gap-4',
        ].join(' ')}
      >
        <Card jobs={jobs} activeDisplay={activeDisplay} />
      </div>
    </>
  );
};
