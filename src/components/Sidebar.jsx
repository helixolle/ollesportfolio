import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate, useLocation } from 'react-router-dom'
import { Mail, Phone, Linkedin, X, ArrowLeft, ChevronRight } from 'lucide-react'
import WiggleLine from './WiggleLine'
import CompactThemeSelector from './CompactThemeSelector'
import { getAllProjects, getProjectsByType, getProject } from '../data/projects'
import { slideLeftVariants, fadeFloatVariants, containerVariants } from './AnimatedComponents'

const Sidebar = ({ activeSection, onSectionClick, isMobile, isOpen, onClose, isProjectPage, currentProject }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [expandedSections, setExpandedSections] = React.useState({
    portfolio: false,
    other: false
  })

  const currentProjectData = currentProject ? getProject(currentProject) : null
  const currentProjectType = currentProjectData?.type

  // Auto-expand current project's section
  React.useEffect(() => {
    if (currentProjectType === 'ixd') {
      setExpandedSections(prev => ({ ...prev, portfolio: true }))
    } else if (currentProjectType === 'vfx') {
      setExpandedSections(prev => ({ ...prev, other: true }))
    }
  }, [currentProjectType])

  const sections = [
    { id: 'about', label: 'About' },
    { 
      id: 'portfolio', 
      label: 'Portfolio',
      expandable: true,
      expanded: expandedSections.portfolio,
      projects: getProjectsByType('ixd')
    },
    { 
      id: 'other', 
      label: 'Other',
      expandable: true,
      expanded: expandedSections.other,
      projects: getProjectsByType('vfx')
    },
    { id: 'experience', label: 'Experience' }
  ]

  const handleNavigation = (sectionId) => {
    if (isProjectPage) {
      navigate(`/#${sectionId}`)
    } else {
      onSectionClick(sectionId)
    }
  }

  const handleSectionToggle = (sectionId) => {
    if (sectionId === 'portfolio') {
      setExpandedSections(prev => ({ ...prev, portfolio: !prev.portfolio }))
    } else if (sectionId === 'other') {
      setExpandedSections(prev => ({ ...prev, other: !prev.other }))
    } else {
      handleNavigation(sectionId)
    }
  }

  const handleBackToHome = () => {
    navigate('/')
  }

  if (isMobile) {
    return (
      <>
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={onClose}
          />
        )}
        
        <aside className={`fixed inset-y-0 left-0 z-50 w-80 bg-custom shadow-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <div className="h-full overflow-y-auto">

            
            <SidebarContent 
              sections={sections} 
              activeSection={activeSection} 
              onSectionClick={handleNavigation} 
              onSectionToggle={handleSectionToggle}
              isProjectPage={isProjectPage}
              currentProject={currentProject}
              onBackToHome={handleBackToHome}
              navigate={navigate}
            />
          </div>
        </aside>
      </>
    )
  }

  return (
    <aside className="w-80 h-screen bg-custom sticky top-0 relative">
      {/* Wiggle Line positioned at the right edge of sidebar */}
      <div className="absolute top-0 right-0 w-6 h-full pointer-events-none z-10" style={{ transform: 'translateX(50%)' }}>
        <WiggleLine />
      </div>
      <SidebarContent 
        sections={sections} 
        activeSection={activeSection} 
        onSectionClick={handleNavigation} 
        onSectionToggle={handleSectionToggle}
        isProjectPage={isProjectPage}
        currentProject={currentProject}
        onBackToHome={handleBackToHome}
        navigate={navigate}
      />
    </aside>
  )
}

const SidebarContent = ({ sections, activeSection, onSectionClick, onSectionToggle, isProjectPage, currentProject, onBackToHome, navigate }) => {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="h-full flex flex-col px-8"
      style={{ paddingTop: '15vh', paddingBottom: '6vh' }}
    >
      {/* Back Button for Project Pages */}
      {isProjectPage && (
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          onClick={onBackToHome}
          className="flex items-center gap-2 text-sm text-body hover:text-header transition-colors mb-8 cursor-hover"
        >
          <ArrowLeft size={16} />
          Back to Portfolio
        </motion.button>
      )}

      {/* Profile Section */}
      <div className="mb-12">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="w-32 h-48 bg-gray-100 rounded-2xl mb-6 overflow-hidden cursor-hover"
          onClick={onBackToHome}
        >
          <img 
            src="src\assets\images\portrait2.JPG"
            alt="Olle Lomberg Davegård" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <div className="space-y-2">
          {/* Clean name entrance */}
          <motion.h1 
            className="text-3xl font-serif-custom font-medium text-header leading-tight overflow-hidden cursor-hover"
            onClick={onBackToHome}
          >
            <motion.span
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              className="block"
            >
              Olle
            </motion.span>
            <motion.span
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.6, ease: "easeOut" }}
              className="block"
            >
              Lomberg
            </motion.span>
            <motion.span
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
              className="block"
            >
              Davegård
            </motion.span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="text-sm font-sans-custom font-medium text-body uppercase tracking-wider"
            whileHover={{ letterSpacing: "0.15em" }}
          >
            INTERACTION DESIGNER
          </motion.p>
        </div>
        
        {/* Contact Information */}
        <div className="mt-6 space-y-3 text-sm text-body font-sans-custom">
          {[
            { icon: Mail, href: "mailto:olledavegardh@gmail.com", text: "olledavegardh@gmail.com" },
            { icon: Phone, href: "tel:+46707875398", text: "+46707875398" },
            { icon: Linkedin, href: "https://linkedin.com/in/olleld", text: "linkedin.com/in/olleld" }
          ].map(({ icon: Icon, href, text }, index) => (
            <motion.a
              key={index}
              href={href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.05, duration: 0.4 }}
              className="flex items-center gap-2 hover:text-header transition-colors cursor-hover"
              whileHover={{ 
                x: 5,
                scale: 1.02
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                whileHover={{ rotate: 15 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <Icon size={14} />
              </motion.div>
              {text}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Navigation - Takes remaining space */}
      <motion.nav className="flex-1 min-h-0">
        <ul className="space-y-1">
          {sections.map((section, index) => (
            <motion.li 
              key={section.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                delay: 0.7 + index * 0.05,
                duration: 0.4,
                type: "spring",
                stiffness: 250
              }}
            >
              <motion.button
                className={`w-full text-left px-4 py-2 text-sm font-sans-custom font-medium transition-colors rounded-md relative overflow-hidden cursor-hover flex items-center justify-between ${
                  (activeSection === section.id && !isProjectPage && !section.expandable) || section.expanded
                    ? 'bg-stone-200 text-header shadow-sm' 
                    : 'text-body hover:bg-gray-100 hover:text-header'
                }`}
                onClick={() => onSectionToggle(section.id)}
                whileHover={{ 
                  x: 3,
                  scale: 1.02
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gray-100 to-transparent opacity-0"
                  whileHover={{ opacity: 1, x: [0, 100] }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
                <span className="relative z-10">{section.label}</span>
                {section.expandable && (
                  <motion.div
                    animate={{ rotate: section.expanded ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="relative z-10"
                  >
                    <ChevronRight size={14} />
                  </motion.div>
                )}
              </motion.button>

              {/* Expanded Project List */}
              <AnimatePresence>
                {section.expanded && section.projects && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <ul className="ml-4 mt-2 space-y-1">
                      {section.projects.map((project, projectIndex) => (
                        <motion.li 
                          key={project.id}
                          initial={{ opacity: 0, x: -15 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + projectIndex * 0.05, duration: 0.3 }}
                        >
                          <motion.button
                            className={`w-full text-left px-3 py-1 text-xs font-sans-custom font-medium transition-colors rounded-md cursor-hover ${
                              currentProject === project.id
                                ? 'bg-stone-300 text-header' 
                                : 'text-body hover:bg-gray-200 hover:text-header'
                            }`}
                            onClick={() => navigate(`/${project.id}`)}
                            whileHover={{ 
                              x: 2,
                              scale: 1.01
                            }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                          >
                            {project.title}
                          </motion.button>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
          ))}
        </ul>
      </motion.nav>
    </motion.div>
  )
}

export default Sidebar
