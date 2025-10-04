import React from 'react'

const Section = ({ id, title, children }) => {
  return (
    <section id={id} className="mb-16 scroll-mt-8">
      <h2 className="text-4xl font-serif-custom font-medium text-header mb-8">
        {title}
      </h2>
      {children}
    </section>
  )
}

export default Section
