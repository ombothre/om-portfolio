"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-6 text-gray-800 dark:text-zinc-300 text-justify">
            I am a Computer Engineering student specializing in Data Science and
            AI/ML development, with expertise in web development, machine
            learning, and software engineering. My focus lies in building
            innovative solutions that leverage cutting-edge technologies.
          </p>
          <p className="text-lg text-gray-800 dark:text-zinc-300 text-justify">
            Currently pursuing my B.Tech at Pillai College of Engineering, I
            apply theoretical knowledge to practical projects, resulting in
            award-winning applications. Passionate about AI’s real-world impact,
            I strive to develop technology that drives meaningful change while
            continuously expanding my expertise.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
