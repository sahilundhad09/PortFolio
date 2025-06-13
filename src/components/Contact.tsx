"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi"
import { useTheme } from "../context/ThemeContext"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

const Contact = () => {
  const { isDarkMode } = useTheme()
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [refHeading, inViewHeading] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [refContent, inViewContent] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })

    setIsSubmitting(false)
    alert("Message sent successfully! I'll get back to you soon.")
  }

  const contactInfo = [
    {
      icon: <FiMail className="w-6 h-6" />,
      title: "Email",
      content: "sahilundhad304@gmail.com",
      href: "mailto:sahilundhad304@gmail.com",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: <FiPhone className="w-6 h-6" />,
      title: "Phone",
      content: "+91 9023454590",
      href: "tel:+919023454590",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <FiMapPin className="w-6 h-6" />,
      title: "Location",
      content: "Goverdhan Chowk,kruti onella, RAJKOT",
      href: "#",
      color: "from-blue-500 to-cyan-500",
    },
  ]

  const socialLinks = [
    {
      icon: <FiGithub className="w-5 h-5" />,
      href: "https://github.com/sahilundhad09",
      label: "GitHub",
      color: "hover:text-gray-400",
    },
    {
      icon: <FiLinkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/sahil-undhad-9ba268285/",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: <FiTwitter className="w-5 h-5" />,
      href: "https://x.com/undhadsahil",
      label: "Twitter",
      color: "hover:text-sky-400",
    },
    {
      icon: <FiMail className="w-5 h-5" />,
      href: "mailto:sahilundhad304@gmail.com",
      label: "Email",
      color: "hover:text-red-400",
    },
  ]

  return (
    <section id="contact" className={isDarkMode ? "bg-slate-800/30" : "bg-slate-50"}>
      <div className="container mx-auto px-4">
        <motion.div
          ref={refHeading}
          initial={{ opacity: 0 }}
          animate={inViewHeading ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 section-heading">Let's Work Together</h2>
          <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12" ref={refContent}>
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inViewContent ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className={`text-2xl font-semibold mb-6 ${isDarkMode ? "text-white" : "text-slate-800"}`}>
                Get In Touch
              </h3>
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.href}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className={`flex items-center p-6 rounded-xl shadow-lg transition-all duration-300 group ${
                      isDarkMode
                        ? "bg-slate-800 border border-slate-700 hover:border-violet-500/50"
                        : "bg-white border border-slate-200 hover:border-violet-500/50 hover:shadow-xl"
                    }`}
                  >
                    <div
                      className={`text-white mr-4 p-3 rounded-full bg-gradient-to-r ${contact.color} group-hover:scale-110 transition-transform duration-300`}
                    >
                      {contact.icon}
                    </div>
                    <div>
                      <p className={`font-semibold text-lg ${isDarkMode ? "text-white" : "text-slate-800"}`}>
                        {contact.title}
                      </p>
                      <p className={isDarkMode ? "text-slate-300" : "text-slate-600"}>{contact.content}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h4 className={`text-xl font-semibold mb-6 ${isDarkMode ? "text-white" : "text-slate-800"}`}>
                Follow My Journey
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-4 rounded-full transition-all duration-300 ${
                      isDarkMode
                        ? "bg-slate-800 hover:bg-slate-700"
                        : "bg-white hover:bg-slate-50 shadow-md hover:shadow-lg"
                    } ${social.color}`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className={`p-6 rounded-xl border ${
                isDarkMode
                  ? "bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/30"
                  : "bg-gradient-to-r from-green-50 to-emerald-50 border-green-200"
              }`}
            >
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                <span className={`font-semibold ${isDarkMode ? "text-green-400" : "text-green-600"}`}>
                  Available for Work
                </span>
              </div>
              <p className={`text-sm ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                Currently accepting new projects and opportunities. Let's discuss your ideas!
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inViewContent ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
          >
            <div
              className={`rounded-xl shadow-lg p-8 ${
                isDarkMode ? "bg-slate-800 border border-slate-700" : "bg-white border border-slate-200"
              }`}
            >
              <div className="flex items-center mb-6">
                <div
                  className={`p-3 rounded-full mr-4 ${
                    isDarkMode ? "bg-violet-500/20 text-violet-400" : "bg-violet-100 text-violet-600"
                  }`}
                >
                  <FiSend className="w-6 h-6" />
                </div>
                <div>
                  <h3 className={`text-2xl font-semibold ${isDarkMode ? "text-white" : "text-slate-800"}`}>
                    Send Message
                  </h3>
                  <p className={isDarkMode ? "text-slate-300" : "text-slate-600"}>
                    Fill out the form below and I'll get back to you within 24 hours.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="input-field"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label
                      className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="input-field"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="input-field"
                    placeholder="Project Discussion"
                  />
                </div>

                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}
                  >
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="input-field resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full gradient-button py-3 px-6 rounded-full font-medium flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300 ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FiSend className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
