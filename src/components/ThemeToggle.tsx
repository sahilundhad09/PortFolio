"use client"

import { motion } from "framer-motion"
import { FiSun, FiMoon } from "react-icons/fi"
import { useTheme } from "../context/ThemeContext"

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full transition-all duration-300 ${
        isDarkMode ? "bg-slate-800 text-yellow-400" : "bg-violet-100 text-violet-600"
      }`}
      aria-label="Toggle Dark Mode"
    >
      <motion.div
        initial={{ scale: 0.8, rotate: 0 }}
        animate={{ scale: 1, rotate: isDarkMode ? 0 : 180 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="flex items-center justify-center"
      >
        {isDarkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
      </motion.div>
    </button>
  )
}

export default ThemeToggle
