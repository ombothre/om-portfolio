"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
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
          <p className="text-lg mb-6 text-gray-800 dark:text-zinc-300">
            I am a Computer Engineering student specializing in Data Science and Language Processing, with a strong focus on AI/ML development. My expertise spans across web development, machine learning, and software engineering, allowing me to build comprehensive solutions that leverage cutting-edge technologies.
          </p>
          <p className="text-lg mb-6 text-gray-800 dark:text-zinc-300">
            Currently pursuing my Bachelor of Technology in Computer Engineering at Pillai College of Engineering, I am set to graduate in May 2025. Throughout my academic journey, I have consistently applied theoretical knowledge to practical projects, resulting in award-winning applications and innovative solutions.
          </p>
          <p className="text-lg text-gray-800 dark:text-zinc-300">
            I am passionate about exploring the intersection of artificial intelligence and practical applications. My goal is to create technology that solves real-world problems while continuously expanding my knowledge and skills in this rapidly evolving field.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

