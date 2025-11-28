'use client'

import Image from 'next/image'

const projects = [
  {
    title: 'VARUN – Smart Water Cooling System',
    description:
      'IoT-powered water cooler system with smart scheduling, temperature control, and energy efficiency using embedded systems.',
    image: '/projects/varun.jpg',
  },
  {
    title: 'SAATHI – Accident Detection',
    description:
      'Real-time accident alert system using GPS, GSM, and Arduino to notify emergency contacts instantly.',
    image: '/projects/saathi.jpg',
  },
  {
    title: 'Book Heaven – Buy & Sell Books',
    description:
      'A simple marketplace web app built using React and MYSQL for buying/selling second-hand books.',
    image: '/projects/bookheaven.jpg',
  },
]

const ProjectSection = () => {
  return (
    <section id="projects" className="bg-slate-950 text-white py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-400 mb-12">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-2xl overflow-hidden shadow-md hover:shadow-blue-500/40 transition-shadow"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectSection
