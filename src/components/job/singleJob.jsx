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
  // console.log(jobs)

  return (
    <>
      {jobs.map((job, i) => (
        <div key={i} className="p-3 bg-white rounded-3xl border-[0.5px] border-black">
          <div className="p-7 bg-gray-100 rounded-3xl">
            <h1 className="text-4xl font-semibold font-mono mb-4 leading-[1.2] break-words">{job.title}</h1>
            <h3 className="text-xl text-gray-500 capitalize">
              <Building2 className="inline-block -translate-y-[3px] mr-2"/>
              {job.company_name}
              {job.remote && (<span className="font-semibold inline-block text-sm text-black ml-4 -translate-y-[1px]">Remote</span>)}
            </h3>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: job.description }}
            className="content space-y-4 py-5 px-7"
          />
        </div>
      ))}
    </>
  );
};
