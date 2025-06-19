"use client";

import { useTheme } from "next-themes";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";

const NewsLatterBox = () => {
  const { theme } = useTheme();

  return (
    <div className="relative z-10 rounded-2xl bg-slate-950 p-20 shadow-three dark: sm:p-11 lg:p-8 xl:p-11">
      <h3 className="mb-6 text-2xl font-bold leading-tight text-white">
        Make Connection on Social Media
      </h3>

      <div className="mb-6 flex items-center justify-center gap-4">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-500 transition"
        >
          <FaFacebookF size={24} />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-sky-400 transition"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-600 transition"
        >
          <FaLinkedinIn size={24} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-pink-500 transition"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 transition"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://wa.me/919999999999" // 🔁 Replace with your actual WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-green-400 transition"
        >
          <FaWhatsapp size={24} />
        </a>
      </div>

      <p className="text-center text-base leading-relaxed text-gray-400 pt-3">
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
