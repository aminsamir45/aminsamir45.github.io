'use client'

import React from 'react'
import { motion } from 'framer-motion'

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Let's Connect</h2>
          <p className="text-xl text-foreground/70 mb-12 max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities, research collaborations, 
            or just connecting with fellow technologists.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          <motion.a
            href="mailto:aminsamir45@gmail.com"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="bg-background/50 backdrop-blur-sm border border-accent/20 rounded-xl p-6 hover:border-accent/40 transition-all duration-300"
          >
            <div className="text-accent text-2xl mb-4">📧</div>
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-foreground/70">aminsamir45@gmail.com</p>
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/samir-amin-88a2462a"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="bg-background/50 backdrop-blur-sm border border-accent/20 rounded-xl p-6 hover:border-accent/40 transition-all duration-300"
          >
            <div className="text-accent text-2xl mb-4">💼</div>
            <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
            <p className="text-foreground/70">Connect professionally</p>
          </motion.a>

          <motion.a
            href="tel:+13607892182"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="bg-background/50 backdrop-blur-sm border border-accent/20 rounded-xl p-6 hover:border-accent/40 transition-all duration-300"
          >
            <div className="text-accent text-2xl mb-4">📱</div>
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <p className="text-foreground/70">(360) 789-2182</p>
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-accent/20 pt-8"
        >
          <p className="text-foreground/60 mb-4">
            © 2025 Samir Amin. Built with Next.js, TypeScript, and Tailwind CSS.
          </p>
          <div className="flex justify-center space-x-6">
            <motion.a
              href="https://github.com/aminsamir45"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-foreground/60 hover:text-accent transition-colors duration-200"
            >
              GitHub
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/samir-amin-88a2462a"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-foreground/60 hover:text-accent transition-colors duration-200"
            >
              LinkedIn
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection 