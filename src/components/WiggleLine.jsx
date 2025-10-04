import React, { useEffect, useRef } from 'react'

const WiggleLine = () => {
  const pathRef = useRef(null)
  const wiggleAmountRef = useRef(0)
  const targetWiggleRef = useRef(0)
  const lastScrollYRef = useRef(0)
  const animationIdRef = useRef(null)
  const scrollTimeoutRef = useRef(null)

  const numPoints = 100
  const pathHeight = 1000

  // Perlin noise function approximation
  const perlinNoise = (x) => {
    return Math.sin(x * 0.1) * 10 + Math.sin(x * 0.05) * 5
  }

  const generatePath = (amount) => {
    if (!pathRef.current) return
    
    let points = []
    for (let i = 0; i < numPoints; i++) {
      let wave = perlinNoise(i + performance.now() / 30)
      let x = 50 + wave * amount
      let y = (i / (numPoints - 1)) * pathHeight
      points.push(`${x},${y}`)
    }
    pathRef.current.setAttribute("d", `M${points.join(" L")}`)
  }

  const animate = () => {
    // Gradual transition
    wiggleAmountRef.current += (targetWiggleRef.current - wiggleAmountRef.current) * 0.02
    generatePath(wiggleAmountRef.current)
    animationIdRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    // Generate initial straight line
    generatePath(0)
    
    // Start animation loop
    animate()

    const handleScroll = () => {
      let deltaY = Math.abs(window.scrollY - lastScrollYRef.current)
      lastScrollYRef.current = window.scrollY

      let scrollSpeed = deltaY
      targetWiggleRef.current = Math.min(scrollSpeed / 3, 6)
      
      clearTimeout(scrollTimeoutRef.current)
      scrollTimeoutRef.current = setTimeout(() => {
        targetWiggleRef.current = 0
      }, 300)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
      clearTimeout(scrollTimeoutRef.current)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <svg 
      viewBox="0 0 100 1000" 
      preserveAspectRatio="none" 
      className="w-full h-full"
    >
      <defs>
        <linearGradient id="fadeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#9ca3af', stopOpacity: 0 }} />
          <stop offset="15%" style={{ stopColor: '#9ca3af', stopOpacity: 0.7 }} />
          <stop offset="85%" style={{ stopColor: '#9ca3af', stopOpacity: 0.7 }} />
          <stop offset="100%" style={{ stopColor: '#9ca3af', stopOpacity: 0 }} />
        </linearGradient>
      </defs>
      <path
        ref={pathRef}
        d="M50,0 L50,1000"
        fill="none"
        strokeWidth="1"
        stroke="url(#fadeGradient)"
      />
    </svg>
  )
}

export default WiggleLine
