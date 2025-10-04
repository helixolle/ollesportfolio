import React from 'react'
import { motion } from 'framer-motion'

// Helper function to parse simple markdown in content
const parseContent = (content) => {
  if (!content) return null;
  
  // Split by double line breaks for paragraphs
  const paragraphs = content.split('\n\n');
  
  return paragraphs.map((paragraph, paragraphIndex) => {
    // Split by single line breaks within paragraphs
    const lines = paragraph.split('\n');
    
    const paragraphContent = lines.map((line, lineIndex) => {
      // Handle bold text with **text**
      const boldRegex = /\*\*(.*?)\*\*/g;
      const parts = line.split(boldRegex);
      
      const formattedLine = parts.map((part, partIndex) => {
        // Every odd index is the bold text content
        if (partIndex % 2 === 1) {
          return <strong key={partIndex} className="font-semibold text-header">{part}</strong>;
        }
        return part;
      });
      
      // Add line breaks between lines within a paragraph
      if (lineIndex > 0) {
        return [<br key={`br-${paragraphIndex}-${lineIndex}`} />, ...formattedLine];
      }
      return formattedLine;
    }).flat();
    
    // Return each paragraph
    return (
      <p key={paragraphIndex} className="mb-4 last:mb-0">
        {paragraphContent}
      </p>
    );
  });
};

const VfxProjectTemplate = ({ project }) => {
  return (
    <div className="max-w-4xl mx-auto px-12 py-16">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-24"
      >
        {/* Project Header */}
        <div className="mb-12">
          <motion.h1 
            className="text-5xl md:text-6xl font-serif-custom font-medium text-header leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {project.title}
          </motion.h1>
          
          <motion.p 
            className="text-xl text-body font-sans-custom leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {project.subtitle}
          </motion.p>

          {/* Year */}
          <motion.div 
            className="text-sm font-sans-custom text-body mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {project.year}
          </motion.div>
        </div>

        {/* Hero Video */}
        {project.heroVideo && (
          <motion.div 
            className="aspect-video bg-gray-900 rounded-2xl overflow-hidden mb-16"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <iframe
              src={project.heroVideo}
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title={project.title}
            />
          </motion.div>
        )}

        {/* Project Meta Sidebar */}
        <motion.div 
          className="flex flex-col md:flex-row gap-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {/* Main Content */}
          <div className="flex-1">
            <div className="text-lg text-body font-sans-custom leading-relaxed">
              {parseContent(project.overview)}
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:w-64 flex-shrink-0">
            <div className="bg-gray-50 rounded-2xl p-6 space-y-6">
              <div>
                <h3 className="text-sm font-sans-custom font-medium text-header mb-2 uppercase tracking-wide">
                  Team
                </h3>
                <p className="text-sm text-body font-sans-custom">
                  {project.team}
                </p>
              </div>
              
              <div>
                <h3 className="text-sm font-sans-custom font-medium text-header mb-2 uppercase tracking-wide">
                  Tools
                </h3>
                <div className="flex flex-wrap gap-1">
                  {project.tools.map((tool, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-white text-body font-sans-custom text-xs rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Project Sections */}
      <div className="space-y-16">
        {project.sections.map((section, index) => (
          <VfxSection 
            key={index} 
            section={section} 
            index={index}
          />
        ))}
      </div>

      {/* Thank You */}
      <motion.section 
        className="mt-32 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-3xl font-serif-custom font-medium text-header mb-4">
          Thank you for your time!
        </h2>
        <p className="text-body font-sans-custom">
          © Olle Lomberg Davegård
        </p>
      </motion.section>
    </div>
  )
}

const VfxSection = ({ section, index }) => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        delay: index * 0.1
      } 
    }
  }

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="max-w-3xl"
    >
      <h2 className="text-2xl font-serif-custom font-medium text-header mb-6">
        {section.title}
      </h2>
      <div className="text-lg text-body font-sans-custom leading-relaxed">
        {parseContent(section.content)}
      </div>

      {/* Images */}
      {section.images && (
        <div className="my-8 space-y-6">
          {section.images.map((image, idx) => (
            <motion.div
              key={idx}
              className="cursor-pointer group relative max-w-full"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <img
                src={image}
                alt={`${section.title} ${idx + 1}`}
                className="w-full h-auto rounded-lg shadow-lg border border-gray-200 group-hover:shadow-xl transition-all duration-300"
                style={{ maxHeight: '80vh' }}
              />
            </motion.div>
          ))}
        </div>
      )}
    </motion.section>
  )
}

export default VfxProjectTemplate
