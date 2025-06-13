"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiChevronDown } from "react-icons/fi"
import { Link } from "react-scroll"
import { useTheme } from "../context/ThemeContext"

const Hero = () => {
  const { isDarkMode } = useTheme()
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number }>>([])

  // Create floating particles effect
  useEffect(() => {
    const createParticles = () => {
      const newParticles = []
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 5 + 1,
        })
      }
      setParticles(newParticles)
    }

    createParticles()
  }, [])

  return (
    <section id="hero" className="min-h-screen relative flex flex-col justify-center overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="particle absolute"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              x: [0, Math.random() * 40 - 20],
              y: [0, Math.random() * 40 - 20],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 mb-10 lg:mb-0 flex justify-center lg:justify-end"
        >
          <div className="relative group">
            <div
              className={`absolute -inset-4 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300 ${isDarkMode ? "bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500" : "bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300"}`}
            ></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full gradient-bg p-2">
              <div
                className={`w-full h-full rounded-full overflow-hidden relative ${isDarkMode ? "bg-slate-800" : "bg-white"}`}
              >
                <img
                  src="/images/profilepic.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 text-center lg:text-left space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span
              className={`inline-block px-6 py-2 rounded-full text-sm font-medium mb-4 ${
                isDarkMode
                  ? "bg-violet-500/20 text-violet-300 border border-violet-500/30"
                  : "bg-violet-100 text-violet-700 border border-violet-200"
              }`}
            >
              Available for Opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            Hi, I'm <span className="text-gradient">Sahil Undhad</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-2"
          >
            <p className={`text-xl md:text-2xl ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}>
              Computer Engineering Student &
            </p>
            <p className="text-2xl md:text-3xl font-bold text-gradient">Software Engineer</p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className={`text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}
          >
              Passionate software engineering student with hands-on experience in developing web and mobile applications using .NET Framework,MERN Stack,and Flutter.
 
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-3 gap-6 py-6"
          >
            {[
              { number: "6+", label: "Projects" },
              { number: "1+", label: "Years Exp" },
             
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-violet-500">{stat.number}</div>
                <div className={`text-sm ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="gradient-button px-6 py-3 rounded-full flex items-center justify-center space-x-2 font-medium cursor-pointer shadow-lg hover:shadow-xl"
            >
              <FiMail className="mr-2" />
              <span>Get In Touch</span>
            </Link>
            <a
            
              href="/SAHIL_UNDHAD RESUME.pdf"
              download="sahilundhad_Resume.pdf"
              className={`outline-button px-6 py-3 rounded-full flex items-center justify-center space-x-2 font-medium transition-all duration-300 ${
                isDarkMode ? "hover:text-violet-400" : "hover:text-violet-700"
              }`}
            >
              <FiDownload className="mr-2" />
              <span>Download Resume</span>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center lg:justify-start space-x-4 pt-4"
          >
            {[
              { icon: <FiGithub className="w-5 h-5" />, href: "https://github.com/sahilundhad09" },
              { icon: <FiLinkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/sahil-undhad-9ba268285/" },
              { icon: <FiMail className="w-5 h-5" />, href: "sahilundhad304@gmail.com" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`p-3 rounded-full transition-all duration-300 ${
                  isDarkMode
                    ? "bg-slate-800 hover:bg-violet-600 hover:bg-opacity-20"
                    : "bg-slate-100 hover:bg-violet-100"
                }`}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="flex flex-col items-center"
        >
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className={`flex flex-col items-center text-sm cursor-pointer ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}
          >
            <span className="mb-2">Scroll Down</span>
            <FiChevronDown className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
