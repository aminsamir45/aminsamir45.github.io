'use client'

import React from 'react'
import { motion } from 'framer-motion'

const ExperienceSection = () => {
  const experiences = [
    {
      company: 'Mercor',
      role: 'Software Engineer, MIT Brand Ambassador',
      period: 'February 2025 - May 2025',
      location: 'Remote',
      description: 'Enhanced data aggregation pipelines for novel job matching algorithm',
      achievements: ['Improved matching accuracy', 'Optimized data processing'],
      website: 'https://mercor.com/'
    },
    {
      company: 'HomeRunns',
      role: 'Chief Technology Officer, Co-Founder',
      period: 'November 2023 - January 2025',
      location: 'Cambridge, MA',
      description: 'Built marketplace connecting homeowners with contractors',
      achievements: ['Generated $195K ARR in year one', 'Developed full-stack platform using Swift, Kotlin, React, JavaScript, Firebase, and GCP'],
      website: 'https://homerunns.com'
    },
    {
      company: 'MIT CSAIL - FutureTech Lab',
      role: 'Research Intern',
      period: 'May 2023 - November 2023',
      location: 'Cambridge, MA',
      description: 'Analyzed trends in machine learning compute acceleration',
      achievements: ['Collected and managed data on compute trends', 'Contributed to research publications'],
      website: 'https://computerprogress.csail.mit.edu'
    },
    {
      company: 'MIT Schwarzman College of Computing',
      role: 'Machine Learning Intern',
      period: 'May 2022 - May 2023',
      location: 'Cambridge, MA',
      description: 'Developed multimodal machine learning model for natural disaster prediction',
      achievements: ['Built ML models for disaster prediction', 'Published research findings'],
      website: 'https://computing.mit.edu'
    }
  ]

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Experience</h2>
          <p className="text-xl text-foreground/70">My professional journey in tech and research</p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/30"></div>
          
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative flex items-start mb-12"
            >
              {/* Timeline dot */}
              <div className="absolute left-6 w-4 h-4 bg-accent rounded-full border-4 border-background z-10"></div>
              
              {/* Content */}
              <div className="ml-20 bg-background/30 backdrop-blur-sm border border-accent/20 rounded-xl p-6 hover:border-accent/40 transition-all duration-300 w-full">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{exp.role}</h3>
                    <motion.a
                      href={exp.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="text-accent hover:text-accent/80 font-semibold transition-colors duration-200"
                    >
                      {exp.company}
                    </motion.a>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <p className="text-foreground/70 font-medium">{exp.period}</p>
                    <p className="text-foreground/60 text-sm">{exp.location}</p>
                  </div>
                </div>
                
                <p className="text-foreground/80 mb-4">{exp.description}</p>
                
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span className="text-foreground/70">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection 