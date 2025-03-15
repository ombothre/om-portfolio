"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Award, Trophy, Medal } from "lucide-react"

const achievements = [
  {
    title: "Winner — Rajasthan Police Hackathon",
    icon: <Trophy className="h-6 w-6" />,
    description: "Developed 'Drishti', a computer vision system for enhancing surveillance and security operations.",
  },
  {
    title: "Gold Medalist — Avishkar (State Level) & Anveshan (National Level)",
    icon: <Medal className="h-6 w-6" />,
    description: "Recognized for 'Check Legal', an AI-powered legal document analysis tool.",
  },
  {
    title: "Winner — Google GenAI Exchange Hackathon - Student Section",
    icon: <Trophy className="h-6 w-6" />,
    description: "Created 'Vayu', an innovative air quality monitoring and prediction system.",
  },
  {
    title: "Runner-Up — Bhashini Sprint 1.0",
    icon: <Award className="h-6 w-6" />,
    description: "Developed 'VyavaSahayak', a multilingual business assistant for small businesses.",
  },
  {
    title: "Management Lead — Google Developer Community Education, PCE",
    icon: <Award className="h-6 w-6" />,
    description: "Led and organized technical events and workshops for the student developer community.",
  },
]

export default function Achievements() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-12 text-center">Achievements</h2>

      <div className="max-w-3xl mx-auto">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            ref={index === 0 ? ref : undefined}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex mb-8 group"
          >
            <div className="mr-4 mt-1 p-2 bg-zinc-100 dark:bg-black rounded-full text-black dark:text-white group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors duration-300">
              {achievement.icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
              <p className="text-zinc-700 dark:text-zinc-300">{achievement.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

