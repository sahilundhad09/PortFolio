"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { FiGithub, FiExternalLink, FiEye, FiHeart, FiMessageSquare, FiStar } from "react-icons/fi"
import { useTheme } from "../context/ThemeContext"

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  github: string
  live: string
  featured: boolean
  
  category: string[]
}

const Projects = () => {
  const { isDarkMode } = useTheme()
  const [activeFilter, setActiveFilter] = useState("all")

  const [refHeading, inViewHeading] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects: Project[] = [
    {
      id: 1,
      title: "EduNest - Online Customizable Educational System",
      description:
        "Full-stack learning platform with reward-based education and module enrollment system.Main Features: OTP-based authentication, quiz system, leaderboard rankings, module purchas-ing",
      image: "/images/EdunestPic.png",
      tags: ["React", "Node.js", "Express.js", "MongoDB", "RazorPay Payment Integration"],
      github: "https://github.com/sahilundhad09/EduNest",
      live: "https://edunest-three.vercel.app/",
      featured: true,
      category: ["web"],
    },
    {
      id: 2,
      title: "Hotel Booking System - HotelQuest",
      description:
        "Centralized booking platform optimizing customer-hotel interactions.Main Features: QR-code payments, personalized guides, customizable room preferences",
      image: "/images/HotelQuestPic.png",
      tags: ["React", "Express.js", "MongoDB", "Node.js", "QR Code Generator","Ola Tracking Map API"],
      github: "https://github.com/sahilundhad09/Hotel-Booking-System",
      live: "#",
      featured: true,
      category: ["web"],
    },
    {
      id: 3,
      title: "Online Library Management System - AcmeLibrary",
      description: "AcmeLibrary is a comprehensive online library management system built with ASP.NET Core.Key Features : Advanced Search & Sort Functionality,Real-time Availability Tracking,User Account Management,Comprehensive Catalog System,Borrowing Workflow,Return Processing,Automated Fine Calculation(Sophisticated algorithm that calculates fines at 0.5 rupees per minute beyond the deadline)",
      image: "/images/Acmelib.png",
      tags: ["ASP.NET Core", "C#" ,"cshtml"],
      github: "https://github.com/sahilundhad09/LibraryMangementSystem",
      live:"#",
      featured: false,
      category: ["web"],
    },
    {
      id: 4,
      title: "PetrolPump Management System",
      description:
        "The Petrol Pump Management System is a comprehensive desktop application developed using the .NET Framework, designed to streamline operations at fuel stations through intuitive digital management. The system features robust employee management with complete CRUD functionality, real-time fuel inventory tracking with automated alerts for low stock levels, and a detailed transaction history module that maintains records of all fuel sales with customizable reporting options.",
      image: "/images/ppmpic.png",
      tags: [".NET Framework", "C#"],
      github: "#",
      live: "#",
      featured: false,
      category: ["web"],
    },
    {
      id: 5,
      title: "Online News Sharing App - NewsPulse",
      description:
        "NewsPulse is a feature-rich mobile news application developed with Flutter and Dart, delivering personalized news content based on user preferences. The app combines essential features like article bookmarking and offline reading through downloads with innovative elements including integrated charity donations and comprehensive profile customization",
      image: "/images/newspulsepic.png",
      tags: ["Flutter", "Dart"],
      github: "https://github.com/sahilundhad09/NewsPulse",
      live: "#",
      featured: false,
      category: ["mobile"],
    },
    {
      id: 6,
      title: "Personal Portfolio - React & Tailwind CSS",
      description:
        "My professional portfolio website leverages React for dynamic content rendering, Express for backend functionality, and Tailwind CSS for responsive design with minimal custom CSS. The single-page application showcases my technical journey through elegantly structured sections including a compelling about page, comprehensive skills matrix, interactive project gallery with detailed case studies, and streamlined contact options.",
      image: "/images/PortfolioPic.png",
      tags: ["React", "TypeScript", "tailwind css"],
      github: "#",
      live: "#",
      featured: true,
      category: ["web"],
    },
  ]

  const filters = [
    { key: "all", label: "All" },
    { key: "web", label: "Web" },
    { key: "mobile", label: "Mobile" },
    
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category.includes(activeFilter))

  return (
    <section id="projects">
      <div className="container mx-auto px-4">
        <motion.div
          ref={refHeading}
          initial={{ opacity: 0 }}
          animate={inViewHeading ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 section-heading">Featured Projects</h2>
          <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
            Showcasing my latest work and creative solutions
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.key
                  ? isDarkMode
                    ? "bg-violet-500 text-white"
                    : "bg-violet-600 text-white"
                  : isDarkMode
                    ? "bg-slate-800 text-slate-300 hover:bg-slate-700"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            return <ProjectCard key={project.id} project={project} index={index} />
          })}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button
            className={`outline-button px-8 py-3 rounded-full font-medium transition-all duration-300 ${
              isDarkMode ? "hover:text-violet-400" : "hover:text-violet-600"
            }`}
          >
            View All Projects
            <FiExternalLink className="ml-2 inline-block w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

interface ProjectCardProps {
  project: Project
  index: number
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const { isDarkMode } = useTheme()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      key={project.id}
      ref={ref}
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className={`project-card rounded-xl shadow-lg overflow-hidden ${
        isDarkMode ? "bg-slate-800 border border-slate-700" : "bg-white border border-slate-200"
      } ${project.featured ? "ring-2 ring-violet-500/50" : ""}`}
    >
      <div className="relative overflow-hidden group">
        {project.featured && (
          <div className="absolute top-4 left-4 z-10">
            <span
              className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                isDarkMode ? "bg-violet-500 text-white" : "bg-violet-600 text-white"
              }`}
            >
              <FiStar className="w-3 h-3 mr-1" />
              Featured
            </span>
          </div>
        )}

        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
          <div className="flex gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300"
            >
              <FiExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>

       

      <div className="p-6">
        <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? "text-white" : "text-slate-800"}`}>
          {project.title}
        </h3>

        <p className={`mb-4 leading-relaxed ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`px-2 py-1 text-xs rounded-full ${
                isDarkMode ? "bg-slate-700 text-slate-300" : "bg-slate-100 text-slate-700"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Engagement Stats */}
        <div
          className={`flex items-center justify-between text-sm pt-4 border-t ${
            isDarkMode ? "border-slate-700 text-slate-400" : "border-slate-200 text-slate-500"
          }`}
        >
        
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Projects
