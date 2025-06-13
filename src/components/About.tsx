"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { FiTarget, FiUsers, FiZap, FiHeart, FiBook, FiAward } from "react-icons/fi"
import { useTheme } from "../context/ThemeContext"

const About = () => {
  const { isDarkMode } = useTheme()

  // Set up intersection observer hooks for animation
  const [refHeading, inViewHeading] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [refContent, inViewContent] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    delay: 200,
  })

  return (
    <section id="about" className={isDarkMode ? "bg-slate-800/30" : "bg-slate-50"}>
      <div className="container mx-auto px-4">
        <motion.div
          ref={refHeading}
          initial={{ opacity: 0 }}
          animate={inViewHeading ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 section-heading">About Me</h2>
          <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
            Crafting digital experiences with passion and precision
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={refContent}
            initial={{ opacity: 0, x: -50 }}
            animate={inViewContent ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-semibold text-violet-500 flex items-center">
              <FiBook className="mr-3 h-7 w-7" />
              My Journey
            </h3>

            <p className={`leading-relaxed text-lg ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}>
             Passionate software engineering student with hands-on experience in developing web and mobile applications using .NET Framework,MERN Stack,and Flutter. Strong problem-solving skills,a
 solid understanding of full-stack development, and a keen interest in learning new technologies.Seeking to leverage technical expertise and project experience in a software engineering internship.
            </p>

          

            {/* Values */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {[
                {
                  icon: <FiTarget className="w-6 h-6" />,
                  title: "Goal-Oriented",
                  desc: "Focused on delivering results",
                  color: "text-blue-500",
                },
                {
                  icon: <FiUsers className="w-6 h-6" />,
                  title: "Collaborative",
                  desc: "Team player and mentor",
                  color: "text-green-500",
                },
                {
                  icon: <FiZap className="w-6 h-6" />,
                  title: "Innovative",
                  desc: "Always exploring new tech",
                  color: "text-amber-500",
                },
                {
                  icon: <FiHeart className="w-6 h-6" />,
                  title: "Passionate",
                  desc: "Love what I do",
                  color: "text-red-500",
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className={`p-4 rounded-lg border transition-all duration-300 ${
                    isDarkMode
                      ? "bg-slate-800 border-slate-700 hover:border-violet-500/50"
                      : "bg-white border-slate-200 hover:border-violet-500/50 shadow-sm hover:shadow"
                  }`}
                >
                  <div className={`mb-2 ${value.color}`}>{value.icon}</div>
                  <h4 className="font-semibold mb-1">{value.title}</h4>
                  <p className={`text-sm ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inViewContent ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Education Card */}
            <div
              className={`rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl ${
                isDarkMode ? "bg-slate-800 border border-slate-700" : "bg-white border border-slate-200"
              }`}
            >
              <div className="flex items-center mb-4">
                <div
                  className={`p-3 rounded-full mr-4 ${
                    isDarkMode ? "bg-violet-500/20 text-violet-400" : "bg-violet-100 text-violet-600"
                  }`}
                >
                  <FiBook className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-semibold">Education</h4>
              </div>

              <div>
                <p className="font-semibold text-lg">B.Tech. in Computer Engineering</p>
                <p className={isDarkMode ? "text-slate-400" : "text-slate-600"}>Dharmsinh Desai University</p>
                <p className={isDarkMode ? "text-slate-400" : "text-slate-600"}>2022 - 2026 </p>
                <div className="flex items-center mt-2">
                  <span className="text-violet-500 font-medium">CGPA: 7.56/10</span>
                  {/* <span
                    className={`ml-2 px-2 py-0.5 text-xs font-medium rounded-full ${
                      isDarkMode ? "bg-green-500/20 text-green-400" : "bg-green-100 text-green-600"
                    }`}
                  >
                    Dean's List
                  </span> */}
                </div>
              </div>
            </div>

            {/* Achievements Card */}
            {/* <div
              className={`rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl ${
                isDarkMode ? "bg-slate-800 border border-slate-700" : "bg-white border border-slate-200"
              }`}
            >
              <div className="flex items-center mb-4">
                <div
                  className={`p-3 rounded-full mr-4 ${
                    isDarkMode ? "bg-amber-500/20 text-amber-400" : "bg-amber-100 text-amber-600"
                  }`}
                >
                  <FiAward className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-semibold">Recent Achievements</h4>
              </div>

              <ul className="space-y-3">
                {[
                  "Winner - College Hackathon 2024",
                  "Best Final Year Project Award",
                  "Open Source Contributor of the Month",
                ].map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <span
                      className={`inline-block w-1.5 h-1.5 rounded-full mt-2 mr-2 ${
                        isDarkMode ? "bg-amber-400" : "bg-amber-500"
                      }`}
                    ></span>
                    <span className={isDarkMode ? "text-slate-300" : "text-slate-700"}>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div> */}

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div
                className={`text-center p-6 rounded-xl shadow-lg ${
                  isDarkMode
                    ? "bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 border border-violet-500/30"
                    : "bg-gradient-to-br from-violet-50 to-fuchsia-50 border border-violet-100"
                }`}
              >
                <div className="text-2xl font-bold text-violet-500">6+</div>
                <div className={isDarkMode ? "text-slate-300" : "text-slate-700"}>Projects</div>
              </div>
              <div
                className={`text-center p-6 rounded-xl shadow-lg ${
                  isDarkMode
                    ? "bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30"
                    : "bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100"
                }`}
              >
                <div className="text-2xl font-bold text-blue-500">200+</div>
                <div className={isDarkMode ? "text-slate-300" : "text-slate-700"}>Commits</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
