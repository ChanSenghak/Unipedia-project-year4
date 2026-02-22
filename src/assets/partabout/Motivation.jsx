import { useState } from "react";

function Motivation() {

    // You can change these icons later
    const icons = [
        { name: "HireCareer", img: "/facebook.png" },
        { name: "@HireCareer_job", img: "/telegram.png" },
        { name: "@Hire_Career", img: "/Instargram.png" },
        { name: "@hireCareer.in", img: "/linkin.png" },
    ];

    return (
        <div className="flex flex-col md:flex-row items-center gap-20 p-10 md:p-20 max-w-7xl mx-auto bg-white">
            
            {/* Text Section */}
            <div className="flex-1">
                <h1 className="text-blue-600 text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                    HIRECAREER
                </h1>

                <p className="text-2xl md:text-3xl leading-relaxed">
                    Hirecareer was created to make job searching in Cambodia simpler & more effective 
                    by giving people a trusted platform where they can easily discover opportunities 
                    that match their skills and goals.
                </p>

                <br /><br />

                {/* Blue Box with 4 Images */}
                <div className="flex items-center justify-between px-10 py-10 border-2 border-blue-600 rounded-xl w-full">

                    {icons.map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <img
                                src={item.img}
                                alt={item.name}
                                className="w-20 h-20 object-contain"
                            />
                            <p className="text-sm font-semibold mt-2">{item.name}</p>
                        </div>
                    ))}

                </div>
            </div>

            {/* Image Section */}
            <div>
                <img
                    src="/profile.png"
                    alt="Profile"
                    className="w-64 md:w-80 lg:w-[380px] rounded-xl object-cover shadow-xl border-2 border-blue-600 border-opacity-70 bg-blue-600 bg-opacity-20"
                />
            </div>

        </div>
    );
}

export default Motivation;
