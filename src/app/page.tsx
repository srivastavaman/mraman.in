
import Hero from "@/components/Hero";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import Blog from "@/components/Blog";
import ScrollUp from "@/components/Common/ScrollUp";
import ProjectsSection from "@/components/Project/ProjectsSection";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* Background Particles */}
      <div className="absolute inset-0 -z-10">
   
      </div>

      <ScrollUp />
      <Hero />
      <AboutSectionOne />
      <Blog />
      <ProjectsSection />
      <Contact />
    </main>
  );
}
