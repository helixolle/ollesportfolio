import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import Section from './Section'
import PortfolioGrid from './PortfolioGrid'
import OtherGrid from './OtherGrid'
import { containerVariants, slideUpVariants } from './AnimatedComponents'

const MainContent = ({ onSectionChange, isMobile, loading }) => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      let current = ''

      sections.forEach(section => {
        const sectionTop = section.offsetTop
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('id')
        }
      })

      if (current) {
        onSectionChange(current)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [onSectionChange])

  return (
    <main className="flex-1 bg-custom">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={loading ? "hidden" : "visible"}
        className="max-w-4xl mx-auto px-12 py-16"
      >
        
        {/* About Section */}
        <motion.div variants={slideUpVariants}>
          <Section id="about" title="Hello!">
            <div className="prose prose-lg max-w-none text-body leading-relaxed font-sans-custom">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={loading ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
                transition={{ delay: .5, duration: 0.4 }}
                className="mb-6"
              >
                I'm Olle, an interaction designer recently graduated from Linnaeus University. 
                I have a foundation in digital graphics, both 3D and 2D, which has given me an 
                eye for detail and an appreciation for visual design. As I dive deeper into 
                interaction design, I'm exploring different aspects of the field, from intuitive 
                interfaces to user research and understanding how people interact with technology.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={loading ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="mb-6"
              >
                I mainly work in Figma, Adobe Creative Suite, and Blender, with some experience 
                in HTML/CSS. I pick up new tools fast, and I'm comfortable with experimenting—whether 
                that's learning unfamiliar software, exploring new design workflows, or integrating 
                AI into my work. I also understand code well enough to modify, adapt, and combine 
                snippets (often with the help of AI), even if I don't write complex code from scratch.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={loading ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.4 }}
                className="mb-6"
              >
                What I love about interaction design and design in general is the mix of creativity, 
                problem-solving, and constantly learning new things. I enjoy working at the intersection 
                of design and research, making sure that digital experiences are not only visually 
                appealing but also user-friendly.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={loading ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.4 }}
                className="mb-0"
              >
                Outside of design, you'll find me reading, playing classical guitar, sailing, or staying active.
              </motion.p>
            </div>
          </Section>
        </motion.div>

        {/* Portfolio Section */}
        <motion.div variants={slideUpVariants}>
          <Section id="portfolio" title="Portfolio">
            <PortfolioGrid loading={loading} />
          </Section>
        </motion.div>

        {/* Other Section */}
        <motion.div variants={slideUpVariants}>
          <Section id="other" title="Other">
            <OtherGrid loading={loading} />
          </Section>
        </motion.div>

        {/* Experience Section - keeping the existing content */}
        <motion.div variants={slideUpVariants}>
          <Section id="experience" title="Experience">
            <div className="space-y-16">
              {/* Education and Experience content stays the same */}
              <div>
                <h3 className="text-xl font-sans-custom font-semibold text-header mb-8 uppercase tracking-wide">
                  Education
                </h3>
                
                <div className="space-y-10">
                  {/* Linnaeus University */}
                  <div className="flex gap-8">
                    <div className="w-24 flex-shrink-0">
                      <span className="text-sm text-body font-sans-custom">2022—2025</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-serif-custom font-medium text-header mb-1">
                        Linnaeus University
                      </h4>
                      <p className="text-sm text-body font-sans-custom mb-2">
                        Bachelor of Science - BS, Interaction design
                      </p>
                      <p className="text-xs text-body font-sans-custom opacity-75 leading-relaxed">
                        UCD, User Research, Prototyping, Accessibility, Design Thinking, Figma, User Testing, Information Architecture
                      </p>
                    </div>
                  </div>

                  {/* Catalyst */}
                  <div className="flex gap-8">
                    <div className="w-24 flex-shrink-0">
                      <span className="text-sm text-body font-sans-custom">2019—2020</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-serif-custom font-medium text-header mb-1">
                        Catalyst - Institute for Creative Arts and Technology
                      </h4>
                      <p className="text-sm text-body font-sans-custom mb-2">
                        Technological Arts & Visual Effects
                      </p>
                      <p className="text-xs text-body font-sans-custom opacity-75 leading-relaxed">
                        Practical VFX, Digital VFX, Film Techniques, 3D Modeling, Compositing, After Effects, Cinema 4D, Motion Graphics
                      </p>
                    </div>
                  </div>

                  {/* YRGO */}
                  <div className="flex gap-8">
                    <div className="w-24 flex-shrink-0">
                      <span className="text-sm text-body font-sans-custom">2017—2018</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-serif-custom font-medium text-header mb-1">
                        YRGO
                      </h4>
                      <p className="text-sm text-body font-sans-custom mb-2">
                        Computer Graphics Design
                      </p>
                      <p className="text-xs text-body font-sans-custom opacity-75 leading-relaxed">
                        3D Product Visualization, 3D Modeling, Animation, Compositing, VFX, Blender, Maya, Product Design
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Work Experience Section */}
              <div>
                <h3 className="text-xl font-sans-custom font-semibold text-header mb-8 uppercase tracking-wide">
                  Experience
                </h3>
                
                <div className="space-y-10">
                  {/* Stadsmissionen */}
                  <div className="flex gap-8">
                    <div className="w-24 flex-shrink-0">
                      <span className="text-sm text-body font-sans-custom">Spring 2025</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-serif-custom font-medium text-header mb-1">
                        Interaction Design
                      </h4>
                      <p className="text-sm text-body font-sans-custom mb-2">
                        Uptilt/Timpunkt
                      </p>
                      <p className="text-xs text-body font-sans-custom opacity-75 leading-relaxed">
                        As part of my education at Linnaeus university we collaborated with Uptilt/Timpunkt and helped them design prototypes for their consumer app.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </Section>
        </motion.div>

      </motion.div>
    </main>
  )
}

export default MainContent
