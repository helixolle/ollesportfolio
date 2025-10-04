import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Palette, X } from 'lucide-react'
import { themes, applyTheme, getCurrentTheme, getThemeList } from '../themes/themes'

const ThemeSelector = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentTheme, setCurrentTheme] = useState(getCurrentTheme())
  const themeList = getThemeList()

  useEffect(() => {
    // Apply saved theme on component mount
    applyTheme(currentTheme)
  }, [])

  const handleThemeChange = (themeName) => {
    applyTheme(themeName)
    setCurrentTheme(themeName)
  }

  return (
    <div className="fixed top-6 right-6 z-40">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center shadow-lg transition-colors cursor-hover"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Palette size={18} className="text-header" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-20 z-30"
              onClick={() => setIsOpen(false)}
            />

            {/* Theme Panel */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.9 }}
              className="absolute top-16 right-0 bg-custom border border-gray-200 rounded-2xl p-6 shadow-xl min-w-80 z-40"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-serif-custom font-medium text-header">
                  Choose Theme
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 text-body hover:text-header transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Pill Button Group */}
              <div className="grid grid-cols-1 gap-3">
                {themeList.map((theme) => (
                  <motion.button
                    key={theme.key}
                    onClick={() => handleThemeChange(theme.key)}
                    className={`relative px-6 py-4 rounded-full transition-all duration-300 font-sans-custom text-sm font-medium text-left overflow-hidden ${
                      currentTheme === theme.key
                        ? 'bg-stone-200 text-header shadow-md scale-105'
                        : 'bg-gray-50 text-body hover:bg-gray-100 hover:text-header hover:scale-102'
                    }`}
                    whileHover={{ scale: currentTheme === theme.key ? 1.05 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    {/* Animated background */}
                    {currentTheme === theme.key && (
                      <motion.div
                        layoutId="activeTheme"
                        className="absolute inset-0 bg-stone-200 rounded-full"
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      />
                    )}
                    
                    <div className="relative z-10 flex items-center justify-between">
                      <div>
                        <div className="font-medium mb-1">{theme.name}</div>
                        
                        {/* Color preview pills */}
                        <div className="flex gap-1">
                          {Object.values(themes[theme.key].colors).slice(0, 4).map((color, index) => (
                            <div
                              key={index}
                              className="w-3 h-3 rounded-full border border-gray-300"
                              style={{ backgroundColor: color }}
                            />
                          ))}
                        </div>
                      </div>
                      
                      {/* Active indicator */}
                      {currentTheme === theme.key && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-2 h-2 rounded-full bg-header"
                        />
                      )}
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Footer info */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-xs text-body font-sans-custom text-center">
                  Theme preference is automatically saved
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ThemeSelector
