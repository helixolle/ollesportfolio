import React, { useState, useEffect } from 'react'
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'
import ProjectPage from './components/ProjectPage'
import MobileMenu from './components/MobileMenu'
import CustomCursor from './components/CustomCursor'
import FloatingThemeButton from './components/FloatingThemeButton'
import ScrollToTop from './components/ScrollToTop'

function AppContent() {
  const [activeSection, setActiveSection] = useState('about')
  const [isMobile, setIsMobile] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()


  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])


  // Close mobile menu when route changes
  useEffect(() => {
    setSidebarOpen(false)
  }, [location])


  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        setActiveSection(sectionId)
        if (isMobile) setSidebarOpen(false)
      }
    }
  }


  const isProjectPage = location.pathname !== '/'


  return (
    <div className="min-h-screen bg-custom relative">
      {/* Custom Cursor - only on desktop */}
      {!isMobile && <CustomCursor />}


      {isMobile && (
        <MobileMenu 
          isOpen={sidebarOpen}
          onToggle={() => setSidebarOpen(!sidebarOpen)}
        />
      )}


      {!isMobile && <FloatingThemeButton />}
            <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto flex relative z-10"
      ></motion.div>
      
      {/* Container - Immediate entrance animation */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto flex relative z-10"
      >
        <Sidebar 
          activeSection={activeSection}
          onSectionClick={scrollToSection}
          isMobile={isMobile}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          isProjectPage={isProjectPage}
          currentProject={isProjectPage ? location.pathname.slice(1) : null}
        />
        
        <Routes>
          <Route 
            path="/" 
            element={
              <MainContent 
                onSectionChange={setActiveSection}
                isMobile={isMobile}
              />
            } 
          />
          <Route path="/:projectId" element={<ProjectPage />} />
        </Routes>
      </motion.div>
    </div>
  )
}


function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  )
}


export default App
