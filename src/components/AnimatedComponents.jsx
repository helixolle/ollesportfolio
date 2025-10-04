import React from 'react'
import { motion } from 'framer-motion'

// Container variants for staggered children
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

// Slide up with slight rotation - classy with a twist
export const slideUpVariants = {
  hidden: { 
    opacity: 0, 
    y: 30, 
    rotate: -2,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    rotate: 0,
    scale: 1,
    transition: { 
      type: "spring", 
      damping: 25, 
      stiffness: 300,
      duration: 0.6
    } 
  }
}

// Slide in from left with bounce
export const slideLeftVariants = {
  hidden: { 
    opacity: 0, 
    x: -50, 
    rotate: 3
  },
  visible: { 
    opacity: 1, 
    x: 0, 
    rotate: 0,
    transition: { 
      type: "spring", 
      damping: 20, 
      stiffness: 300,
      duration: 0.7
    } 
  }
}

// Scale in with slight overshoot - playful but elegant
export const scaleVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    rotate: -5
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    rotate: 0,
    transition: { 
      type: "spring", 
      damping: 15, 
      stiffness: 200,
      duration: 0.8
    } 
  }
}

// Fade with gentle float
export const fadeFloatVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      type: "spring", 
      damping: 30, 
      stiffness: 400,
      duration: 0.5
    } 
  }
}

// Typewriter effect for text
export const typewriterVariants = {
  hidden: { width: 0, opacity: 0 },
  visible: {
    width: "auto",
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: "easeInOut"
    }
  }
}

// Portfolio card variants - dramatic entrance
export const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    rotate: -8,
    scale: 0.8
  },
  visible: { 
    opacity: 1, 
    y: 0,
    rotate: 0,
    scale: 1,
    transition: { 
      type: "spring", 
      damping: 20, 
      stiffness: 200,
      duration: 0.8
    } 
  }
}

// Animated wrapper components
export const AnimatedDiv = ({ children, variants = slideUpVariants, delay = 0, className = "" }) => (
  <motion.div
    variants={variants}
    initial="hidden"
    animate="visible"
    transition={{ delay }}
    className={className}
  >
    {children}
  </motion.div>
)

export const AnimatedSection = ({ children, className = "" }) => (
  <motion.section
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    className={className}
  >
    {children}
  </motion.section>
)
