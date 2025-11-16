'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Typewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 to-black text-white py-20 px-2 min-h-screen">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">

        {/* Text Section */}
        <motion.div
          className="max-w-xl pt-20 lg:pt-10 text-center lg:text-left"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm <br />
            <span className="text-blue-400">Aman Srivastav</span><br />
            <span className="text-yellow-400 whitespace-nowrap text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              <Typewriter
                words={['Full Stack Developer', 'Hardware Innovator', 'Tech Enthusiast']}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
              />
            </span>
          </h1>
          <p className="text-base sm:text-lg text-gray-300 mb-8 px-2 sm:px-0">
            Expert in integrating innovative technologies, from intelligent water systems to precision farming solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
            <Link href="/experience">
              <button className="bg-blue-500 hover:bg-blue-600 w-full sm:w-auto px-10 py-4 rounded-2xl text-white font-semibold text-lg">
              Experience 
              </button>
            </Link>
            <Link href="#contact">
              <button className="border border-gray-400 w-full sm:w-auto px-10 py-4 rounded-2xl text-gray-300 font-semibold text-lg hover:text-white hover:border-white">
                Contact Me
              </button>
            </Link>
          </div>
        </motion.div>

        {/* SVG Icon Grid */}
        <motion.div
  className="hidden lg:grid grid-cols-2 gap-4 sm:gap-6 max-w-md pt-60 lg:pt-10 mr-40"
  initial={{ opacity: 0, y: 100 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
>
  <Image src="/svg/laptop.png" alt="Coding" width={120} height={120} />
  <Image src="/svg/microchip.png" alt="Microchip" width={100} height={100} />
  <Image src="/svg/pcb.png" alt="Circuit Board" width={120} height={120} />
  <Image src="/svg/iot.png" alt="IoT" width={120} height={120} />
  <Image src="/svg/circuit.png" alt="Hardware" width={120} height={100} />
</motion.div>

      </div>
    </section>
  )
}

export default Hero



