import React from 'react'

const MobileMenu = ({ isOpen, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="lg:hidden fixed top-6 left-6 z-50 p-3 bg-white text-gray-900 rounded-lg shadow-lg border hover:bg-gray-50 transition-colors"
    >
      <div className="w-5 h-4 flex flex-col justify-between">
        <span className={`w-full h-0.5 bg-current transition-transform ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
        <span className={`w-full h-0.5 bg-current transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
        <span className={`w-full h-0.5 bg-current transition-transform ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
      </div>
    </button>
  )
}

export default MobileMenu
