import React, { useState } from 'react' // Add useState here
import { motion } from 'framer-motion'
import ImageModal from '../ImageModal'








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











const IxdProjectTemplate = ({ project }) => {
  const [modalImages, setModalImages] = useState([])
  const [modalIndex, setModalIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openImageModal = (images, index = 0) => {
    setModalImages(Array.isArray(images) ? images : [images])
    setModalIndex(index)
    setIsModalOpen(true)
  }

  const closeImageModal = () => {
    setIsModalOpen(false)
    setModalImages([])
    setModalIndex(0)
  }

  const isVerticalVideo = project.heroVideo && project.videoType === 'vertical'

  return (
    <>
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

            {/* Project Meta */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm font-sans-custom"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div>
                <h3 className="text-header font-medium mb-1 uppercase tracking-wide">Year</h3>
                <p className="text-body">{project.year}</p>
              </div>
              <div>
                <h3 className="text-header font-medium mb-1 uppercase tracking-wide">Duration</h3>
                <p className="text-body">{project.duration}</p>
              </div>
              <div>
                <h3 className="text-header font-medium mb-1 uppercase tracking-wide">Team</h3>
                <p className="text-body">{project.team}</p>
              </div>
              <div>
                <h3 className="text-header font-medium mb-1 uppercase tracking-wide">Tools</h3>
                <p className="text-body">{project.tools.join(', ')}</p>
              </div>
            </motion.div>
          </div>

          {/* Hero Video or Image */}
          {project.heroVideo ? (
            <MobileVideoDemo
              videoSrc={project.heroVideo}
              caption="Project demo"
              autoPlay={true}
              isVertical={isVerticalVideo}
            />
          ) : project.heroImage ? (
            <motion.div
              className="aspect-video bg-gray-100 rounded-2xl overflow-hidden cursor-pointer group relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              onClick={() => openImageModal([project.heroImage], 0)}
            >
              <img
                src={project.heroImage}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ) : null}

          {/* Overview */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h2 className="text-2xl font-serif-custom font-medium text-header mb-6">
              Overview
            </h2>
            <p className="text-lg text-body font-sans-custom leading-relaxed">
              {project.overview}
            </p>
          </motion.div>
        </motion.section>

        {/* Project Sections */}
        <div className="space-y-24">
          {project.sections.map((section, index) => (
            <ProjectSection
              key={index}
              section={section}
              index={index}
              onImageClick={openImageModal}
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

      {/* Image Modal */}
      <ImageModal
        images={modalImages}
        currentIndex={modalIndex}
        isOpen={isModalOpen}
        onClose={closeImageModal}
      />
    </>
  )
}

// Mobile Video Demo Component
const MobileVideoDemo = ({ videoSrc, caption, autoPlay = false, isVertical = true }) => {
  const isVimeo = videoSrc?.includes('vimeo.com') || videoSrc?.includes('player.vimeo.com')

  const getVimeoEmbedUrl = (url) => {
    let videoId = null;

    if (url.includes('player.vimeo.com/video/')) {
      videoId = url.match(/player\.vimeo\.com\/video\/(\d+)/)?.[1]
    } else if (url.includes('vimeo.com/')) {
      videoId = url.match(/vimeo\.com\/(\d+)/)?.[1]
    }

    if (videoId) {
      return `https://player.vimeo.com/video/${videoId}?autoplay=0&loop=1&muted=1&controls=1&responsive=1`
    }
    return null
  }

  const embedUrl = isVimeo ? getVimeoEmbedUrl(videoSrc) : null

  return (
    <motion.div
      className="flex justify-center my-16"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <div className={`relative w-full ${isVertical ? 'max-w-sm' : 'max-w-4xl'}`}>
        <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
          {isVimeo && embedUrl ? (
            <iframe
              src={embedUrl}
              className={`w-full ${isVertical ? 'aspect-[9/16]' : 'aspect-video'}`}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Demo Video"
            />
          ) : (
            <video
              className={`w-full ${isVertical ? 'aspect-[9/16]' : 'aspect-video'}`}
              autoPlay={autoPlay}
              loop
              muted
              playsInline
              controls={!autoPlay}
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>

        {caption && (
          <p className="text-sm text-body font-sans-custom text-center mt-4 italic">
            {caption}
          </p>
        )}
      </div>
    </motion.div>
  )
}

const ProjectSection = ({ section, index, onImageClick }) => {
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
      className="relative"
    >
      {/* Challenge Section */}
      {section.type === 'challenge' && (
        <div className="max-w-3xl">
          <div className="flex items-start gap-8 mb-8">
            <div className="hidden md:block w-24 h-24 rounded-full bg-gray-50 flex-shrink-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-gray-200"></div>
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-serif-custom font-medium text-header mb-6">
                {section.title}
              </h2>
              <p className="text-lg text-body font-sans-custom leading-relaxed">
                {parseContent(section.content)}
              </p>

              {section.insights && (
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 mt-8">
                  <ul className="space-y-3">
                    {section.insights.map((insight, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-body font-sans-custom">
                        <div className="w-2 h-2 rounded-full bg-gray-400 mt-3 flex-shrink-0"></div>
                        <span>{insight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Discovery Section */}
      {section.type === 'discovery' && (
        <div className="max-w-3xl">
          <div className="flex items-start gap-8 mb-8">
            <div className="hidden md:block w-24 h-24 rounded-full bg-gray-50 flex-shrink-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-gray-200"></div>
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-serif-custom font-medium text-header mb-6">
                {section.title}
              </h2>
              <p className="text-lg text-body font-sans-custom leading-relaxed mb-8">
                {parseContent(section.content)}
              </p>

              {section.insights && (
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                  <h3 className="text-lg font-sans-custom font-medium text-header mb-4">
                    Key Insights
                  </h3>
                  <ul className="space-y-3">
                    {section.insights.map((insight, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-body font-sans-custom">
                        <div className="w-2 h-2 rounded-full bg-gray-400 mt-3 flex-shrink-0"></div>
                        <span>{insight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <br />
              {section.metrics && (
                <div className="grid md:grid-cols-3 gap-8">
                  {section.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center p-8 bg-gray-50 rounded-2xl border border-gray-100">
                      <div className="text-4xl font-serif-custom font-medium text-header mb-3">
                        {metric.value}
                      </div>
                      <h3 className="text-sm font-sans-custom font-medium text-header mb-2 uppercase tracking-wide">
                        {metric.label}
                      </h3>
                      <p className="text-sm text-body font-sans-custom">
                        {metric.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}




              {section.images && (
                <div className={`my-8 ${section.images.length === 1
                  ? 'space-y-6' // Single image: full width
                  : section.images.length === 2
                    ? 'grid md:grid-cols-2 gap-6' // Two images: side by side
                    : 'space-y-6' // Three or more: stacked vertically
                  }`}>
                  {section.images.map((image, idx) => (
                    <motion.div
                      key={idx}
                      className="cursor-pointer group relative"
                      onClick={() => onImageClick(section.images, idx)}
                      whileHover={{ scale: section.images.length > 2 ? 1.01 : 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <img
                        src={image}
                        alt={`${section.title} ${idx + 1}`}
                        className="w-full h-auto rounded-lg shadow-lg border border-gray-200 group-hover:shadow-xl transition-all duration-300"
                        style={{
                          maxHeight: section.images.length === 1 ? '80vh' : '60vh'
                        }}
                      />

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-3">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Approach Section */}
      {section.type === 'approach' && (
        <div className="max-w-3xl">
          <div className="flex items-start gap-8 mb-8">
            <div className="hidden md:block w-24 h-24 rounded-full bg-gray-50 flex-shrink-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-gray-200"></div>
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-serif-custom font-medium text-header mb-6">
                {section.title}
              </h2>
              <p className="text-lg text-body font-sans-custom leading-relaxed mb-8">
                {parseContent(section.content)}
              </p>

              {section.features && (
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 mb-8">
                  <ul className="space-y-3">
                    {section.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-body font-sans-custom">
                        <div className="w-2 h-2 rounded-full bg-gray-400 mt-3 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {section.images && (
                <div className={`my-8 ${section.images.length === 1
                  ? 'space-y-6' // Single image: full width
                  : section.images.length === 2
                    ? 'grid md:grid-cols-2 gap-6' // Two images: side by side
                    : 'space-y-6' // Three or more: stacked vertically
                  }`}>
                  {section.images.map((image, idx) => (
                    <motion.div
                      key={idx}
                      className="cursor-pointer group relative"
                      onClick={() => onImageClick(section.images, idx)}
                      whileHover={{ scale: section.images.length > 2 ? 1.01 : 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <img
                        src={image}
                        alt={`${section.title} ${idx + 1}`}
                        className="w-full h-auto rounded-lg shadow-lg border border-gray-200 group-hover:shadow-xl transition-all duration-300"
                        style={{
                          maxHeight: section.images.length === 1 ? '80vh' : '60vh'
                        }}
                      />

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-3">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Solution Section */}
      {section.type === 'solution' && (
        <div className="max-w-3xl">
          <div className="flex items-start gap-8 mb-8">
            <div className="hidden md:block w-24 h-24 rounded-full bg-gray-50 flex-shrink-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-gray-200"></div>
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-serif-custom font-medium text-header mb-6">
                {section.title}
              </h2>
              <p className="text-lg text-body font-sans-custom leading-relaxed mb-8">
                {parseContent(section.content)}
              </p>

              {section.video && (
                <MobileVideoDemo
                  videoSrc={section.video}
                  caption={section.videoCaption}
                  isVertical={section.videoType === 'vertical'}
                />
              )}

              {/* Multiple videos (NEW) */}
              {section.videos && (
                <div className="space-y-8 my-8">
                  {section.videos.map((video, idx) => (
                    <MobileVideoDemo
                      key={idx}
                      videoSrc={video.src}
                      caption={video.caption}
                      isVertical={video.videoType === 'vertical'}
                      autoPlay={false}
                    />
                  ))}
                </div>
              )}

              {section.features && (
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                  <h3 className="text-lg font-sans-custom font-medium text-header mb-4">
                    Key Features
                  </h3>
                  <ul className="space-y-3">
                    {section.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-body font-sans-custom">
                        <div className="w-2 h-2 rounded-full bg-gray-400 mt-3 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {section.insights && (
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 mt-8">
                  <h3 className="text-lg font-sans-custom font-medium text-header mb-4">
                    Key Insights
                  </h3>
                  <ul className="space-y-3">
                    {section.insights.map((insight, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-body font-sans-custom">
                        <div className="w-2 h-2 rounded-full bg-gray-400 mt-3 flex-shrink-0"></div>
                        <span>{insight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <br />
              <p className="text-lg text-body font-sans-custom leading-relaxed mb-8">
                {section.content2}
              </p>

              {section.images && (
                <div className={`my-8 ${section.images.length === 1
                  ? 'space-y-6' // Single image: full width
                  : section.images.length === 2
                    ? 'grid md:grid-cols-2 gap-6' // Two images: side by side
                    : 'space-y-6' // Three or more: stacked vertically
                  }`}>
                  {section.images.map((image, idx) => (
                    <motion.div
                      key={idx}
                      className="cursor-pointer group relative"
                      onClick={() => onImageClick(section.images, idx)}
                      whileHover={{ scale: section.images.length > 2 ? 1.01 : 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <img
                        src={image}
                        alt={`${section.title} ${idx + 1}`}
                        className="w-full h-auto rounded-lg shadow-lg border border-gray-200 group-hover:shadow-xl transition-all duration-300"
                        style={{
                          maxHeight: section.images.length === 1 ? '80vh' : '60vh'
                        }}
                      />

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-3">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Process Section */}
      {section.type === 'process' && (
        <div className="max-w-3xl">
          <div className="flex items-start gap-8 mb-8">
            <div className="hidden md:block w-24 h-24 rounded-full bg-gray-50 flex-shrink-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-gray-200"></div>
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-serif-custom font-medium text-header mb-6">
                {section.title}
              </h2>
              <p className="text-lg text-body font-sans-custom leading-relaxed mb-8">
                {parseContent(section.content)}
              </p>

              {section.images && (
                <div className={`my-8 ${section.images.length === 1
                  ? 'space-y-6' // Single image: full width
                  : section.images.length === 2
                    ? 'grid md:grid-cols-2 gap-6' // Two images: side by side
                    : 'space-y-6' // Three or more: stacked vertically
                  }`}>
                  {section.images.map((image, idx) => (
                    <motion.div
                      key={idx}
                      className="cursor-pointer group relative"
                      onClick={() => onImageClick(section.images, idx)}
                      whileHover={{ scale: section.images.length > 2 ? 1.01 : 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <img
                        src={image}
                        alt={`${section.title} ${idx + 1}`}
                        className="w-full h-auto rounded-lg shadow-lg border border-gray-200 group-hover:shadow-xl transition-all duration-300"
                        style={{
                          maxHeight: section.images.length === 1 ? '80vh' : '60vh'
                        }}
                      />

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-3">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Impact Section */}
      {section.type === 'impact' && (
        <div className="max-w-4xl">
          <div className="flex items-start gap-8 mb-8">
            <div className="hidden md:block w-24 h-24 rounded-full bg-gray-50 flex-shrink-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-gray-200"></div>
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-serif-custom font-medium text-header mb-6">
                {section.title}
              </h2>
              <p className="text-lg text-body font-sans-custom leading-relaxed mb-8">
                {parseContent(section.content)}
              </p>

              {section.insights && (
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 mb-8">
                  <ul className="space-y-3">
                    {section.insights.map((insight, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-body font-sans-custom">
                        <div className="w-2 h-2 rounded-full bg-gray-400 mt-3 flex-shrink-0"></div>
                        <span>{insight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {section.metrics && (
                <div className="grid md:grid-cols-3 gap-8">
                  {section.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center p-8 bg-gray-50 rounded-2xl border border-gray-100">
                      <div className="text-4xl font-serif-custom font-medium text-header mb-3">
                        {metric.value}
                      </div>
                      <h3 className="text-sm font-sans-custom font-medium text-header mb-2 uppercase tracking-wide">
                        {metric.label}
                      </h3>
                      <p className="text-sm text-body font-sans-custom">
                        {metric.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Conclusion Section */}
      {section.type === 'conclusion' && (
        <div className="max-w-3xl">
          <div className="flex items-start gap-8 mb-8">
            <div className="hidden md:block w-24 h-24 rounded-full bg-gray-50 flex-shrink-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-gray-200"></div>
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-serif-custom font-medium text-header mb-6">
                {section.title}
              </h2>
              <p className="text-lg text-body font-sans-custom leading-relaxed">
                {parseContent(section.content)}
              </p>
            </div>
          </div>
        </div>
      )}
    </motion.section>

  )
}

export default IxdProjectTemplate
