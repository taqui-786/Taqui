import { getPageViews } from "@/lib/umami";
import { Eye } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import React from "react";

function HeroName() {
  const views = getPageViews()
  return (
    <div className="flex items-center justify-between  ">
     
        <div className="flex items-center gap-4 ">
      
      <h1 className="text-4xl md:text-5xl font-instrument-serif italic font-medium text-title dark:text-gray-50 tracking-tight transition-colors duration-300">
        Md Taqui Imam
      </h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="28"
        height="28"
        fill="#2db6f0"
        className="hover:rotate-360 transition-all duration-300"
      >
        <path
          xmlns="http://www.w3.org/2000/svg"
          fill="#2db6f0"
          d="M15.616 3.268L12 .186L8.383 3.268l-4.737.378l-.378 4.737L.186 12l3.082 3.617l.378 4.737l4.737.378l3.616 3.082l3.617-3.082l4.737-.378l.378-4.737L23.813 12l-3.082-3.617l-.378-4.737zM11 16.414L6.585 12L8 10.586l3 3l5.5-5.5L17.914 9.5z"
        ></path>
      </svg>
    </div>
    <div className="">
{views.then((views)=>{
  return (
    <div className="flex items-center justify-center gap-2">
      <HugeiconsIcon icon={Eye} size={20} />
      <p className="text-sm font-medium text-title dark:text-gray-50 tracking-tight transition-colors duration-300">{views}</p>
    </div>
  )
})}
    </div>
    </div>
  );
}

export default HeroName;
