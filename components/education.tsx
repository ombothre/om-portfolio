"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Calendar, GraduationCap, MapPin } from "lucide-react"

const education = [
  {
    degree: "Bachelor of Technology in Computer Engineering",
    specialization: "Data Science and Language Processing",
    institution: "Pillai College of Engineering",
    location: "New Panvel, India",
    duration: "August 2021 – May 2025",
    gpa: "8.5/10.0",
  },
  {
    degree: "Higher Secondary Education",
    institution: "Greenfingers Global School",
    location: "Kharghar, India",
    duration: "2020-2021",
  },
]

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>

      <div className="max-w-3xl mx-auto">
        <div className="relative border-l-2 border-zinc-300 dark:border-zinc-700 pl-8 ml-4">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              ref={index === 0 ? ref : undefined}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-12 relative"
            >
              <div className="absolute -left-12 mt-1.5 h-6 w-6 rounded-full border-4 border-white dark:border-zinc-900 bg-zinc-200 dark:bg-zinc-700" />

              <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md border border-zinc-200 dark:border-zinc-700 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                  <h3 className="text-xl font-bold flex items-center">
                    <GraduationCap className="h-5 w-5 mr-2" />
                    {edu.degree}
                  </h3>
                  <div className="flex items-center text-zinc-600 dark:text-zinc-400 text-sm mt-2 sm:mt-0">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{edu.duration}</span>
                  </div>
                </div>

                {edu.specialization && (
                  <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                    <span className="font-medium">Specialization:</span> {edu.specialization}
                  </p>
                )}

                <div className="flex items-center mb-4 text-zinc-700 dark:text-zinc-300">
                  <span className="font-medium">{edu.institution}</span>
                  <span className="mx-2">•</span>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                {edu.gpa && (
                  <p className="text-zinc-700 dark:text-zinc-300">
                    <span className="font-medium">CGPA:</span> {edu.gpa}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

