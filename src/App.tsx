"use client"

import { useState, useEffect } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Loader from "./components/Loader"
import { ThemeProvider } from "./context/ThemeContext"
import BackToTop from "./components/BackToTop"

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <ThemeProvider>
      <Router>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Navbar />
            <main>
              <Hero />
              <About />
              <Skills />
              
              <Projects />
              <Contact />
            </main>
            <Footer />
            <BackToTop />
          </>
        )}
      </Router>
    </ThemeProvider>
  )
}

export default App
