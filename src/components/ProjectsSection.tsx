'use client'

import React from 'react'

const ProjectsSection = () => {
  const projects = [
    {
      title: 'BERT Bias Detection',
      description: 'Fine-tuned BERT on hand-curated dataset to mitigate racial and gender bias in language models.',
      tech: ['BERT', 'NLP', 'Bias Mitigation'],
      link: 'https://github.com/reeceshuttle/63950/tree/main',
      liveLink: null
    },
    {
      title: 'Transformer vs. RNN/LSTM',
      description: 'Trained and compared Transformer and LSTM models on modular arithmetic tasks using PyTorch.',
      tech: ['PyTorch', 'Transformers', 'Deep Learning'],
      link: 'https://github.com/aminsamir45/Transformers-vs-RNNs-LSTMs',
      liveLink: null
    },
    {
      title: 'MIT PokerBots',
      description: 'Achieved top 10% placement in the 2025 MIT Pokerbots competition using advanced game theory.',
      tech: ['Python', 'Game Theory', 'AI'],
      link: 'https://github.com/tjeverett1/pokerbot2025',
      liveLink: null
    },
    {
      title: 'HomeRunns Platform',
      description: 'Full stack marketplace connecting homeowners with contractors, generating $195K ARR in first year.',
      tech: ['React', 'Node.js', 'Firebase', 'Stripe'],
      link: 'https://homerunns.com',
      liveLink: 'https://homerunns.com'
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-slate-300 leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span key={tech} className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200"
                  >
                    Live app
                  </a>
                )}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200"
                >
                  Learn more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection 