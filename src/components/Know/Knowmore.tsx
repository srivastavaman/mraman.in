"use client";

import {
  FaHtml5,
  FaReact,
  FaGithub,
  FaJava,
  FaNetworkWired,
} from "react-icons/fa";
import { SiMongodb, SiBootstrap, SiArduino } from "react-icons/si";

const Knowmore = () => {
  return (
    <section
      id="knowmore"
      className="bg-slate-950 px-6 py-16 text-white md:px-12 lg:px-24"
    >
      <div className="relative mx-auto max-w-5xl">
        {/* 📄 Resume Button */}
        <div className="absolute right-0 top-0">
          <a
            href="/resume.pdf"
            download
            className="rounded-md bg-blue-500 px-4 py-2 font-medium text-white shadow-md transition duration-300 hover:bg-blue-600"
          >
            Download
          </a>
        </div>

        {/* 🎓 Education */}
        <h2 className="mb-6 mt-4 border-b border-blue-500 pb-2 text-4xl font-bold">
          📚 Education
        </h2>
        <div className="space-y-5 text-gray-300">
          <div>
            🎓{" "}
            <strong> <a href="https://ptu.ac.in/">I.K. Gujral Punjab Technical University</a> – Jalandhar</strong>
            <br />
            <span>B.Tech in Electronics and Communication Engineering</span>
            <br />
            <span className="font-semibold text-blue-400">73%</span>
          </div>
          <div>
            🏫 <strong>S.G. Public School – Mughal Sarai, Uttar Pradesh</strong>
            <br />
            Intermediate (Science):{" "}
            <span className="font-semibold text-blue-400">70%</span>
            <br />
            Secondary: <span className="font-semibold text-blue-400">75%</span>
          </div>
        </div>

        {/* 💼 Experience */}
        <h2 className="mb-6 mt-12 border-b border-blue-500 pb-2 text-4xl font-bold">
          💼 Experience
        </h2>
        <div className="space-y-6 text-gray-300">
          <div>
            <strong>Web Developer</strong>
            <br />
            <a
              href="https://www.dhe.org.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Department of Holistic Education
            </a>
            <br />
            <small>
              Designed and developed responsive, user-friendly websites using
              React.js, ensuring seamless user experiences across devices.
            </small>
            <br />
            <span className="text-sm text-gray-400">Oct 2024 – Present</span>
          </div>
          <div>
            <strong>Electronics Testing Intern</strong>
            <br />
            <a
              href="https://www.stqc.gov.in/etdc-mohali-2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              (STQC) Standardization Testing and Quality Certification (MeitY)
            </a>
            <br />
            <small>
              To ensure compliance with company and Indian standards. Analysing
              results collaboratively, I contributed to product refinement and
              protocol optimization, while maintaining strict quality standards,
              I also played a pivotal role in generating insightful reports
              based on the test results.
            </small>
            <br />
            <span className="text-sm text-gray-400">Mar 2024 – Sept 2024</span>
          </div>
          <div>
            <strong>Web Developer Intern</strong>
            <br />
            <a
              href="https://www.cubicuss.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Cubicuss
            </a>
            <br />
            <small>
              Completed a 1-month Web Development internship at Cubicuss,
              working with React.js to build responsive user interfaces.
            </small>
            <br />
            <span className="text-sm text-gray-400">Feb 2024 – Mar 2024</span>
          </div>
          <div>
            <strong>Web Analytics Consultant</strong>
            <br />
            <a
              href="https://www.isb.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Indian School of Business (ISB)
            </a>
            <br />
            <small>
              Revamped a Central Government web portal in alignment with{" "}
              <a href="">NeSDA</a> standards, driving a seamless user
              experience, improved service accessibility, and increased citizen
              participation.
            </small>
            <br />
            <span className="text-sm text-gray-400">Jul 2023 – Aug 2023</span>
          </div>
          <div>
            <strong>Java Trainee</strong>
            <br />
            <a
              href="https://fuelfornation.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              FUEL (Friends Union for Energising Lives)
            </a>
            <br />
            <small>
            Successfully completed training in Core Java Programming, gaining hands-on experience with object-oriented programming (OOP), data structures, exception handling, multithreading, and file I/O. Developed small-scale Java applications and focused on writing clean, efficient, and modular code aligned with industry best practices.


            </small>
            <br />
            <span className="text-sm text-gray-400">Jun 2023 – Jul 2023</span>
          </div>
        </div>

        {/* 🛠 Projects */}
        <h2 className="mb-6 mt-12 border-b border-blue-500 pb-2 text-4xl font-bold">
          🛠 Projects
        </h2>
        <ul className="list-inside list-disc space-y-4 text-gray-300">
          <li>
            <strong>PDF File Compressor:</strong> A document compression tool
            built using{" "}
            <span className="text-blue-300">Python + Aspose Words</span> for
            efficient file size reduction.
          </li>
          <li>
            <strong>Book Heaven:</strong> A full-stack{" "}
            <span className="text-blue-300">book-selling web application</span>{" "}
            with search, cart, and admin panel features.
          </li>
          <li>
            <strong>SAATHI:</strong> An{" "}
            <span className="text-blue-300">
              IoT-based vehicle accident detection system
            </span>{" "}
            designed for emergency response.
          </li>
          <li>
            <strong>VARUN:</strong> A{" "}
            <span className="text-blue-300">smart water-cooling system</span>{" "}
            leveraging sensors for energy efficiency and user comfort.
          </li>
        </ul>

        {/* ⚙️ Skills */}
        <h2 className="mb-6 mt-12 border-b border-blue-500 pb-2 text-4xl font-bold">
          🧰 Technical Skills
        </h2>
        <div className="grid grid-cols-2 gap-4 text-gray-300 md:grid-cols-3">
          <div>
            <FaHtml5 className="mr-2 inline text-orange-500" />
            HTML / CSS
          </div>
          <div>
            <FaReact className="mr-2 inline text-cyan-400" />
            React / Next.js
          </div>
          <div>
            <SiMongodb className="mr-2 inline text-green-500" />
            MongoDB
          </div>
          <div>
            <SiBootstrap className="mr-2 inline text-purple-500" />
            Bootstrap
          </div>
          <div>
            <FaGithub className="mr-2 inline" />
            Git / GitHub
          </div>
          <div>
            <FaJava className="text-yellow-600 mr-2 inline" />
            Java
          </div>
          <div>
            <FaNetworkWired className="mr-2 inline text-pink-400" />
            Computer Networks
          </div>
          <div>
            <SiArduino className="mr-2 inline text-blue-400" />
            Arduino
          </div>
        </div>
      </div>
    </section>
  );
};

export default Knowmore;
