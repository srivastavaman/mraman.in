"use client";

import { useTheme } from "next-themes";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { FiBookOpen } from "react-icons/fi";

const NewsLatterBox = () => {
  const { theme } = useTheme();

  return (
    <div className="dark: relative z-10 rounded-2xl bg-slate-950 p-20 shadow-three sm:p-11 lg:p-8 xl:p-11">
      <h3 className="mb-6 text-2xl font-bold leading-tight text-white">
        Make Connection on Social Media
      </h3>

      <div className="mb-6 flex flex-wrap items-center justify-center gap-4">
        <a
          // href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white transition hover:text-blue-500"
        >
          <FaFacebookF size={24} />
        </a>

        <a
          href="https://www.linkedin.com/in/srivastavaman/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white transition hover:text-blue-600"
        >
          <FaLinkedinIn size={24} />
        </a>
        <a
          // href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white transition hover:text-pink-500"
        >
          <FaInstagram size={24} />
        </a>

        <a
          // href="https://bit.ly/mywhatsappchat" // 🔁 Use your shortened URL
          target="_blank"
          rel="noopener noreferrer"
          className="text-white transition hover:text-green-400"
        >
          <FaWhatsapp size={24} />
        </a>

        <a
          href="https://youtube.com/@kuch_alag_sekho"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white transition hover:text-red-500"
        >
          <FaYoutube size={24} />
        </a>
        <a
          href="https://blog.mraman.in"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-400 text-white transition"
        >
          <FiBookOpen size={24} />
        </a>
      </div>

      <p className="pt-3 text-center text-base leading-relaxed text-gray-400">
        Follow us to stay updated with our latest work and content!
      </p>

      {/* Optional SVG Decoration */}
      <span className="absolute left-2 top-7">
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
