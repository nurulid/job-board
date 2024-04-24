import { SingleJob } from "@/components/job/singleJob";

async function getJobs() {
  const res = await fetch(`https://www.arbeitnow.com/api/job-board-api/`, {
    next: {
      revalidate: 30
    }
  });
  const jobs = await res.json();
  return jobs;
}

export default async function Page() {
  const data = await getJobs();
  // console.log(data);

  return (
    <>
      <SingleJob data={data}/>
    </>
  );
}
