import { useState } from "react";

function Headerdetails() {
    return (
        <div className="min-h-scree">
      {/* Header */}
      <div className="flex bg-blue-600 items-center justify-between px-8 py-3">
        {/* Logo */}
        <img 
          className="w-[150px] h-[60px] object-contain" 
          src="/hirecareerlogo.png" 
          alt="HireCareer logo"       
        />

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
                      
          <button className="text-white font-medium hover:text-gray-200 transition-colors">
          Home
          </button>

          <button className="text-white font-medium hover:text-gray-200 transition-colors">
            About
          </button>
          <button className="text-white font-medium px-6 py-2 border-2 border-white rounded-full hover:bg-white hover:text-blue-600 transition-colors">
            Find Job
          </button>

        </div>
      </div>
    </div>

    );
}
export default Headerdetails;