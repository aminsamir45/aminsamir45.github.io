'use client'

import React from 'react'
import HeroSection from '@/components/HeroSection'
import Navigation from '@/components/Navigation'
import AboutSection from '@/components/AboutSection'
import ExperienceSection from '@/components/ExperienceSection'
import ProjectsSection from '@/components/ProjectsSection'
import GradientTransition from '@/components/GradientTransition'

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <HeroSection />
      <GradientTransition />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
    </main>
  )
} 