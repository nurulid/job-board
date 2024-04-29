'use client';

import { useEffect, useState } from 'react';
import { ToggleDisplay } from './toggleDisplay';
import Card from '../ui/card';

const JobListHeader = ({
  pageTitle,
  active,
  jobsData,
  handleAllJobs,
  handleRemoteFilter,
  activeDisplay,
  setActiveDisplay,
}) => {
  return (
    <>
      <h1 className="text-3xl font-semibold mb-4">
        {pageTitle} {`(${jobsData.length})`}
      </h1>
      <div className="flex justify-between items-center">
        <ul className="flex gap-1">
          <li>
            <button
              onClick={handleAllJobs}
              className={[
                'py-1 px-4 border rounded-full transition-all',
                active === 'all'
                  ? 'bg-black text-white'
                  : 'bg-white text-black',
              ].join(' ')}
            >
              All
            </button>
          </li>
          <li>
            <button
              onClick={handleRemoteFilter}
              className={[
                'py-1 px-4 border rounded-full transition-all',
                active === 'remote'
                  ? 'bg-black text-white'
                  : 'bg-white text-black',
              ].join(' ')}
            >
              Remote
            </button>
          </li>
        </ul>
        {/* TODO: Save active state to local storage */}
        <ToggleDisplay
          activeDisplay={activeDisplay}
          setActiveDisplay={setActiveDisplay}
        />
      </div>
    </>
  );
};

export const JobList = ({ jobs, title }) => {
  const [activeDisplay, setActiveDisplay] = useState('grid');
  const [jobsData, setJobsData] = useState(jobs);
  const [pageTitle, setPageTitle] = useState(title);
  const [active, setActive] = useState('all');

  const handleAllJobs = () => {
    setJobsData(jobs);
    setActive('all');
    setPageTitle('All Jobs');
    localStorage.setItem('activeFilter', 'all');
    localStorage.removeItem('filteredJobs');
  };

  const handleRemoteFilter = () => {
    const filterJobs = jobs.filter((job) => job.remote === true);
    setJobsData(filterJobs);
    setActive('remote');
    setPageTitle('Remote Jobs');
    localStorage.setItem('activeFilter', 'remote');
    localStorage.setItem('filteredJobs', JSON.stringify(filterJobs));
  };

  useEffect(() => {
    const storedActive = localStorage.getItem('activeFilter');
    if (storedActive) {
      setActive(storedActive);
    }

    const storedJobs = localStorage.getItem('filteredJobs');
    if (storedJobs) {
      setJobsData(JSON.parse(storedJobs));
    }
  }, []); 

  // useEffect(() => {
  //   setJobsData(jobs);
  // }, []);

  return (
    <>
      <JobListHeader
        pageTitle={pageTitle}
        active={active}
        handleAllJobs={handleAllJobs}
        handleRemoteFilter={handleRemoteFilter}
        activeDisplay={activeDisplay}
        setActiveDisplay={setActiveDisplay}
        jobsData={jobsData}
      />
      <div
        className={[
          'grid transition-all',
          activeDisplay === 'grid'
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'
            : 'grid-cols-1 gap-4',
        ].join(' ')}
      >
        <Card jobs={jobsData} activeDisplay={activeDisplay} />
      </div>
    </>
  );
};
