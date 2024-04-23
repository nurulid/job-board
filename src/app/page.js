import { Card } from "@/components/ui/card";

async function getJobs() {
  const res = await fetch(`https://www.arbeitnow.com/api/job-board-api`, {
    cache: 'no-cache',
  });
  const jobs = await res.json();
  return jobs;
}

export default async function Home() {
  const data = await getJobs();
  const jobs = data.data.slice(0, 10);
  // console.log(jobs)
  return (
    <>
      <h1 className="text-3xl font-semibold mb-4">Home</h1>
      <div className="grid grid-cols-3 gap-5">
        <Card jobs={jobs}/>
      </div>
    </>
  );
}
