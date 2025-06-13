"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FiCode } from "react-icons/fi"
import { useTheme } from "../context/ThemeContext"

const Loader = () => {
  const [progress, setProgress] = useState(0)
  const { isDarkMode } = useTheme()

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          return 100
        }
        return prev + 5
      })
    }, 50)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 ${isDarkMode ? "bg-slate-900" : "bg-white"}`}>
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 260, damping: 20 }}
          className="w-20 h-20 mx-auto mb-8 rounded-full gradient-bg flex items-center justify-center"
        >
          <FiCode className="w-10 h-10 text-white" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-2xl font-bold mb-4"
        >
          Loading Portfolio
        </motion.h2>

        <div className="w-64 mx-auto">
          <div className={`h-2 rounded-full overflow-hidden ${isDarkMode ? "bg-slate-700" : "bg-slate-200"}`}>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
              className="h-full gradient-bg"
            />
          </div>
          <p className={`mt-2 text-sm ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>{progress}%</p>
        </div>
      </div>
    </div>
  )
}

export default Loader
