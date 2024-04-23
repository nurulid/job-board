"use client";

import { usePathname } from "next/navigation";

export const SingleJob = ({ data }) => {
  const currentPath = usePathname();
  const pathSlug = currentPath.split("/").pop();

  const filterJob = (data) => {
    return data.data.filter((job) => job.slug == pathSlug);
  };

  const jobs = filterJob(data);

  return (
    <>
      {jobs.map((job, i) => (
        <div key={i}>
          <h1>{job.title}</h1>
          <h3>{job.company_name}</h3>
          <div
            dangerouslySetInnerHTML={{ __html: job.description }}
            className="content mt-4"
          />
        </div>
      ))}
    </>
  );
};
