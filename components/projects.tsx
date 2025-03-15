"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Github, ExternalLink, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    name: "Check Legal",
    duration: "Final Year Project",
    description: "An AI-powered legal document analysis tool that helps users understand and verify legal documents.",
    technologies: ["Python", "NLP", "Machine Learning", "React", "FastAPI"],
    achievements: ["Gold Medalist at Avishkar (State Level)", "Gold Medalist at Anveshan (National Level)"],
    github: "https://github.com",
    demo: "https://demo-link.com",
  },
  {
    name: "Vayu",
    duration: "Google GenAI Exchange Hackathon",
    description: "An innovative air quality monitoring and prediction system using machine learning and IoT.",
    technologies: ["TensorFlow", "IoT", "React Native", "Google Cloud"],
    achievements: ["Winner at Google GenAI Exchange Hackathon - Student Section"],
    github: "https://github.com",
    demo: "https://demo-link.com",
  },
  {
    name: "VyavaSahayak",
    duration: "Bhashini Sprint 1.0",
    description:
      "A multilingual business assistant that helps small businesses with translations and customer support.",
    technologies: ["NLP", "Django", "React", "MongoDB"],
    achievements: ["Runner-Up at Bhashini Sprint 1.0"],
    github: "https://github.com",
    demo: "https://demo-link.com",
  },
  {
    name: "Drishti",
    duration: "Rajasthan Police Hackathon 1.0",
    description: "A computer vision system for enhancing surveillance and security operations.",
    technologies: ["Computer Vision", "Deep Learning", "Python", "OpenCV"],
    achievements: ["Winner at Rajasthan Police Hackathon 1.0"],
    github: "https://github.com",
    demo: "https://demo-link.com",
  },
]

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white dark:bg-zinc-900 rounded-lg shadow-md border border-zinc-200 dark:border-zinc-700 overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{project.name}</h3>
                <div className="flex items-center text-zinc-500 dark:text-zinc-400 text-sm">
                  <Calendar className="h-4 w-4 mr-1 text-zinc-500 dark:text-zinc-400" />
                  <span>{project.duration}</span>
                </div>
              </div>

              <p className="text-zinc-600 dark:text-zinc-300 mb-4">{project.description}</p>

              <div className="mb-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-zinc-200 dark:bg-black text-zinc-800 dark:text-zinc-200 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="space-y-2">
                  {project.achievements.map((achievement, achievementIndex) => (
                    <div key={achievementIndex} className="text-sm text-zinc-600 dark:text-zinc-300">
                      • {achievement}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="flex items-center text-zinc-900 dark:text-white">
                    <Github className="h-4 w-4 mr-2 text-zinc-900 dark:text-white" />
                    GitHub
                  </Button>
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="flex items-center text-zinc-900 dark:text-white">
                    <ExternalLink className="h-4 w-4 mr-2 text-zinc-900 dark:text-white" />
                    Live Demo
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

