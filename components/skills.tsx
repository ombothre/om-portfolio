"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Code, Brain, Globe, Server, Database, Users } from "lucide-react";

const skillCategories = [
  {
    name: "Programming Languages",
    icon: <Code className="h-6 w-6" />,
    skills: ["Python", "C", "Java", "Dart", "JavaScript", "OOP"],
  },
  {
    name: "AI/ML",
    icon: <Brain className="h-6 w-6" />,
    skills: ["Machine Learning", "Deep Learning", "LLMs", "MLOps"],
  },
  {
    name: "Web Development",
    icon: <Globe className="h-6 w-6" />,
    skills: ["MERN Stack", "Django", "FastAPI", "SQL", "NoSQL (Redis)", "API Integration"],
  },
  {
    name: "DevOps",
    icon: <Server className="h-6 w-6" />,
    skills: ["Docker", "Git Version Control", "Linux (Ubuntu)"],
  },
  {
    name: "Databases",
    icon: <Database className="h-6 w-6" />,
    skills: ["SQL", "MongoDB", "Redis"],
  },
  {
    name: "Other",
    icon: <Users className="h-6 w-6" />,
    skills: ["Data Structures and Algorithms", "Team Leadership", "Cross-functional Collaboration", "Strategic Marketing", "Public Relations"],
  },
];

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md border border-zinc-200 dark:border-zinc-700 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center mb-4">
              <div className="mr-3 text-gray-800 dark:text-white">{category.icon}</div>
              <h3 className="text-xl font-semibold">{category.name}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="px-3 py-1 bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-zinc-200 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

