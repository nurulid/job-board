
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { SingleJob } from '@/components/job/singleJob';

async function getJobs() {
  const res = await fetch(`https://www.arbeitnow.com/api/job-board-api/`, {
    next: {
      revalidate: 0,
    },
  });
  const jobs = await res.json();
  return jobs;
}

export default async function Page() {
  const data = await getJobs();
  // console.log(data);

  return (
    <>
      <Link
        href="/"
        className="p-2 bg-white rounded-md shadow-md inline-block mb-5 sticky top-24 text-sm hover:shadow transition-all"
      >
        <ChevronLeft className="inline-block -translate-y-[1px]" /> Go back
      </Link>
      <div className="max-w-3xl w-full mx-auto -mt-16">
        <SingleJob data={data} />
      </div>
    </>
  );
}
