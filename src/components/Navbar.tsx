"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FiMenu, FiX } from "react-icons/fi"
import ThemeToggle from "./ThemeToggle"
import { useTheme } from "../context/ThemeContext"
import { Link } from "react-scroll"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { isDarkMode } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 80) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const navLinks = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ]

  const navbarClasses = `fixed w-full z-50 transition-all duration-300 
    ${
      scrolled
        ? isDarkMode
          ? "bg-slate-900/90 shadow-md backdrop-blur-md border-b border-slate-700/50"
          : "bg-white/90 shadow-md backdrop-blur-md border-b border-slate-200/50"
        : "bg-transparent"
    }`

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="text-2xl font-bold cursor-pointer"
          >
            <span className="text-gradient">SahilUndhad</span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className={`relative transition-all duration-300 group cursor-pointer 
                  ${isDarkMode ? "hover:text-violet-400" : "hover:text-violet-500"}`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: navLinks.length * 0.1 }}
          >
            <ThemeToggle />
          </motion.div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <button
            onClick={toggleMenu}
            className={`ml-4 p-2 rounded-md ${isDarkMode ? "hover:bg-slate-800" : "hover:bg-slate-100"}`}
          >
            {isMenuOpen ? (
              <FiX size={24} className="transition-all duration-300" />
            ) : (
              <FiMenu size={24} className="transition-all duration-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMenuOpen ? 1 : 0,
          height: isMenuOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
        className={`md:hidden overflow-hidden ${isDarkMode ? "bg-slate-900" : "bg-white"}`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={closeMenu}
              className={`py-2 px-4 rounded-md transition-all duration-300 
                ${
                  isDarkMode ? "hover:bg-slate-800 hover:text-violet-400" : "hover:bg-slate-100 hover:text-violet-500"
                }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </motion.div>
    </nav>
  )
}

export default Navbar
