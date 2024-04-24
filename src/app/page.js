import { JobList } from '@/components/job/jobList';

async function getJobs() {
  const res = await fetch(`https://www.arbeitnow.com/api/job-board-api`, {
    next: {
      revalidate: 30,
    },
  });
  const jobs = await res.json();
  return jobs;
}

export default async function Home() {
  const data = await getJobs();
  const jobs = data?.data;
  // console.log(jobs)
  return (
    <>
      <h1 className="text-3xl font-semibold mb-4">Home</h1>
      <JobList jobs={jobs}/>
    </>
  );
}
