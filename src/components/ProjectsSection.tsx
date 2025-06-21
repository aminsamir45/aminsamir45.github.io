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
        
        {/* Contact Me Section */}
        <div className="mt-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Contact</h2>
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-br from-slate-800/50 via-slate-700/50 to-blue-900/20 border border-slate-600 rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4"></h3>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Interested in collaborating on AI research, discussing tech projects, or just want to chat? 
                I'd love to hear from you!
              </p>
              <a
                href="mailto:aminsamir45@gmail.com"
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 hover:from-blue-600 hover:via-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 border border-blue-400/20 hover:border-blue-300/40"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <svg className="w-6 h-6 relative z-10" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="relative z-10">Contact Me</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection 