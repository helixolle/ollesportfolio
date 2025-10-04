import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Play } from 'lucide-react'
import { getProjectsByType } from '../data/projects'

const VfxCard = ({ item, index, loading, onClick }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={loading ? { opacity: 0, y: 50 } : { opacity: 1, y: 0 }}
      transition={{ delay: 0.6 + index * 0.2, duration: 0.4 }}
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <motion.div
        animate={{ 
          y: isHovered ? -8 : 0,
          transition: { 
            type: "spring", 
            stiffness: 300, 
            damping: 30, 
            duration: isHovered ? 0.4 : 0.5
          }
        }}
      >
        <motion.div 
          className="aspect-video bg-gray-900 rounded-lg overflow-hidden mb-4 relative"
          animate={{ 
            scale: isHovered ? 1.02 : 1,
            transition: { 
              type: "spring", 
              stiffness: 300, 
              damping: 30, 
              duration: isHovered ? 0.4 : 0.5
            }
          }}
        >
          <motion.img 
            src={item.heroImage || '/api/placeholder/400/300'} 
            alt={item.title}
            className="w-full h-full object-cover"
            animate={{ 
              scale: isHovered ? 1.1 : 1,
              transition: { 
                duration: isHovered ? 0.5 : 0.6, 
                ease: "easeOut" 
              }
            }}
          />
          
          <motion.div 
            className="absolute inset-0 bg-black bg-opacity-0"
            animate={{
              backgroundColor: isHovered ? "rgba(0, 0, 0, 0.2)" : "rgba(0, 0, 0, 0)",
              transition: { duration: isHovered ? 0.3 : 0.4 }
            }}
          />
          
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1 : 0.8,
              transition: { 
                duration: isHovered ? 0.3 : 0.2
              }
            }}
          >
            <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Play size={20} className="text-header ml-1" />
            </div>
          </motion.div>
        </motion.div>
        
        <div className="space-y-3">
          <motion.div 
            className="flex items-start justify-between"
            animate={{ 
              x: isHovered ? 5 : 0,
              transition: { 
                type: "spring", 
                stiffness: 300, 
                damping: 30, 
                duration: isHovered ? 0.4 : 0.5
              }
            }}
          >
            <h3 className="text-lg font-sans-custom font-medium text-header">
              {item.title}
            </h3>
          </motion.div>
          
          <motion.p 
            className="text-body font-sans-custom text-sm leading-relaxed"
            animate={{ 
              x: isHovered ? 5 : 0,
              transition: { 
                type: "spring", 
                stiffness: 300, 
                damping: 30, 
                delay: isHovered ? 0.05 : 0,
                duration: isHovered ? 0.4 : 0.5
              }
            }}
          >
            {item.subtitle}
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-2"
            animate={{ 
              x: isHovered ? 5 : 0,
              transition: { 
                type: "spring", 
                stiffness: 300, 
                damping: 30, 
                delay: isHovered ? 0.1 : 0,
                duration: isHovered ? 0.4 : 0.5
              }
            }}
          >
            {item.tags.map((tag, tagIndex) => (
              <span 
                key={tagIndex}
                className="px-3 py-1 bg-gray-800 text-white font-sans-custom text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

const OtherGrid = ({ loading }) => {
  const navigate = useNavigate()
  const projects = getProjectsByType('vfx')

  return (
    <div className="grid md:grid-cols-2 gap-12">
      {projects.map((item, index) => (
        <VfxCard 
          key={item.id}
          item={item}
          index={index}
          loading={loading}
          onClick={() => navigate(`/${item.id}`)}
        />
      ))}
    </div>
  )
}

export default OtherGrid
