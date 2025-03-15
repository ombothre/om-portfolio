"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "VSure Consultancy",
    location: "Mumbai, India",
    position: "AI/ML Developer Intern",
    duration: "Dec 2024 - Present",
    responsibilities: [
      "Developing and implementing machine learning models for predictive analytics",
      "Collaborating with cross-functional teams to integrate AI solutions",
      "Optimizing existing algorithms to improve performance and accuracy",
    ],
  },
  {
    company: "Oggangs Pvt. Ltd.",
    location: "Mumbai, India",
    position: "Python Developer Intern",
    duration: "Jul 2024 - Oct 2024",
    responsibilities: [
      "Developed backend services using Python and FastAPI",
      "Implemented data processing pipelines for efficient information extraction",
      "Collaborated with the frontend team to ensure seamless API integration",
    ],
  },
];

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
      <div className="max-w-3xl mx-auto">
        <div className="relative border-l-2 border-gray-300 dark:border-zinc-700 pl-8 ml-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              ref={index === 0 ? ref : undefined}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-12 relative"
            >
              <div className="absolute -left-12 mt-1.5 h-6 w-6 rounded-full border-4 border-white dark:border-zinc-900 bg-gray-200 dark:bg-zinc-700"></div>
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md border border-gray-200 dark:border-zinc-700 hover:shadow-lg transition-all duration-300 group">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                  <h3 className="text-xl font-bold">{exp.position}</h3>
                  <div className="flex items-center text-gray-600 dark:text-zinc-400 text-sm mt-2 sm:mt-0">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{exp.duration}</span>
                  </div>
                </div>
                <div className="flex items-center mb-4 text-gray-800 dark:text-zinc-300">
                  <span className="font-medium">{exp.company}</span>
                  <span className="mx-2">•</span>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{exp.location}</span>
                  </div>
                </div>
                <ul className="list-disc list-inside text-gray-800 dark:text-zinc-300 space-y-2">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex}>{resp}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

