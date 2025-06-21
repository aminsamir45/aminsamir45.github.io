'use client'

import React from 'react'

const GradientTransition = () => {
  return (
    <div className="relative h-40 w-full overflow-hidden">
      {/* Main gradient transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900/80 to-slate-800"></div>
      
      {/* Animated gradient overlay for extra smoothness */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-blue-800/20 animate-pulse"></div>
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="h-full w-full bg-gradient-to-br from-transparent via-slate-700/10 to-transparent"></div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-slate-800"></div>
    </div>
  )
}

export default GradientTransition 