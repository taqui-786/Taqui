import { getPageViews } from "@/lib/umami";
import { Eye } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import React from "react";

function HeroName() {
  return (
    <div className="flex items-center justify-between  ">
      <div className="flex items-center gap-4 relative ">
        <div className="absolute -top-24 -left-24 hidden lg:flex -rotate-10 flex-col items-center justify-center select-none transition-all duration-700 undefined">
          <a
            className="text-lg mr-10 select-none text-subtle   cursor-pointer hover:text-title transition-all duration-300 hover:scale-110 shake-on-hover "
            href="mailto:mdtaqui.jhar@gmail.com"
          >
            HIRE ME
          </a>
          <svg
            width="100"
            height="100"
            viewBox="0 0 512 512"
            fill="none"
            className="size-22 rotate-8"
          >
            <path
              d="M 437 441 Q 363 418, 264 351 Q 198 295, 160 225 Q 138 178, 122 119"
              stroke="var(--color-subtle)"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            ></path>
            <path
              d="M 161 149 L 125 73"
              stroke="var(--color-subtle)"
              strokeWidth="12"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            ></path>
            <path
              d="M 123 71 L 83 148"
              stroke="var(--color-subtle)"
              strokeWidth="12"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            ></path>
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-instrument-serif italic font-medium text-title dark:text-gray-50 tracking-wide transition-colors duration-300">
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
    </div>
  );
}

export default HeroName;
