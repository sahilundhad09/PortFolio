"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { FiCode, FiDatabase, FiGlobe, FiSmartphone } from "react-icons/fi"
import { useTheme } from "../context/ThemeContext"
import type { JSX } from "react/jsx-runtime"

interface Skill {
  name: string
  percentage: number
}

interface SkillCategory {
  icon: JSX.Element
  title: string
  skills: string[]
  color: string
}

const Skills = () => {
  const { isDarkMode } = useTheme()

  // Set up intersection observer hooks for animation
  const [refHeading, inViewHeading] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [refSkills, inViewSkills] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skills: Skill[] = [
    { name: "React", percentage: 95 },
    { name: "TypeScript / JavaScript", percentage: 80 },
    { name: "Node.js", percentage: 85 },
    { name: "c/c++", percentage: 80 },
    { name: "MongoDB/SQL", percentage: 85 },
    { name: "c#", percentage: 75 },
    { name: "Flutter/Dart", percentage: 75 },
  ]

  const skillCategories: SkillCategory[] = [
    {
      icon: <FiCode className="h-8 w-8" />,
      title: "Frontend",
      skills: ["React", "JavaScript", "Tailwind CSS"],
      color: isDarkMode
        ? "from-blue-600/20 to-cyan-600/20 border-blue-500/30 text-blue-400"
        : "from-blue-50 to-cyan-50 border-blue-200 text-blue-600",
    },
    {
      icon: <FiDatabase className="h-8 w-8" />,
      title: "Backend",
      skills: ["Node.js", "Express.js", "MongoDB"],
      color: isDarkMode
        ? "from-green-600/20 to-emerald-600/20 border-green-500/30 text-green-400"
        : "from-green-50 to-emerald-50 border-green-200 text-green-600",
    },
    {
      icon: <FiGlobe className="h-8 w-8" />,
      title: "Tools",
      skills: ["Docker", "Git"],
      color: isDarkMode
        ? "from-violet-600/20 to-purple-600/20 border-violet-500/30 text-violet-400"
        : "from-violet-50 to-purple-50 border-violet-200 text-violet-600",
    },
    {
      icon: <FiSmartphone className="h-8 w-8" />,
      title: "App Development",
      skills: ["Flutter"],
      color: isDarkMode
        ? "from-pink-600/20 to-rose-600/20 border-pink-500/30 text-pink-400"
        : "from-pink-50 to-rose-50 border-pink-200 text-pink-600",
    },
  ]

  // Skill Bar Component with animation
  const SkillBar = ({ name, percentage }: Skill) => {
    const [width, setWidth] = useState(0)
    const [refBar, inViewBar] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    })

    useEffect(() => {
      if (inViewBar) {
        setWidth(percentage)
      }
    }, [inViewBar, percentage])

    return (
      <div className="mb-6" ref={refBar}>
        <div className="flex justify-between mb-2">
          <span className={isDarkMode ? "text-slate-300" : "text-slate-700"}>{name}</span>
          <span className="text-violet-500 font-medium">{percentage}%</span>
        </div>
        <div className={`h-2 w-full rounded-full ${isDarkMode ? "bg-slate-700" : "bg-slate-200"}`}>
          <div className="skill-bar rounded-full" style={{ width: `${width}%` }}></div>
        </div>
      </div>
    )
  }

  return (
    <section id="skills">
      <div className="container mx-auto px-4">
        <motion.div
          ref={refHeading}
          initial={{ opacity: 0 }}
          animate={inViewHeading ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 section-heading">Skills & Expertise</h2>
          <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
            Technologies I work with and my proficiency levels
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12" ref={refSkills}>
          {/* Skill Progress Bars */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inViewSkills ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className={`text-2xl font-semibold mb-8 ${isDarkMode ? "text-white" : "text-slate-900"}`}>
              Technical Proficiency
            </h3>
            <div className="space-y-2">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inViewSkills ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <SkillBar name={skill.name} percentage={skill.percentage} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skill Categories */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inViewSkills ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="grid gap-6"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div
                  className={`rounded-xl p-6 shadow-lg transition-all duration-300 border bg-gradient-to-br ${category.color}`}
                >
                  <div className="flex items-center mb-4">
                    {category.icon}
                    <h4 className="text-lg font-semibold ml-3">{category.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1 text-sm rounded-full ${
                          isDarkMode
                            ? "bg-slate-800/70 text-slate-300"
                            : "bg-white/70 text-slate-700 border border-slate-200"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills
