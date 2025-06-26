'use client'

import React from 'react'
import Image from 'next/image'

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Centered Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">About Me</h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              Fully committed to the philosophy of life-long learning, I'm an AI researcher and software engineer 
              with a deep passion for machine learning, full-stack development, and building impactful technology. 
              The unique combination of creativity, logic, technology and never running out of new things to discover, 
              drives my excitement and passion for research and development.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Outside of tech, I competed in varsity cross country and track & field for MIT, was an All-State 
              trumpeter, and enjoy strategy games like Catan and Poker. I'm also fascinated by cognitive science 
              and how the human brain works.
            </p>
            {/* <p className="text-lg text-slate-300 leading-relaxed">
              Currently pursuing my Masters in Computer Science and Cognitive Science at MIT, where I'm researching 
              Decentralized AI in the Media Lab. As the former CTO and Co-Founder of HomeRunns, I built a marketplace 
              connecting homeowners with contractors, generating $195K ARR in our first year.
            </p> */}
          </div>
          
          {/* Right Column - Skills Cards */}
          <div className="lg:pl-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
              {[
                'PYTHON', 'JAVASCRIPT', 'REACT', 'PYTORCH', 'TENSORFLOW', 
                'NODE.JS', 'TYPESCRIPT', 'AWS', 'GCP', 'MONGODB', 'DOCKER', 'NEXT.JS'
              ].map((skill) => (
                <div key={skill} className="text-center group">
                  <div className="relative overflow-hidden bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-600/10 border border-blue-500/20 rounded-lg p-4 hover:from-blue-500/20 hover:via-purple-500/20 hover:to-blue-600/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative text-blue-400 font-semibold text-sm group-hover:text-blue-300 transition-colors duration-300">{skill}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Photos Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold gradient-text"></h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Photo placeholders - replace with your actual photos */}
            {[
              { src: '/photos/IMG_1.png', alt: 'Personal photo 1', caption: '' },
              { src: '/photos/IMG_2.jpg', alt: 'Personal photo 2', caption: '' },
              { src: '/photos/IMG_3.jpeg', alt: 'Personal photo 3', caption: '' }
            ].map((photo, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                <div className="aspect-square bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center relative">
                  <Image 
                    src={photo.src} 
                    alt={photo.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-white text-sm font-medium">{photo.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection 