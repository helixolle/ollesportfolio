import React, { useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getProject } from '../data/projects'
import IxdProjectTemplate from './project-templates/IxdProjectTemplate'
import VfxProjectTemplate from './project-templates/VfxProjectTemplate'

const ProjectPage = () => {
  const { projectId } = useParams()
  const project = getProject(projectId)

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [projectId])

  if (!project) {
    return <Navigate to="/" replace />
  }

  return (
    <motion.main 
      className="flex-1 bg-custom"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {project.type === 'ixd' ? (
        <IxdProjectTemplate project={project} />
      ) : (
        <VfxProjectTemplate project={project} />
      )}
    </motion.main>
  )
}

export default ProjectPage
