'use client'

import React from 'react'
import { motion } from 'framer-motion'

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">About Me</h2>
          <p className="text-xl text-foreground/70">Passionate about AI research and building impactful technology</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6">My Journey</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Currently pursuing my Masters in Computer Science and Cognitive Science at MIT, 
              where I'm researching Decentralized AI in the Media Lab. My academic journey has 
              been marked by excellence, maintaining a 4.9/5.0 GPA.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              As the former CTO and Co-Founder of HomeRunns, I built a marketplace connecting 
              homeowners with contractors, generating $195K ARR in our first year. Currently, 
              I'm a Software Engineer at Mercor, enhancing data aggregation pipelines for novel 
              job matching algorithms.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <h4 className="text-lg font-semibold mb-3">Technical Skills</h4>
              <div className="flex flex-wrap gap-2">
                {['Python', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'PyTorch', 'TensorFlow', 'AWS', 'GCP'].map((skill) => (
                  <span key={skill} className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-3">Interests</h4>
              <p className="text-foreground/70">
                When I'm not coding or researching, you can find me rock climbing, 
                playing poker, or exploring the latest developments in AI and machine learning.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection 