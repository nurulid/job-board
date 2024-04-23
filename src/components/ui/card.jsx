import React from 'react';
import Link from 'next/link';
import { formatDateFromTimestamp, getFirstCharacter } from '@/lib/utils';
import { Globe } from 'lucide-react';

function Card({ jobs, activeButton }) {
  // console.log(activeButton)
  return (
    <>
      {jobs.map(
        (
          { slug, company_name, title, remote, tags, location, created_at },
          i
        ) => {
          return (
            <div
              key={i}
              className={[
                'p-2 rounded-3xl bg-white border-[0.5px] border-black',
              ].join(' ')}
            >
              <div
                className={[
                  'p-4 rounded-3xl space-y-8',
                  remote ? 'bg-primary/50' : 'bg-violet-100',
                ].join(' ')}
              >
                {activeButton === "grid" && (
                  <span className="bg-white px-4 py-2 rounded-full text-[15px] inline-block font-[500]">
                    {formatDateFromTimestamp(created_at)}
                  </span>
                )}
                <div className="flex justify-between items-center gap-4">
                  <div className="w-[calc(100%-100px)]">
                    <h3 title={company_name} className="text-xs capitalize mb-1 font-[500] truncate">
                      {company_name}
                    </h3>
                    <h2
                      title={title}
                      className="text-[22px] sm:text-2xl line-clamp-2 leading-[1.2] font-[500]"
                    >
                      {title}
                    </h2>
                  </div>
                  <div className="size-12 uppercase rounded-full bg-black border border-white text-white text-xl text-center leading-[48px] align-middle">
                    {getFirstCharacter(company_name)}
                  </div>
                </div>
                <div className="flex gap-1">
                  {tags.map((tag, i) => (
                    <span
                      key={i}
                      className="border border-gray-400 py-2 px-3 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-center p-4 pb-2">
                <div>
                  <h4 className="font-semibold h-[24px]">{remote && "Remote"}</h4>
                  <h3 className="text-gray-400 font-[500]">
                    <Globe size={14} className="inline -translate-y-[1px]" />{' '}
                    {location}
                  </h3>
                </div>
                <div>
                  {activeButton === "list" && (
                    <span className="bg-white px-4 py-2 rounded-full text-[15px] inline-block font-[500]">
                      {formatDateFromTimestamp(created_at)}
                    </span>
                  )}

                  <Link
                    href={slug}
                    className="py-2 px-4 rounded-full bg-black text-white shadow-md transition-all hover:scale-105"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          );
        }
      )}
    </>
  );
};

export default Card;