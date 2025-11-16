"use client";
import Image from "next/image";

const experiences = [
  {
    role: "Web Developer",
    company: "Department of Holistic Education",
    duration: "Oct 2024 – April 2025",
    image: "/experience/webdev.png",
    points: [
      "Websites were built using Next.js, designed to work smoothly on all screen sizes.",
      "Reusable components were created to keep the code clean, organised, and efficient.",
      "Data and user interactions were managed effectively to ensure everything runs without glitches.",
      "Focus was on delivering a consistent and easy experience across different devices.",
      "Clean layouts and simple navigation helped users find what they needed quickly.",
      "Followed best practices to make the websites fast, reliable, and easy to maintain.",
    ],
  },
  {
    role: "Electronics Testing Intern",
    company: "STQC Directorate (MeitY), Mohali",
    duration: "Mar 2024 – Sept 2024",
    image: "/experience/electronics.jpg",
    points: [
      "Ensured compliance with company guidelines and relevant Indian standards.",
      "Collaboratively analysed test results to support product refinement and protocol optimisation.",
      "Maintained strict quality control standards during testing and development phases.",
      "Generated insightful, data-driven reports based on test outcomes to guide decision-making.",
    ],
  },
  {
    role: "Web Developer Intern",
    company: "Cubicuss",
    duration: "Feb 2024 – Mar 2024",
    image: "/experience/internship.png",
    points: [
      "Completed a 1-month Web Development internship.",
      "Worked with React.js to build responsive and interactive user interfaces.",
      "Focused on developing mobile-friendly layouts and improving user experience.",
      "Gained hands-on experience in component-based architecture.",
      "Collaborated with team members to deliver clean, maintainable code.",
    ],
  },
  

  {
    role: "Web Analytics Consultant",
    company: "Indian School of Business (ISB), Mohali",
    duration: "July 2023 – Aug 2023",
    image: "/experience/analytics.png",
    points: [
      "Collaborated with NeSDA to transform a central government website.",
      "Focused on a user-centric design to improve accessibility.",
      "Helped enhance citizen engagement through better layout and navigation.",
      "Supported e-governance best practices aligned with national digital standards.",
      "Contributed to a modern, efficient, and inclusive digital platform.",
    ],
  },
  {
    role: "MS Office Specialist",
    company: "Freelance / Academic Projects",
    duration: "Ongoing",
    image: "/experience/ms_office.png",
    points: [
      "Created professional reports and documents using Microsoft Word with proper formatting and styling.",
      "Designed impactful presentations in Microsoft PowerPoint with engaging visuals and layouts.",
      "Developed and managed data-driven Excel sheets, applying formulas, charts, and pivot tables for analysis.",
      "Ensured clarity, accuracy, and consistency across all deliverables to maintain a professional standard.",
    ],
},
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-slate-900 py-16 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-400 mb-12">
          💼 Experience
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-slate-800 p-6 md:p-8 rounded-xl shadow-md flex flex-col md:flex-row gap-6"
            >
              {/* Image */}
              <div className="w-full md:w-1/4 flex items-center justify-center">
                <Image
                  src={exp.image}
                  alt={exp.role}
                  width={500}
                  height={500}
                  className="rounded-lg"
                />
              </div>

              {/* Content */}
              <div className="w-full md:w-3/4">
                <div className="mb-2 flex flex-col md:flex-row md:items-center justify-between">
                  <h3 className="text-xl md:text-2xl font-semibold text-yellow-400">
                    {exp.role} – {exp.company}
                  </h3>
                  <span className="text-sm md:text-base text-gray-400 mt-1 md:mt-0">
                    {exp.duration}
                  </span>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm md:text-base">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
