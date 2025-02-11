"use client"
import React, { useEffect, useState } from "react";

const MainSection = () => {
  const [animateBoat, setAnimateBoat] = useState(false);

  useEffect(() => {
    // Trigger the animation after a short delay to ensure smooth entry
    const timer = setTimeout(() => {
      setAnimateBoat(true);
    }, 10);

    return () => {
      clearTimeout(timer)
    }
  }, []);

  return ( 
    <div className="relative z-0">
      <img
        src="/pictures/map.png"
        alt="Background"
        className="absolute w-[60%] brightness-[180] object-cover z-0 fill-gray-200"
      />
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 h-[500px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center text-center md:text-left md:ml-10">
          <h1 className="font-gideon-roman text-5xl md:text-8xl leading-tight mb-4 cursor-pointer font-gideonroman">
            Personalize your travel planning with STA
          </h1>
          <p className="text-[#a09999] font-romana">
            The traveller where you can select your desired activity and
            destinations of your choice for vacations.
          </p>
        </div>
        <div className="relative flex justify-center items-center mt-10 md:mt-0">
          <img
            src="/pictures/boat-removebg-preview.png"
            alt="Boat"
            className={`absolute w-64 md:w-[500px] z-20 transition-transform duration-1000 ${
              animateBoat ? "animate-boatMove" : "opacity-0"
            }`}
          />
          <img
            src="/pictures/Mask.png"
            alt="Mask"
            className="w-64 md:w-[500px] z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
