"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
// import Image from "next/image"
import {
  Github,
  Linkedin,
  ExternalLink,
  Download,
  // Mail,
  // Phone
} from "lucide-react";
import ParticleBackground from "./particle-background"; // Uncommented

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const handleSmoothScroll = (event) => {
      if (event.target.tagName === 'A' && event.target.hash) {
        event.preventDefault();
        const targetId = event.target.hash.slice(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);

    return () => {
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground className="absolute inset-0 -z-10 opacity-90" /> {/* Added opacity */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
        <div className="flex flex-col items-center justify-center gap-12 md:gap-16">
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl mb-6" style={{ fontWeight: 150 }}>
              Om Bothre
            </h1>
            <h2 className="text-xl sm:text-2xl text-gray-800 dark:text-zinc-300 mb-8">
              AI/ML Developer
            </h2>

            {/* <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a
                href="mailto:ombothre1024@gmail.com"
                className="flex items-center gap-2 text-gray-800 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>ombothre1024@gmail.com</span>
              </a>
              <a
                href="tel:+918291175243"
                className="flex items-center gap-2 text-gray-800 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>+91 8291175243</span>
              </a>
            </div> */}

            <div className="flex justify-center gap-6 mb-10">
              <a
                href="https://www.linkedin.com/in/om-bothre/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Button variant="outline" size="icon" className="rounded-full">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a
                href="https://github.com/ombothre"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Button variant="outline" size="icon" className="rounded-full">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a
                href="https://linktr.ee/ombothre"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkTree"
              >
                <Button variant="outline" size="icon" className="rounded-full">
                  <ExternalLink className="h-5 w-5" />
                </Button>
              </a>
            </div>

            <a
              href="/resume.pdf"
              download
              className="bg-gray-800 hover:bg-gray-700 text-white dark:bg-white dark:text-black dark:hover:bg-zinc-200 transition-colors inline-flex items-center px-4 py-2 rounded-md"
            >
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </a>
          </motion.div>

          {/* <motion.div
            className="w-full flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
              <Image src="/placeholder.svg" alt="Om Bothre" width={320} height={320} className="object-cover" />
              <Image src="/placeholder.svg" alt="Om Bothre" width={320} height={320} className="w-full h-full object-cover" />
          </motion.div> */}
        </div>
      </div>
    </div>
  );
}
