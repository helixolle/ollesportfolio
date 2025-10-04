import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { themes, applyTheme, getCurrentTheme, getThemeList } from '../themes/themes'

const CompactThemeSelector = () => {
  const [currentTheme, setCurrentTheme] = useState(getCurrentTheme())
  const [isTransitioning, setIsTransitioning] = useState(false)
  const themeList = getThemeList()

  useEffect(() => {
    applyTheme(currentTheme)
  }, [])

  const handleThemeChange = (themeName) => {
    if (themeName === currentTheme || isTransitioning) return
    
    setIsTransitioning(true)
    applyTheme(themeName)
    setCurrentTheme(themeName)
    
    setTimeout(() => {
      setIsTransitioning(false)
    }, 800)
  }

  const getActiveIndex = () => {
    return themeList.findIndex(theme => theme.key === currentTheme)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9, duration: 0.4 }}
      className="relative w-full"
    >
      {/* Mobile-friendly pill container */}
      <div className="relative bg-gray-100 rounded-full p-1 flex border border-gray-100 w-full max-w-xs mx-auto">
        {/* Active indicator */}
        <motion.div
          className="absolute bg-custom rounded-full shadow-sm border border-gray-200 h-8"
          style={{
            width: `${100 / themeList.length}%`,
            left: `${(getActiveIndex() * 100) / themeList.length}%`,
          }}
          initial={false}
          animate={{
            left: `${(getActiveIndex() * 100) / themeList.length}%`,
          }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 30 
          }}
        />
        
        {/* Theme buttons */}
        {themeList.map((theme, index) => (
          <button
            key={theme.key}
            onClick={() => handleThemeChange(theme.key)}
            disabled={isTransitioning}
            className={`
              relative z-10 flex-1 px-2 py-2 rounded-full text-xs font-sans-custom font-medium
              transition-colors duration-200
              ${currentTheme === theme.key 
                ? 'text-header' 
                : 'text-gray-400 hover:text-body'
              }
              ${isTransitioning ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
            `}
          >
            <span className="block truncate">
              {theme.key === 'original' && 'Cream'}
              {theme.key === 'nordicBlue' && 'Nordic'} 
              {theme.key === 'darkMode' && 'Dark'}
              {theme.key === 'highContrast' && 'a11y'}
            </span>
          </button>
        ))}
      </div>

      {/* Transitioning indicator - now positioned better for mobile */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded-full text-xs font-sans-custom whitespace-nowrap"
          >
            Switching theme...
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default CompactThemeSelector
