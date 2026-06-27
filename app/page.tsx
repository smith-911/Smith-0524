import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import WorldClock from "@/components/WorldClock";

export default function Home() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="certifications">
        <Certifications />
      </section>
      <section id="world-clock" className="bg-gradient-to-b from-transparent to-dark-secondary/30">
        <WorldClock />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}
