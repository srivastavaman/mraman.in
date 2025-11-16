'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Head from 'next/head'

const AboutSectionOne = () => {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>About Aman Srivastav | Embedded Systems & Web Developer</title>
        <meta
          name="description"
          content="Learn more about Aman Srivastav, an Electronics & Communication Engineering graduate skilled in embedded systems, IoT, and web development. Discover his projects, achievements, and passion for innovative tech solutions."
        />
        <meta
          name="keywords"
          content="Aman Srivastav, Embedded Systems, IoT Developer, Web Developer, Next.js, React.js, ESP32 Projects, Electronics Engineer, Project Varun"
        />
        <meta name="author" content="Aman Srivastav" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="About Aman Srivastav | Embedded Systems & Web Developer"
        />
        <meta
          property="og:description"
          content="Aman Srivastav is a passionate electronics and software developer with expertise in embedded systems, IoT, and full-stack web development."
        />
        <meta property="og:image" content="https://mraman.in/svg/aman-srivastav.jpg" />
        <meta property="og:url" content="https://mraman.in/about" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Aman Srivastav | Embedded Systems & Web Developer"
        />
        <meta
          name="twitter:description"
          content="Electronics & Communication Engineering graduate skilled in embedded systems, IoT, and web development."
        />
        <meta name="twitter:image" content="https://mraman.in/svg/aman-srivastav.jpg" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Aman Srivastav",
              url: "https://mraman.in",
              image: "https://mraman.in/svg/aman-srivastav.jpg",
              sameAs: [
                "https://www.linkedin.com/in/https://www.linkedin.com/in/srivastavaman//",
                
              ],
              jobTitle: "Embedded Systems & Web Developer",
              
              
            })
          }}
        ></script>
      </Head>

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
              src="/svg/Aman_Srivastav.jpg"
              alt="Mr. Aman Srivastav"
              width={400}
              height={400}
              className="mx-auto rounded-[40px] p-[20px]"
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
              href="/about"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-xl mt-4"
            >
              Know More...
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default AboutSectionOne
