import Hero from "@/components/Hero";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import Blog from "@/components/Blog";
import ScrollUp from "@/components/Common/ScrollUp";
import ProjectsSection from '@/components/Project/ProjectsSection';
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mr.Aman | Techpreneur",
  description: "Initial Stage To Became Techpreneur",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />      
      <AboutSectionOne />   
      <Blog />
      <ProjectsSection /> 
      <Contact />
    </>
  );
}
