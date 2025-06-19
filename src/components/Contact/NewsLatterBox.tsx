"use client";

import { useTheme } from "next-themes";

const NewsLatterBox = () => {
  const { theme } = useTheme();

  return (
    <div className="relative z-10 rounded-2xl bg-slate-950 p-8 shadow-three dark: sm:p-11 lg:p-8 xl:p-11">
      <h3 className="mb-4 text-2xl font-bold leading-tight text-white ">
        Subscribe to receive future updates
      </h3>

      <div>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="border-stroke mb-4 w-full rounded-md border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-blue-500"
        />
        <input
          type="submit"
          value="Subscribe Now"
          className="mb-5 w-full cursor-pointer items-center justify-center rounded-xl bg-blue-600 px-9 py-4 text-base font-medium text-white shadow-submit transition duration-300 hover:bg-blue-700"
        />
        <p className="text-center text-base leading-relaxed text-body-color dark:text-gray-400">
          Please don’t send any spam mail.
        </p>
      </div>

      {/* SVG decorative shapes */}
      <span className="absolute left-2 top-7">
        {/* (keep all your original SVGs here unchanged except color logic, updated below) */}
        <svg
          width="57"
          height="65"
          viewBox="0 0 57 65"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M0.407629 15.9573L39.1541 64.0714L56.4489 0.160793L0.407629 15.9573Z"
            fill="url(#paint0_linear_1028_600)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1028_600"
              x1="-18.3187"
              y1="55.1044"
              x2="37.161"
              y2="15.3509"
              gradientUnits="userSpaceOnUse"
            >
              <stop
                stopColor={theme === "light" ? "#3FFF0B" : "#ffffff"}
                stopOpacity="0.62"
              />
              <stop
                offset="1"
                stopColor={theme === "light" ? "#3FFF0B" : "#ffffff"}
                stopOpacity="0"
              />
            </linearGradient>
          </defs>
        </svg>
      </span>

      
    </div>
  );
};

export default NewsLatterBox;
