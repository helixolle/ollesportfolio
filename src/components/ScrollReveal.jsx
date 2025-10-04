import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

const ScrollReveal = ({ children, direction = "up", delay = 0, duration = 0.6 }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 75 : direction === "down" ? -75 : 0,
      x: direction === "left" ? 75 : direction === "right" ? -75 : 0,
      scale: 0.95,
      rotate: direction === "up" ? -2 : direction === "down" ? 2 : 0
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      rotate: 0,
      transition: {
        duration,
        delay,
        type: "spring",
        stiffness: 200,
        damping: 25
      }
    }
  }

  return (
    <div ref={ref}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={mainControls}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default ScrollReveal
