"use client";

import { Building2 } from "lucide-react";
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
        <div key={i} className="p-10 bg-white rounded-3xl border-[0.5px] border-black">
          <h1 className="text-4xl font-semibold mb-4">{job.title}</h1>
          <h3 className="text-xl text-gray-500 mb-8 capitalize">
            <Building2 className="inline-block -translate-y-[3px] mr-2"/>
            {job.company_name}
            {job.remote && (<span className="font-semibold inline-block text-sm text-black ml-4">Remote</span>)}
          </h3>
          <div
            dangerouslySetInnerHTML={{ __html: job.description }}
            className="content space-y-4"
          />
          <a href={job.url}>Lessgo</a>
        </div>
      ))}
    </>
  );
};
