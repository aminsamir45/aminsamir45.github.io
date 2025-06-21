'use client'

import React from 'react'
import { motion } from 'framer-motion'

const ProjectsSection = () => {
  const projects = [
    {
      title: 'MIT PokerBots',
      description: 'Achieved top 10% placement in the 2025 MIT Pokerbots competition',
      tech: ['Python', 'Game Theory', 'AI'],
      link: 'https://github.com/tjeverett/pokerbot2025',
      highlight: 'Top 10%'
    },
    {
      title: 'Transformer vs. RNN/LSTM',
      description: 'Trained and compared Transformer and LSTM models on modular arithmetic tasks using PyTorch',
      tech: ['PyTorch', 'Transformers', 'Deep Learning'],
      link: 'https://github.com/aminsamir45/Transformers-vs-RNNs-LSTMs',
      highlight: 'Research'
    },
    {
      title: 'BERT Bias Detection',
      description: 'Fine-tuned BERT on hand-curated dataset to mitigate racial and gender bias',
      tech: ['BERT', 'NLP', 'Bias Mitigation'],
      link: 'https://github.com/reeceshuttle/63950/tree/main',
      highlight: 'AI Ethics'
    },
    {
      title: 'HomeRunns Platform',
      description: 'Built marketplace connecting homeowners with contractors, generating $195K ARR',
      tech: ['React', 'Node.js', 'Firebase', 'Stripe'],
      link: 'https://homerunns.com',
      highlight: '$195K ARR'
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Featured Projects</h2>
          <p className="text-xl text-foreground/70">A showcase of my technical work and research</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-background/50 backdrop-blur-sm border border-accent/20 rounded-xl p-6 hover:border-accent/40 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                <span className="bg-accent/20 text-accent px-2 py-1 rounded-full text-xs font-semibold">
                  {project.highlight}
                </span>
              </div>
              
              <p className="text-foreground/70 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span key={tech} className="bg-primary/20 text-primary px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center text-accent hover:text-accent/80 font-medium transition-colors duration-200"
              >
                View Project →
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection 