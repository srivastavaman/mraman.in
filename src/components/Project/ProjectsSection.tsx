"use client";

import Image from "next/image";

const projects = [
  {
    title: "Cubicuss – Innovation Platform",
    description: `Next.js-based sustainable innovation platform:
    - Optimized performance with SSR.
    - Eco-conscious UI reflecting mission.
    - Modular and scalable architecture.
    - Interactive experience using Framer Motion.`,
    image: "/projects/cubicuss.jpeg",
    link: "https://cubicuss.example.com",
  },
  {
    title: "IAAS – Semiconductor & Space Tech",
    description: `Next.js-powered portal exploring:
    - Semiconductor and space technologies
    - Academic-industry collaboration
    - Clean, responsive and scalable design`,
    image: "/projects/IAAS.jpg",
    link: "https://iaas.example.com",
  },
  {
    title: "Varun – Smart IoT Power Saver",
    description: `Arduino-based IoT system that:
    - Saves power by monitoring real-time usage
    - Uses sensors for smart decision-making
    - Has a modern Next.js UI for data insights`,
    image: "/projects/varun.png",
    link: "https://github.com/yourname/varun-power-saver",
  },
  {
    title: "Shiksha Mahakumbh Abhiyan",
    description: `Next.js-based educational outreach:
    - Promotes literacy & awareness
    - Showcases success stories and events
    - Mobile-optimized and inclusive design`,
    image: "/projects/SK.jpg",
    link: "https://github.com/yourname/shiksha-mahakumbh",
  },
  {
    title: "Tech-Policy Hands-on Boot Camp – ISB x NeSDA",
    description: `Collaborated on a digital transformation initiative focused on public service delivery.
    - Revamped government platform for accessibility and mobile optimization.
    - Promoted user literacy, inclusivity & awareness.
    - Integrated real-time feedback and citizen stories to foster engagement.`,
    image: "/projects/ISB.jpeg",
    link: "https://github.com/yourname/shiksha-mahakumbh",
  }
  
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="flex min-h-screen flex-col justify-center overflow-hidden bg-slate-950 px-4 py-16 text-white sm:px-6 sm:py-20"
    >
      <div className="container mx-auto">
        <h2 className="mb-10 text-center text-3xl font-bold sm:mb-12 sm:text-4xl">
          🚀 My Projects
        </h2>

        {/* Horizontal scroll container */}
        <div className="group relative">
          <div className="scroll-track flex w-max gap-4 whitespace-nowrap group-hover:[animation-play-state:paused] sm:gap-6 md:gap-8 overflow-hidden">
            {[...projects, ...projects].map((project, idx) => (
              <div
                key={idx}
                className="w-[260px] flex-shrink-0 rounded-xl bg-slate-800 shadow-lg transition duration-300 hover:shadow-2xl sm:w-[320px] md:w-[400px]"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 260px, (max-width: 768px) 320px, 400px"
                  />
                </div>

                <div className="p-4 sm:p-6 space-y-2 sm:space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-white break-words whitespace-normal leading-snug max-w-full">
                    {project.title}
                  </h3>
                  <div className="bg-slate-700/60 text-gray-200 text-xs sm:text-sm p-2 sm:p-3 rounded-md shadow-inner border border-slate-600 whitespace-pre-line">
                    {project.description}
                  </div>
                  {/* <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white transition"
                  >
                    View Project
                  </a> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scroll-track {
          animation: scroll 60s linear infinite;
        }

        @keyframes scroll {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }

        /* Hide scrollbars on most modern browsers */
        .scroll-track::-webkit-scrollbar {
          display: none;
        }
        .scroll-track {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
