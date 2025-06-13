"use client"

import { motion } from "framer-motion"
import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi"
import { Link } from "react-scroll"
import { useTheme } from "../context/ThemeContext"

const Footer = () => {
  const { isDarkMode } = useTheme()

  const quickLinks = [
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ]

  const socialLinks = [
    { icon: <FiGithub className="w-5 h-5" />, href: "https://github.com/sahilundhad09" },
    { icon: <FiLinkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/sahil-undhad-9ba268285/" },
    { icon: <FiMail className="w-5 h-5" />, href: "mailto:sahilundhad304@gmail.com" },
  ]

  return (
    <footer className={`py-12 border-t ${isDarkMode ? "border-slate-700 bg-slate-900" : "border-slate-200 bg-white"}`}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-slate-800"}`}>
              <span className="text-gradient">Sahil Undhad</span>
            </h3>
            <p className={`leading-relaxed ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
              Computer Engineering Student & Software Developer passionate about creating innovative digital solutions and
              building scalable applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`text-lg font-semibold mb-4 ${isDarkMode ? "text-white" : "text-slate-800"}`}>
              Quick Links
            </h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className={`block transition-colors duration-300 cursor-pointer ${
                    isDarkMode ? "text-slate-400 hover:text-violet-400" : "text-slate-600 hover:text-violet-600"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect Section */}
          <div>
            <h4 className={`text-lg font-semibold mb-4 ${isDarkMode ? "text-white" : "text-slate-800"}`}>Connect</h4>
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    isDarkMode ? "bg-slate-800 hover:bg-violet-600" : "bg-slate-100 hover:bg-violet-100"
                  }`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <p className={`text-sm ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
              Let's connect and build something amazing together!
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className={`flex flex-col md:flex-row justify-between items-center pt-8 border-t ${
            isDarkMode ? "border-slate-700" : "border-slate-200"
          }`}
        >
          <div className={`mb-4 md:mb-0 ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
            © 2025 Sahil Undhad. Built with React, TypeScript & Tailwind CSS.
          </div>
          <div className={`flex items-center text-sm ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
            Made with <FiHeart className="w-4 h-4 mx-1 text-red-500" /> in India
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
