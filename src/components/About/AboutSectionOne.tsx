'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const AboutSectionOne = () => {
  return (
    <section id="knowmore" className="bg-slate-950 text-white py-20 px-6 min-h-screen">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left - Image */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src="/svg/about.png"
            alt="About Me Illustration"
            width={500}
            height={500}
            className="mx-auto"
          />
        </motion.div>

        {/* Right - Text */}
        <motion.div
          className="w-full md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-400">
            About Me
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            I’m Aman Srivastav — a passionate tech enthusiast working at the intersection of
            <span className="text-yellow-400"> software engineering </span>
            and <span className="text-yellow-400">hardware innovation</span>. I love building solutions that solve real-world problems, from intelligent systems to responsive web apps.
          </p>
          <p className="text-gray-400">
            With experience in full-stack development, embedded devices, and automation projects like Project Varun, my mission is to create impact through smart design and sustainable tech.
          </p>

          {/* Smooth scroll link */}
          
          <Link
            href="/Knowmore"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-xl mt-4"
          >
            Know More...
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSectionOne
