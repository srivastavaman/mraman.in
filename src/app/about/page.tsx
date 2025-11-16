"use client";
import {
  FaHtml5,
  FaReact,
  FaGithub,
  FaJava,
  FaNetworkWired,
} from "react-icons/fa";
import { SiMongodb, SiBootstrap, SiArduino, SiEspressif } from "react-icons/si";
import { SiWordpress } from "react-icons/si";
import { FaSearch } from "react-icons/fa";

import { useState } from "react";

const Knowmore = () => {
  const [open, setOpen] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState("");

  const handleVisit = (url) => {
    setRedirectUrl(url);
    setOpen(true);
  };

  const confirmRedirect = () => {
    window.open(redirectUrl, "_blank", "noopener,noreferrer");
    setOpen(false);
  };

  return (
    <section
      id="knowmore"
      className="bg-slate-950 px-6 py-16 text-white md:px-12 lg:px-24"
    >
      <div className="relative mx-auto max-w-5xl">
        {/* Resume Button */}
        <div className="absolute right-0 top-0">
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="rounded-md bg-blue-500 px-4 py-2 font-medium text-white shadow-md transition duration-300 hover:bg-blue-600"
          >
            🖨️ Print
          </a>
        </div>

        {/* 🎓 Education */}
        <h2 className="mb-6 mt-4 border-b border-blue-500 pb-2 text-4xl font-bold text-blue-400">
          📚 Education
        </h2>
        <div className="space-y-8 text-base text-gray-300">
          <div>
            <h3 className="text-xl font-semibold text-white">
              🎓 I.K. Gujral Punjab Technical University, Jalandhar (2020–2024)
            </h3>
            <p className="text-sm text-gray-400">
              B.Tech in Electronics and Communication Engineering
            </p>
            <p className="mb-2">
              Percentage:{" "}
              <span className="font-semibold text-blue-400">73%</span>
            </p>
            <ul className="ml-6 list-disc space-y-1 text-sm">
              <li>Built projects in VLSI, IoT, and Digital Communication.</li>
              <li>Attended workshops on AI, IoT, and VLSI.</li>
              <li>Strong foundation in embedded systems and circuit design.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">
              🏫 S.G. Public School, Mughal Sarai, Uttar Pradesh (2016–2019)
            </h3>
            <ul className="ml-4 mt-2 list-disc space-y-1 text-sm">
              <li>
                Senior Secondary (2018–2019) – Science Stream –{" "}
                <span className="font-semibold text-blue-400">70%</span>
              </li>
              <li>
                Secondary Education (2016–2017) –{" "}
                <span className="font-semibold text-blue-400">75%</span>
              </li>
              <li>Active in exhibitions, quizzes, and science competitions.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">
              💻 Diploma in Computer Application, DCA (2016)
            </h3>
            <p className="text-sm text-gray-400">
              Completed Diploma in Computer Application with{" "}
              <span className="font-semibold text-blue-400">80%</span>
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">
              💻 Course on Computer Concepts, CCC ( 2019)
            </h3>
            <p className="text-sm text-gray-400">
              Successfully completed CCC certification in 2019.
            </p>
          </div>
        </div>

        {/* 💼 Experience */}
        <h2 className="mb-6 mt-12 border-b border-blue-500 pb-2 text-4xl font-bold text-blue-400">
          💼 Experience
        </h2>
        <ul className="ml-4 list-disc space-y-6 text-base text-gray-300">
          <li>
            <span className="font-semibold text-white">Web Developer – </span>
            <a
              href="https://www.dhe.org.in"
              className="text-blue-400 hover:underline"
              target="_blank"
            >
              Department of Holistic Education
            </a>{" "}
            (Oct 2024 – Present)
            <ul className="ml-4 mt-1 list-disc text-sm">
              <li>Built responsive websites using React.js/Next.js</li>
              <li>
                Ensured clean code, reusable components, and UI consistency
              </li>
              <li>Focused on responsive design for all devices</li>
            </ul>
          </li>

          <li>
            <span className="font-semibold text-white">
              Electronics Testing Intern –{" "}
            </span>
            <a
              href="https://www.stqc.gov.in/etdc-mohali-2"
              className="text-blue-400 hover:underline"
              target="_blank"
            >
              STQC, MeitY
            </a>{" "}
            (Mar 2024 – Sept 2024)
            <ul className="ml-4 mt-1 list-disc text-sm">
              <li>Tested electronics for compliance with Indian standards</li>
              <li>Generated insightful test reports for product improvement</li>
              <li>Maintained strict quality control and testing protocols</li>
            </ul>
          </li>

          <li>
            <span className="font-semibold text-white">
              Web Developer Intern –{" "}
            </span>
            <a
              href="https://www.cubicuss.in"
              className="text-blue-400 hover:underline"
              target="_blank"
            >
              Cubicuss
            </a>{" "}
            (Feb 2024 – Mar 2024)
            <ul className="ml-4 mt-1 list-disc text-sm">
              <li>Built responsive interfaces with React.js</li>
              <li>Focused on mobile-first layout and UI polish</li>
              <li>Applied modern web dev best practices</li>
            </ul>
          </li>

          <li>
            <span className="font-semibold text-white">
              Web Analytics Consultant –{" "}
            </span>
            <a
              href="https://www.isb.edu/"
              className="text-blue-400 hover:underline"
              target="_blank"
            >
              Indian School of Business (ISB)
            </a>{" "}
            (Jul 2023 – Aug 2023)
            <ul className="ml-4 mt-1 list-disc text-sm">
              <li>Revamped govt. site for better accessibility and UI/UX</li>
              <li>Aligned with NeSDA standards for e-governance</li>
            </ul>
          </li>

          <li>
            <span className="font-semibold text-white">Java Trainee – </span>
            <a
              href="https://fuelfornation.com"
              className="text-blue-400 hover:underline"
              target="_blank"
            >
              FUEL
            </a>{" "}
            (Jun 2023 – Jul 2023)
            <ul className="ml-4 mt-1 list-disc text-sm">
              <li>Hands-on in OOPs, data structures, exception handling</li>
              <li>Built modular Java apps with good coding practices</li>
            </ul>
          </li>
        </ul>

        {/* 🛠 Projects */}
        <h2 className="mb-6 mt-12 border-b border-blue-500 pb-2 text-4xl font-bold text-blue-400">
          🛠 Projects
        </h2>
        <ul className="ml-4 list-disc space-y-3 text-base text-gray-300">
          <li>
            <span className="font-semibold text-white">
              PDF File Compressor:
            </span>{" "}
            Python + Aspose-based tool to compress PDF sizes effectively.
          </li>
          <li>
            <span className="font-semibold text-white">Book Heaven:</span>{" "}
            Full-stack book-selling website with admin and cart functionality.
          </li>
          <li>
            <span className="font-semibold text-white">SAATHI:</span> IoT-based
            vehicle accident detection and alert system.
          </li>
          <li>
            <span className="font-semibold text-white">VARUN:</span> Smart
            water-cooling system for energy saving and efficiency.
          </li>
        </ul>

        {/* 🚀 Live Projects */}
        <h2 className="mb-6 mt-12 border-b border-blue-500 pb-2 text-4xl font-bold text-blue-400">
          🚀 Live Projects
        </h2>
        <ul className="ml-4 list-disc space-y-3 text-base text-gray-300">
          <li>
            <span className="font-semibold text-white">
              Director’s Website (WordPress):
            </span>{" "}
            <button
              onClick={() => handleVisit("https://www.drthakurskr.com")}
              className="text-blue-400 hover:underline"
            >
              Visit Project
            </button>{" "}
            – Professional portfolio & information hub for Dr. S.K.R. Thakur
            built on WordPress.
          </li>

          <li>
            <span className="font-semibold text-white">
              General Studies Blog (WordPress):
            </span>{" "}
            <button
              onClick={() => handleVisit("https://blog.mraman.in/")}
              className="text-blue-400 hover:underline"
            >
              Visit Blog
            </button>{" "}
            – Knowledge-sharing blog on general studies for competitive exams &
            latest news updates.
          </li>

          <li>
            <span className="font-semibold text-white">
              IAAS – Semiconductor & Space Tech (Next.js):
            </span>{" "}
            <button
              onClick={() => handleVisit("https://www.iaas.org.in/")}
              className="text-blue-400 hover:underline"
            >
              Visit Project
            </button>{" "}
            – Next.js-powered portal for semiconductor & space tech, promoting
            academic–industry collaboration.
          </li>

          <li>
            <span className="font-semibold text-white">
              Shiksha Mahakumbh Abhiyan (Next.js):
            </span>{" "}
            <button
              onClick={() => handleVisit("https://www.rase.co.in/")}
              className="text-blue-400 hover:underline"
            >
              Visit Project
            </button>{" "}
            – Educational outreach platform to promote literacy, awareness, and
            showcase events.
          </li>

          <li>
            <span className="font-semibold text-white">
              Cubicuss – Innovation Platform (Next.js):
            </span>{" "}
            <button
              onClick={() => handleVisit("https://www.cubicuss.in/")}
              className="text-blue-400 hover:underline"
            >
              Visit Project
            </button>{" "}
            – Sustainable innovation platform with SSR optimization, modular
            architecture, and interactive UI.
          </li>
        </ul>

        {/* Confirmation Modal */}
        {open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
            <div className="w-80 rounded-2xl bg-gray-900 p-6 text-white shadow-lg">
              <h3 className="mb-4 text-lg font-semibold">Confirm Navigation</h3>
              <p className="mb-6 text-gray-300">
                You are about to leave this site. Do you want to continue?
              </p>
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-lg bg-gray-700 px-4 py-2 hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmRedirect}
                  className="rounded-lg bg-blue-500 px-4 py-2 hover:bg-blue-600"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 🧰 Skills */}
        <h2 className="mb-6 mt-12 border-b border-blue-500 pb-2 text-4xl font-bold text-blue-400">
          🧰 Technical Skills
        </h2>
        <div className="grid grid-cols-2 gap-4 text-base text-gray-300 md:grid-cols-3">
          <div>
            <FaHtml5 className="mr-2 inline text-orange-500" /> HTML / CSS
          </div>
          <div>
            <FaReact className="mr-2 inline text-cyan-400" /> React / Next.js
          </div>
          <div>
            <SiMongodb className="mr-2 inline text-green-500" /> MongoDB
          </div>
          <div>
            <SiBootstrap className="mr-2 inline text-purple-500" /> Bootstrap
          </div>
          <div>
            <FaGithub className="mr-2 inline" /> Git / GitHub
          </div>
          <div>
            <FaJava className="text-yellow-500 mr-2 inline" /> Java
          </div>
          <div>
            <SiWordpress className="mr-2 inline text-blue-600" /> WordPress
          </div>
          <div>
            <SiEspressif className="mr-2 inline text-red-500" /> ESP32
          </div>
          <div>
            <FaSearch className="mr-2 inline text-green-400" /> SEO
          </div>
        </div>
      </div>
    </section>
  );
};

export default Knowmore;
