"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { FiBriefcase, FiCalendar, FiMapPin } from "react-icons/fi"
import { useTheme } from "../context/ThemeContext"

interface ExperienceItem {
  title: string
  company: string
  location: string
  period: string
  description: string[]
  skills: string[]
}

const Experience = () => {
  const { isDarkMode } = useTheme()

  const [refHeading, inViewHeading] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences: ExperienceItem[] = [
    {
      title: "Full Stack Developer",
      company: "Tech Innovators Inc.",
      location: "San Francisco, CA",
      period: "Jun 2023 - Present",
      description: [
        "Developed scalable web applications using React and Node.js with TypeScript",
        "Implemented comprehensive test suites achieving 90% code coverage",
        "Optimized application performance resulting in 40% faster load times",
        "Collaborated with cross-functional teams in an Agile environment",
      ],
      skills: ["React", "Node.js", "TypeScript", "MongoDB", "Jest"],
    },
    {
      title: "Frontend Developer",
      company: "Digital Solutions LLC",
      location: "New York, NY",
      period: "Jan 2022 - May 2023",
      description: [
        "Built responsive user interfaces following modern design principles",
        "Improved user experience and accessibility across multiple platforms",
        "Integrated third-party APIs and services into frontend applications",
        "Mentored junior developers and conducted code reviews",
      ],
      skills: ["React", "JavaScript", "CSS", "Webpack", "Redux"],
    },
    {
      title: "Open Source Contributor",
      company: "Various Projects",
      location: "Remote",
      period: "2021 - Present",
      description: [
        "Contributed to multiple open source projects with over 5,000 stars",
        "Fixed critical bugs and implemented new features for community tools",
        "Created comprehensive documentation and guides for new contributors",
        "Participated in community discussions and code reviews",
      ],
      skills: ["Git", "JavaScript", "Python", "Documentation", "Open Source"],
    },
  ]

  return (
    <section id="experience" className={isDarkMode ? "bg-slate-800/30" : "bg-slate-50"}>
      <div className="container mx-auto px-4">
        <motion.div
          ref={refHeading}
          initial={{ opacity: 0 }}
          animate={inViewHeading ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 section-heading">Experience</h2>
          <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
            My professional journey and contributions
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-10">
          {experiences.map((exp, index) => {
            // Move the hook outside the map function

            return <ExperienceItemComponent key={index} exp={exp} index={index} isDarkMode={isDarkMode} />
          })}
        </div>
      </div>
    </section>
  )
}

interface ExperienceItemProps {
  exp: ExperienceItem
  index: number
  isDarkMode: boolean
}

const ExperienceItemComponent: React.FC<ExperienceItemProps> = ({ exp, index, isDarkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    delay: 100 * index,
  })

  const experiences: ExperienceItem[] = [
    {
      title: "Full Stack Developer",
      company: "Tech Innovators Inc.",
      location: "San Francisco, CA",
      period: "Jun 2023 - Present",
      description: [
        "Developed scalable web applications using React and Node.js with TypeScript",
        "Implemented comprehensive test suites achieving 90% code coverage",
        "Optimized application performance resulting in 40% faster load times",
        "Collaborated with cross-functional teams in an Agile environment",
      ],
      skills: ["React", "Node.js", "TypeScript", "MongoDB", "Jest"],
    },
    {
      title: "Frontend Developer",
      company: "Digital Solutions LLC",
      location: "New York, NY",
      period: "Jan 2022 - May 2023",
      description: [
        "Built responsive user interfaces following modern design principles",
        "Improved user experience and accessibility across multiple platforms",
        "Integrated third-party APIs and services into frontend applications",
        "Mentored junior developers and conducted code reviews",
      ],
      skills: ["React", "JavaScript", "CSS", "Webpack", "Redux"],
    },
    {
      title: "Open Source Contributor",
      company: "Various Projects",
      location: "Remote",
      period: "2021 - Present",
      description: [
        "Contributed to multiple open source projects with over 5,000 stars",
        "Fixed critical bugs and implemented new features for community tools",
        "Created comprehensive documentation and guides for new contributors",
        "Participated in community discussions and code reviews",
      ],
      skills: ["Git", "JavaScript", "Python", "Documentation", "Open Source"],
    },
  ]

  return (
    <motion.div
      key={index}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      <div
        className={`relative rounded-xl shadow-lg overflow-hidden ${
          isDarkMode ? "bg-slate-800 border border-slate-700" : "bg-white border border-slate-200"
        }`}
      >
        {/* Timeline dot and line */}
        {index < experiences.length - 1 && <div className="absolute left-8 top-24 bottom-0 w-0.5 bg-violet-500/30" />}
        <div className="absolute left-8 top-8 w-4 h-4 rounded-full bg-violet-500 transform -translate-x-2" />

        <div className="p-8 ml-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h3 className={`text-xl font-semibold mb-1 ${isDarkMode ? "text-white" : "text-slate-800"}`}>
                {exp.title}
              </h3>
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <div className="flex items-center">
                  <FiBriefcase className="mr-1 text-violet-500" size={16} />
                  <span className={isDarkMode ? "text-violet-400" : "text-violet-600"}>{exp.company}</span>
                </div>
                <div className="flex items-center">
                  <FiMapPin className="mr-1 text-violet-500" size={16} />
                  <span className={isDarkMode ? "text-slate-400" : "text-slate-500"}>{exp.location}</span>
                </div>
              </div>
            </div>

            <span
              className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
                isDarkMode
                  ? "bg-violet-500/10 text-violet-300 border border-violet-500/20"
                  : "bg-violet-100 text-violet-700 border border-violet-200"
              } mt-2 md:mt-0`}
            >
              <FiCalendar className="mr-1" size={14} />
              {exp.period}
            </span>
          </div>

          <ul className={`space-y-2 mb-4 ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
            {exp.description.map((item, i) => (
              <li key={i} className="flex items-start">
                <span
                  className={`inline-block w-1.5 h-1.5 rounded-full mt-2 mr-2 ${
                    isDarkMode ? "bg-violet-400" : "bg-violet-500"
                  }`}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 mt-4">
            {exp.skills.map((skill) => (
              <span
                key={skill}
                className={`px-3 py-1 text-sm rounded-full ${
                  isDarkMode ? "bg-slate-700 text-slate-300" : "bg-slate-100 text-slate-700"
                }`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Experience
