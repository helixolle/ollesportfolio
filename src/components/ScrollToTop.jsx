import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Add a small delay to ensure content is loaded
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 100)
  }, [pathname])

  return null
}

export default ScrollToTop
