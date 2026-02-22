import { useState } from "react";

function Overview() {
  return (
    <div className="w-[400px] bg-white p-6 rounded-xl shadow-md border border-blue-600">

      <h2 className="text-2xl font-semibold mb-4 text-center text-black">Job Overview</h2>

      <div className="flex flex-col gap-2 text-sm">

        <div className="flex justify-between">
          <span className="font-semibold text-black">Posted date :</span>
          <span className="font-medium text-gray-500">Tue, 18 - 11 - 2025</span>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold text-black">Level :</span>
          <span className="font-medium text-gray-500">Entry Level</span>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold text-black">Location :</span>
          <span className="font-medium text-gray-500">Phnom Penh</span>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold text-black">Vacancy :</span>
          <span className="font-medium text-gray-500">1 Post(s)</span>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold text-black">Language :</span>
          <span className="font-medium text-gray-500">English</span>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold text-black">Skill :</span>
          <span className="font-medium text-gray-500">Good</span>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold text-black">Job nature :</span>
          <span className="font-medium text-gray-500">Full Time</span>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold text-black">Salary Rank :</span>
          <span className="font-medium text-gray-500">$200 - $500</span>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold text-black">Experience :</span>
          <span className="font-medium text-gray-500">2 Year(s)</span>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold text-black">Application date :</span>
          <span className="font-medium text-gray-500">Thu, 18 - 12 - 2025</span>
        </div>
      </div>

      {/* Button */}
            <button
            className="
                text-xl
                mt-6 w-full
                text-white
                bg-blue-600
                border-2 border-black
                font-medium
                px-1 py-2
                rounded-full
                transition-all
                hover:bg-white
                hover:text-black
                hover:border-blue-600
            "
            >
            Apply Now
            </button>
    </div>
    
  );
}

export default Overview;
