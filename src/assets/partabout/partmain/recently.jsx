import { useState } from "react";

export default function RecentlyJobs() {
  const [selectedJob, setSelectedJob] = useState(null);

  const jobs = [
    {
      id: 1,
      title: "Children English Teacher",
      salary: "$250-$300",
      location: "Toul Kork",
      experience: "1 Year(s)",
      range: "$200 - $500",
      city: "Phnom Penh, Khan Toul Kork",
      time: "7 hours ago",
      type: "Full Time"
    },
    {
      id: 2,
      title: "Children English Teacher",
      salary: "$250-$300",
      location: "Toul Kork",
      experience: "1 Year(s)",
      range: "$200 - $500",
      city: "Phnom Penh, Khan Toul Kork",
      time: "7 hours ago",
      type: "Full Time"
    },
    {
      id: 3,
      title: "Children English Teacher",
      salary: "$250-$300",
      location: "Toul Kork",
      experience: "1 Year(s)",
      range: "$200 - $500",
      city: "Phnom Penh, Khan Toul Kork",
      time: "7 hours ago",
      type: "Full Time"
    },
    {
      id: 4,
      title: "Children English Teacher",
      salary: "$250-$300",
      location: "Toul Kork",
      experience: "1 Year(s)",
      range: "$200 - $500",
      city: "Phnom Penh, Khan Toul Kork",
      time: "7 hours ago",
      type: "Full Time"
    }
  ];

  return (
    <div className="w-full flex flex-col items-center mt-10 px-4">
      
      {/* Title */}
      <h1 className="text-5xl font-semibold italic text-black mb-10">
        Recently Jobs
      </h1>

      {/* Job List */}
      <div className="w-full max-w-4xl bg-gray-100 rounded-xl shadow-sm p-6 space-y-6">

        {jobs.map((job) => (
          <div
            key={job.id}
            onClick={() => setSelectedJob(job.id)}   // <--- SELECT JOB
            className={`
              cursor-pointer p-4 rounded-lg transition-all duration-100
              ${selectedJob === job.id 
                ? "border-2 border-blue-500 shadow-md bg-blue-50"   // highlight
                : "border border-transparent"}                     // normal
            `}
          >
            <div className="flex justify-between items-start">
              
              {/* Left text */}
              <div>
                <p className="font-semibold text-black">
                  {job.title} - ({job.salary}) - {job.location}
                </p>
                <p className="text-sm">
                  Experience: {job.experience} | {job.range}
                </p>
                <p className="text-sm">| {job.city}</p>
              </div>

              {/* Right button */}
              <div className="flex flex-col items-center">
                <button className="bg-blue-500 text-white px-6 py-2 rounded-xl text-lg font-semibold shadow">
                  {job.type}
                </button>
                <span className="text-xs mt-2">{job.time}</span>
              </div>

            </div>

            {/* separator */}
            <hr className="border-t border-gray-300 mt-4" />
          </div>
        ))}

      </div>

      {/* Explore Button */}
      <button className="mt-8 px-10 py-3 flex flex-col items-center justify-center p-6 rounded-lg cursor-pointer transition-all duration-200 border-2 bg-white border-black shadow-lg hover:shadow-xl hover:scale-[1.07] hover:border-blue-500">
        EXPLORE ALL JOBS
      </button>
    </div>
  );
}
