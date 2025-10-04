export const themes = {
  // Current/Original theme
  original: {
    name: 'Original Cream',
    colors: {
      '--color-bg-custom': '#FFFEFB',
      '--color-text-header': '#242222',
      '--color-text-body': '#3f3f46',
      '--color-gray-50': '#f9fafb',
      '--color-gray-100': '#f3f4f6',
      '--color-gray-200': '#e5e7eb',
      '--color-gray-300': '#d1d5db',
      '--color-gray-400': '#9ca3af',
      '--color-gray-800': '#1f2937',
      '--color-gray-900': '#111827',
      '--color-stone-200': '#e7e5e4',
      '--color-stone-300': '#d6d3d1'
    }
  },

  nordicBlue: {
    name: 'Nordic Blue',
    colors: {
      '--color-bg-custom': '#f5f3f1', // Light version of the beige for background
      '--color-text-header': '#1B3C53', // Deep navy blue for headers
      '--color-text-body': '#234C6A', // Slightly lighter navy for body text
      '--color-gray-50': '#f8f6f4', // Very light beige
      '--color-gray-100': '#D2C1B6', // Warm beige for light backgrounds
      '--color-gray-200': '#c4b0a1', // Muted beige for borders
      '--color-gray-300': '#b19c8a', // Darker beige
      '--color-gray-400': '#456882', // Steel blue for muted elements
      '--color-gray-800': '#234C6A', // Navy blue for dark elements
      '--color-gray-900': '#1B3C53', // Deepest navy for darkest elements
      '--color-stone-200': '#e0d4c8', // Light beige for active states
      '--color-stone-300': '#d6c8b8' // Warm beige for accents
    }
  },

  // Dark Mode - Clean and Modern
  darkMode: {
    name: 'Dark Mode',
    colors: {
      '--color-bg-custom': '#0f0f0f', // Pure dark background
      '--color-text-header': '#ffffff', // Pure white for headers
      '--color-text-body': '#e5e5e5', // Light gray for body text
      '--color-gray-50': '#1a1a1a', // Very dark gray
      '--color-gray-100': '#262626', // Dark gray for backgrounds
      '--color-gray-200': '#404040', // Medium gray for borders
      '--color-gray-300': '#525252', // Lighter gray
      '--color-gray-400': '#737373', // Mid gray for muted elements
      '--color-gray-800': '#d4d4d8', // Light gray for dark elements
      '--color-gray-900': '#ffffff', // White for darkest elements
      '--color-stone-200': '#2a2a2a', // Dark stone for active states
      '--color-stone-300': '#3a3a3a' // Lighter dark stone for accents
    }
  },

  // High Contrast Accessibility
  highContrast: {
    name: 'High Contrast',
    colors: {
      '--color-bg-custom': '#ffffff', // Pure white background
      '--color-text-header': '#000000', // Pure black for headers
      '--color-text-body': '#262626', // Dark gray for body (15:1 contrast)
      '--color-gray-50': '#fafafa', // Very light gray
      '--color-gray-100': '#f0f0f0', // Light gray backgrounds
      '--color-gray-200': '#737373', // Medium gray borders (5.9:1 contrast)
      '--color-gray-300': '#525252', // Darker gray (8:1 contrast)
      '--color-gray-400': '#404040', // Dark gray (10.4:1 contrast)
      '--color-gray-800': '#000000', // Pure black
      '--color-gray-900': '#000000', // Pure black
      '--color-stone-200': '#e5e5e5', // Light active state
      '--color-stone-300': '#C3D7FE' // Light blue (4.6:1 contrast, excellent for links)
    }
  }
}

export const applyTheme = (themeName) => {
  const theme = themes[themeName]
  if (!theme) return

  const root = document.documentElement
  
  // Add transitioning class for enhanced smoothness
  root.classList.add('theme-transitioning')
  
  // Apply the new theme colors with smooth transition
  Object.entries(theme.colors).forEach(([property, value]) => {
    root.style.setProperty(property, value)
  })

  // Store current theme in localStorage
  localStorage.setItem('portfolio-theme', themeName)
  
  // Remove transitioning class after animation completes
  setTimeout(() => {
    root.classList.remove('theme-transitioning')
  }, 800)
}

export const getCurrentTheme = () => {
  return localStorage.getItem('portfolio-theme') || 'original'
}

export const getThemeList = () => {
  return Object.keys(themes).map(key => ({
    key,
    name: themes[key].name
  }))
}
