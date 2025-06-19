'use client'

import Image from 'next/image'
import { useState } from 'react'

const certificates = [
  {
    title: 'Agnirva Space Internship Program',
    image: '/certificates/Agnivira.jpeg', // Make sure this image exists in /public/certificates/
    date: 'June 2025',
    description:
      '🚀 Successfully completed the Agnirva Space Internship Program! Over 8 weeks, I completed 440 steps and 80+ hours of hands-on learning in space technologies and innovations. This journey strengthened my technical skills, expanded my knowledge, and fueled my passion for the space sector. Thanks to Agnirva for this incredible opportunity! #AgnirvaSpace #Internship #SpaceTech #LearningAndGrowth #FutureOpportunities 🚀',
  },
  
  {
    title: 'STQC Internship – Punjab Mohali (MeitY, Govt. of India)',
    image: '/certificates/stqc.jpeg', // Make sure this image exists in /public/certificates/
    date: 'October 2024 – March 2025',
    description:
      "Thrilled to announce that I've been selected for a prestigious internship at STQC Punjab Mohali! Over the next 6 months, I will be engaging in technical activities and contributing to cutting-edge projects under the Ministry of Electronics and Information Technology. Grateful for this opportunity to learn, grow, and make meaningful contributions in such a dynamic environment. #internship #STQC #Technical #learninganddevelopment #governmentofindia #EDTC #aicteinternship #aicte",
  },
  {
    title: 'Blockchain & Web 3.0 – IIT Roorkee & Diginique Techlabs',
    image: '/certificates/block.jpeg', // Ensure this image is present in /public/certificates/
    date: 'June 2025',
    description:
      '🎓 I am pleased to announce that I have completed an instructor-led online certificate course in Blockchain and Web 3.0 with iHUB DivyaSampart at Indian Institute Of Technology Roorkee & Diginique Techlabs. Grateful to the instructors and the team for this valuable learning experience. #Blockchain #Web3 #IITRoorkee #DiginiqueTechlabs #ProfessionalDevelopment',
  },
  
   
  {
    title: 'Core Java & Skill Development – FUEL Training Center',
    image: '/certificates/java.jpeg', // Add this image to your /public/certificates folder
    date: 'July 2023',
    description:
      "🎓 Excited to share that I've earned a Certificate of Completion from FUEL Training Center! 🚀 Successfully honed my skills in Core Java, aced Aptitude, and polished my personality. Ready to conquer new horizons with these future-ready skills! 💼🌟 #SkillDevelopment #Java #Aptitude #PersonalityDevelopment #FUEL #Parivartan",
  }
,

{
  title: 'Recognition Certification – ET Career Ready (The Economic Times)',
  image: '/certificates/ET2.png', // Ensure this image exists in your /public/certificates directory
  date: 'June 2025',
  description:
    "🌟 Excited to share my achievement of receiving the #RecognitionCertification from *The Economic Times Career Ready*! Successfully completed Phase 1 with the Wheebox National Employability Test and am now advancing to Phase 2, focusing on enhancing my critical thinking skills. 🚀📚 #ETCareerReady #TopJobTalent #CareerMilestone",
}
,
{
  title: 'ET Career Ready – Certificate of Participation',
  image: '/certificates/ET.png', // Make sure this file is placed in /public/certificates
  date: 'April 2023',
  description:
    "🏆 Excited to share that I've earned my Certification of Participation in *Economic Times Career Ready*! Successfully completed Phase 1 of ET Career Ready 2022–23 — a fantastic initiative by *EconomicTimes.com* to identify India's top job-ready talents. 🚀📚 #ETCareerReady #JobReady2023",
}



]

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="certificates" className="bg-slate-950 text-white py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 text-center mb-14">
          My Certificates
        </h2>

        <div className="space-y-20">
          {certificates.map((cert, index) => (
            <div key={index} className="space-y-4">
              <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-10">
                {/* Content Left */}
                <div className="w-full md:w-3/4 space-y-2">
                  <h3 className="text-2xl font-bold text-yellow-400">{cert.title}</h3>
                  <p className="text-sm text-gray-400">{cert.date}</p>
                  <p className="text-gray-300">{cert.description}</p>
                </div>

                {/* Button Right */}
                <div className="w-full md:w-1/4 flex justify-end items-start">
                  <button
                    onClick={() => setSelectedImage(cert.image)}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg shadow transition"
                  >
                    View 
                  </button>
                </div>
              </div>

              {/* Blur Divider */}
              {index !== certificates.length - 1 && (
                <hr className="mt-8 border border-blue-200/10 backdrop-blur-sm" />
              )}
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            <div className="bg-slate-900 p-4 rounded-xl max-w-3xl w-full relative">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-4 text-white text-2xl font-bold hover:text-red-500"
              >
                &times;
              </button>
              <Image
                src={selectedImage}
                alt="Certificate"
                width={800}
                height={600}
                className="rounded-lg mx-auto"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Certificates
