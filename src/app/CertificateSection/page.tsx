"use client";

import { useState } from "react";
import Image from "next/image";

const certificates = [
  {
    title: "Agnirva Space Internship Program",
    image: "/certificates/Agnivira.jpeg",
    date: "June 2025",
    description: `
    Successfully completed the Agnirva Space Internship Program.
    
    Key learnings include:
    
    ✅ Fundamentals of satellite systems and rocket propulsion  
    ✅ Basics of orbital mechanics and space mission design  
    ✅ Applications of AI/ML in the space sector  
    ✅ Exposure to nanosatellites, remote sensing, and space sustainability  
    ✅ Hands-on exercises that strengthened technical and problem-solving skills  
    ✅ Improved teamwork, research abilities, and interdisciplinary knowledge  
    
    This experience fueled my passion for space technologies and innovations.  
    Grateful to Agnirva for the opportunity!
      `,
    }
    
  
  ,
  {
    title: "STQC Internship – Punjab Mohali (MeitY, Govt. of India)",
    image: "/certificates/stqc.jpeg",
    date: "October 2024 – March 2025",
    description:
      "Thrilled to announce that I've been selected for a prestigious internship at STQC Punjab Mohali! Over the next 6 months, I will be engaging in technical activities and contributing to cutting-edge projects under the Ministry of Electronics and Information Technology. Grateful for this opportunity to learn, grow, and make meaningful contributions in such a dynamic environment.",
  },
  {
    title: "Blockchain & Web 3.0 – IIT Roorkee & Diginique Techlabs",
    image: "/certificates/block.jpeg",
    date: "June 2025",
    description:
      "I am pleased to announce that I have completed an instructor-led online certificate course in Blockchain and Web 3.0 with iHUB DivyaSampart at Indian Institute Of Technology Roorkee & Diginique Techlabs. Grateful to the instructors and the team for this valuable learning experience.",
  },
  {
    title: "Core Java & Skill Development – FUEL Training Center",
    image: "/certificates/java.jpeg",
    date: "July 2023",
    description:
      "Excited to share that I've earned a Certificate of Completion from FUEL Training Center! 🚀 Successfully honed my skills in Core Java, aced Aptitude, and polished my personality. Ready to conquer new horizons with these future-ready skills!",
  },
  {
    title: "Recognition Certification – ET Career Ready (The Economic Times)",
    image: "/certificates/ET2.png",
    date: "June 2025",
    description:
      "Excited to share my achievement of receiving the #RecognitionCertification from *The Economic Times Career Ready*! Successfully completed Phase 1 with the Wheebox National Employability Test and am now advancing to Phase 2, focusing on enhancing my critical thinking skills.",
  },
  {
    title: "ET Career Ready – Certificate of Participation",
    image: "/certificates/ET.png",
    date: "April 2023",
    description:
      "Excited to share that I've earned my Certification of Participation in *Economic Times Career Ready*! Successfully completed Phase 1 of ET Career Ready 2022–23 — a fantastic initiative by *EconomicTimes.com* to identify India's top job-ready talents.",
  },
];

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
            </div>
          ))}
        </div>

        {/* Modal for Selected Image */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative">
              <Image
                src={selectedImage}
                alt="Certificate"
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 text-white text-2xl font-bold"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates;
