// src/components/ImageModal.jsx
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const ImageModal = ({ images, currentIndex, isOpen, onClose }) => {
  const [activeIndex, setActiveIndex] = useState(currentIndex)

  useEffect(() => {
    setActiveIndex(currentIndex)
  }, [currentIndex])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return
      
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowLeft' && activeIndex > 0) {
        setActiveIndex(activeIndex - 1)
      } else if (e.key === 'ArrowRight' && activeIndex < images.length - 1) {
        setActiveIndex(activeIndex + 1)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, activeIndex, images.length, onClose])

  if (!isOpen || !images || images.length === 0) return null

  const currentImage = images[activeIndex]
  const isMultiple = images.length > 1

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Close button */}
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 bg-white bg-opacity-10 rounded-full text-white hover:bg-opacity-20 transition-colors"
        >
          <X size={24} />
        </motion.button>

        {/* Navigation arrows (only if multiple images) */}
        {isMultiple && activeIndex > 0 && (
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            onClick={(e) => {
              e.stopPropagation()
              setActiveIndex(activeIndex - 1)
            }}
            className="absolute left-6 z-10 p-3 bg-white bg-opacity-10 rounded-full text-white hover:bg-opacity-20 transition-colors"
          >
            <ChevronLeft size={24} />
          </motion.button>
        )}

        {isMultiple && activeIndex < images.length - 1 && (
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            onClick={(e) => {
              e.stopPropagation()
              setActiveIndex(activeIndex + 1)
            }}
            className="absolute right-6 z-10 p-3 bg-white bg-opacity-10 rounded-full text-white hover:bg-opacity-20 transition-colors"
          >
            <ChevronRight size={24} />
          </motion.button>
        )}

        {/* Image container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center"
        >
          <motion.img
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            src={currentImage}
            alt={`Image ${activeIndex + 1}`}
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          />
        </motion.div>

        {/* Image counter (only if multiple images) */}
        {isMultiple && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-10 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm font-sans-custom"
          >
            {activeIndex + 1} / {images.length}
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  )
}

export default ImageModal
