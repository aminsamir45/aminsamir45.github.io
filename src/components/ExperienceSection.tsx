'use client'

import React from 'react'

const ExperienceSection = () => {
  const experiences = [
    {
      company: 'Weave',
      role: 'Founding AI Engineer',
      period: 'August 2025 - Present',
      location: 'San Fransisco, CA',
      description: 'Building AI agents to explore engineering productivity',
      website: '#'
    },
    {
      company: 'Mercor',
      role: 'Software Engineer',
      period: 'February 2025 - May 2025',
      location: 'Remote',
      description: 'Enhanced data aggregation pipelines for novel job matching algorithm',
      website: 'https://mercor.com/'
    },
    {
      company: 'HomeRunns',
      role: 'Co-Founder, Chief Technology Officer',
      period: 'November 2023 - January 2025',
      location: 'Cambridge, MA',
      description: 'Built a marketplace for home repair solutions, connecting homeowners with contractors',
      website: 'https://homerunns.com'
    },
    {
      company: 'MIT CSAIL - FutureTech Lab',
      role: 'Research Intern',
      period: 'May 2023 - November 2023',
      location: 'Cambridge, MA',
      description: 'Analyzed trends in machine learning compute acceleration and collected data on compute trends',
      website: 'https://computerprogress.csail.mit.edu'
    },
    {
      company: 'MIT Schwarzman College of Computing',
      role: 'Machine Learning Intern',
      period: 'May 2022 - May 2023',
      location: 'Cambridge, MA',
      description: 'Developed a multimodal machine learning model for natural disaster prediction',
      website: 'https://computing.mit.edu'
    },
    {
      company: 'Plots',
      role: 'Software Engineer',
      period: 'September 2021 - May 2022',
      location: 'Los Angeles, CA',
      description: 'Performed full-stack engineering to help develop social media app based in LA',
      website: 'https://plots.events'
    }
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Experience</h2>
          <p className="text-xl text-slate-400">My professional journey in tech and research</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-red-500/30"></div>
          
          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className="relative flex items-start mb-12"
            >
              {/* Timeline dot */}
              <div className="absolute left-6 w-4 h-4 bg-red-500 rounded-full border-4 border-slate-900 z-10"></div>
              
              {/* Content */}
              <a
                href={exp.website}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-20 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-red-500/40 hover:bg-slate-800/70 transition-all duration-300 w-full block cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                    <span className="text-red-500 hover:text-red-400 font-semibold transition-colors duration-200">
                      {exp.company}
                    </span>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <p className="text-slate-300 font-medium">{exp.period}</p>
                    <p className="text-slate-400 text-sm">{exp.location}</p>
                  </div>
                </div>
                
                <p className="text-slate-300 mb-4">{exp.description}</p>
                
                <ul className="space-y-2">
                </ul>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection 