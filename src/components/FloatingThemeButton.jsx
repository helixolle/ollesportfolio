// components/FloatingThemeButton.jsx
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Palette } from 'lucide-react'
import { themes, applyTheme, getCurrentTheme, getThemeList } from '../themes/themes'

const FloatingThemeButton = () => {
  const [currentTheme, setCurrentTheme] = useState(getCurrentTheme())
  const [isOpen, setIsOpen] = useState(false)
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
    setIsOpen(false)
    
    setTimeout(() => {
      setIsTransitioning(false)
    }, 800)
  }

  return (
    <>
      {/* Main floating button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 lg:right-[380px] w-14 h-14 bg-custom rounded-full shadow-lg border border-gray-200 flex items-center justify-center z-40 cursor-hover"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.4 }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Palette size={20} className="text-header" />
        </motion.div>
      </motion.button>

      {/* Theme options popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="fixed bottom-20 right-6 lg:right-[380px] bg-custom rounded-2xl shadow-xl border border-gray-200 p-3 z-40"
          >
            <div className="grid grid-cols-2 gap-2">
              {themeList.map((theme) => (
                <motion.button
                  key={theme.key}
                  onClick={() => handleThemeChange(theme.key)}
                  disabled={isTransitioning}
                  className={`
                    px-4 py-3 rounded-xl text-sm font-sans-custom font-medium
                    transition-colors duration-200 cursor-hover
                    ${currentTheme === theme.key 
                      ? 'bg-gray-100 border border-gray-200 text-header' 
                      : 'text-body hover:bg-gray-50'
                    }
                    ${isTransitioning ? 'opacity-50 cursor-not-allowed' : ''}
                  `}
                  whileHover={{ scale: currentTheme !== theme.key ? 1.02 : 1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {theme.key === 'original' && 'Cream'}
                  {theme.key === 'nordicBlue' && 'Nordic'} 
                  {theme.key === 'darkMode' && 'Dark'}
                  {theme.key === 'highContrast' && 'a11y'}
                </motion.button>
              ))}
            </div>

            {/* Little arrow pointing down */}
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-custom border-r border-b border-gray-200 transform rotate-45"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Click outside to close */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Transitioning indicator */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed bottom-24 right-6 lg:right-[380px] bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-sans-custom whitespace-nowrap z-40"
          >
            Switching theme...
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default FloatingThemeButton
