"use client";

import { ArrowUpIcon } from "lucide-react";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Achievements from "@/components/achievements";
// import Education from "@/components/education"
import Contact from "@/components/contact";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-1000">
      <Navbar />

      <section id="hero">
        <Hero />
      </section>

      <section id="about" className="py-20">
        <About />
      </section>

      <section id="experience" className="py-20">
        <Experience />
      </section>

      <section id="projects" className="py-20 dark:bg-black">
        <Projects />
      </section>

      <section id="skills" className="py-20 darkbg-black">
        <Skills />
      </section>

      <section id="achievements" className="py-20">
        <Achievements />
      </section>

      {/* <section id="education" className="py-20 bg-black">
        <Education />
      </section> */}

      <section id="contact" className="py-20">
        <Contact />
      </section>

      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-white text-black hover:bg-zinc-200 transition-all duration-300 shadow-lg"
          aria-label="Scroll to top"
        >
          <ArrowUpIcon className="h-5 w-5" />
        </Button>
      )}
    </main>
  );
}
