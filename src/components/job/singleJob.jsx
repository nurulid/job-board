'use client';

import { ArrowUpRightFromSquare, Building2 } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

export const SingleJob = ({ data }) => {
  const currentPath = usePathname();
  const pathSlug = currentPath.split('/').pop();
  const containerRef = useRef(null);

  const filterJob = (data) => {
    return data.data.filter((job) => job.slug == pathSlug);
  };
  const jobs = filterJob(data);
  // console.log(jobs);

  useEffect(() => {
    if (containerRef.current) {
      const links = containerRef.current.querySelectorAll('a');

      links.forEach((link) => {
        link.setAttribute('target', '_blank');
      });
    }
  }, []);

  return (
    <>
      {jobs.map((job, i) => (
        <div
          key={i}
          className="p-3 bg-white rounded-3xl border-[0.5px] border-black"
        >
          <div
            className={[
              'p-7 rounded-3xl',
              job.remote ? 'bg-primary/50' : 'bg-violet-100',
            ].join(' ')}
          >
            <h1 className="text-4xl font-semibold font-mono mb-4 leading-[1.2] break-words">
              {job.title}
            </h1>
            <h3 className="text-xl text-gray-500 capitalize">
              <Building2 className="inline-block -translate-y-[3px] mr-2" />
              {job.company_name}
              {job.remote && (
                <span className="font-semibold inline-block text-sm text-black ml-4 -translate-y-[1px]">
                  Remote
                </span>
              )}
            </h3>
          </div>
          <div
            ref={containerRef}
            dangerouslySetInnerHTML={{ __html: job.description }}
            className="content space-y-4 py-5 px-7"
          />
          <Link
            href={job.url}
            className="flex gap-2 items-center justify-center w-full text-center p-4 border bg-violet-500 rounded-2xl text-white"
            target="_blank"
          >
            Apply <ArrowUpRightFromSquare size={16} />
          </Link>
        </div>
      ))}
    </>
  );
};
