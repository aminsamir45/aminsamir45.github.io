'use client';

import React, { useEffect, useRef } from 'react';

interface Dot {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  colour: string;
}

interface DotsConfig {
  nb: number;
  distance: number;
  d_radius: number;
  array: Dot[];
}

interface MousePosition {
  x: number;
  y: number;
}

const NeuralNetwork: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const dotsRef = useRef<DotsConfig>({ nb: 0, distance: 0, d_radius: 0, array: [] });
  const mousePositionRef = useRef<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Color configuration
    const colorDot = [
      'rgb(81, 162, 233)',
      'rgb(81, 162, 233)', 
      'rgb(81, 162, 233)',
      'rgb(255, 77, 90)', // 75% blue, 25% pink
    ];
    const color = 'rgb(81, 162, 233)';

         // Canvas setup
     const setupCanvas = () => {
       if (!canvas || !ctx) return;
       canvas.width = window.innerWidth;
       canvas.height = window.innerHeight;
       canvas.style.display = 'block';
       ctx.lineWidth = 0.3;
       ctx.strokeStyle = color;
     };

         // Initialize mouse position
     mousePositionRef.current = {
       x: (30 * window.innerWidth) / 100,
       y: (30 * window.innerHeight) / 100,
     };

         // Configure dots based on window size - dense connections
     const configureDots = () => {
       const windowSize = window.innerWidth;
       
       if (windowSize > 1600) {
         dotsRef.current = { nb: 150, distance: 140, d_radius: 300, array: [] }; // increased distance and radius for more connections
       } else if (windowSize > 1300) {
         dotsRef.current = { nb: 110, distance: 120, d_radius: 270, array: [] }; // increased distance and radius for more connections
       } else if (windowSize > 1100) {
         dotsRef.current = { nb: 80, distance: 110, d_radius: 240, array: [] }; // increased distance and radius for more connections
       } else if (windowSize > 800) {
         dotsRef.current = { nb: 50, distance: 100, d_radius: 210, array: [] }; // increased distance and radius for more connections
       } else if (windowSize > 600) {
         dotsRef.current = { nb: 30, distance: 90, d_radius: 180, array: [] }; // increased distance and radius for more connections
       } else {
         dotsRef.current = { nb: 20, distance: 80, d_radius: 150, array: [] }; // increased distance and radius for more connections
       }
     };

    // Dot constructor
    class DotClass implements Dot {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      colour: string;

             constructor() {
         this.x = Math.random() * window.innerWidth;
         this.y = Math.random() * window.innerHeight;
         this.vx = -0.5 + Math.random();
         this.vy = -0.5 + Math.random();
         this.radius = Math.random() * 1.5;
         this.colour = colorDot[Math.floor(Math.random() * colorDot.length)];
       }

       create() {
         if (!ctx) return;
         ctx.beginPath();
         ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);

         // Calculate distance from mouse for fade effect
         const dotDistance = Math.sqrt(
           Math.pow(this.x - mousePositionRef.current.x, 2) +
           Math.pow(this.y - mousePositionRef.current.y, 2)
         );
         const distanceRatio = dotDistance / (window.innerWidth / 2);

         // Apply fade based on distance from mouse
         ctx.fillStyle = this.colour.slice(0, -1) + `,${Math.max(0.1, 1 - distanceRatio)})`;
         ctx.fill();
       }

       animate() {
         // Bounce off edges
         if (this.y < 0 || this.y > window.innerHeight) {
           this.vy = -this.vy;
         }
         if (this.x < 0 || this.x > window.innerWidth) {
           this.vx = -this.vx;
         }
         
         this.x += this.vx;
         this.y += this.vy;
       }

             line() {
         if (!ctx) return;
         const dots = dotsRef.current;
         
         for (let i = 0; i < dots.nb; i++) {
           for (let j = 0; j < dots.nb; j++) {
             const i_dot = dots.array[i];
             const j_dot = dots.array[j];

             // Check if dots are close enough to connect
             if (
               Math.abs(i_dot.x - j_dot.x) < dots.distance &&
               Math.abs(i_dot.y - j_dot.y) < dots.distance &&
               Math.abs(i_dot.x - j_dot.x) > 0 && // Avoid connecting dot to itself
               Math.abs(i_dot.y - j_dot.y) > 0
             ) {
               // Check if within mouse interaction radius
               if (
                 Math.abs(i_dot.x - mousePositionRef.current.x) < dots.d_radius &&
                 Math.abs(i_dot.y - mousePositionRef.current.y) < dots.d_radius
               ) {
                 ctx.beginPath();
                 ctx.moveTo(i_dot.x, i_dot.y);
                 ctx.lineTo(j_dot.x, j_dot.y);

                 // Calculate fade based on distance from mouse
                 const dotDistance = Math.sqrt(
                   Math.pow(i_dot.x - mousePositionRef.current.x, 2) +
                   Math.pow(i_dot.y - mousePositionRef.current.y, 2)
                 );
                 let distanceRatio = dotDistance / dots.d_radius;

                 // Prevent complete fade out
                 distanceRatio = Math.max(0, distanceRatio - 0.3);

                 ctx.strokeStyle = `rgba(81, 162, 233, ${Math.max(0.1, 1 - distanceRatio)})`;
                 ctx.stroke();
                 ctx.closePath();
               }
             }
           }
         }
       }
    }

         // Initialize dots (only called once)
     const initializeDots = () => {
       dotsRef.current.array = [];
       
       for (let i = 0; i < dotsRef.current.nb; i++) {
         const dotInstance = new DotClass();
         dotsRef.current.array.push(dotInstance);
       }

       // Make first dot special (larger and blue)
       if (dotsRef.current.array.length > 0) {
         dotsRef.current.array[0].radius = 1.5;
         dotsRef.current.array[0].colour = 'rgb(81, 162, 233)';
       }
     };

     // Animation loop (called every frame)
     const animate = () => {
       if (!ctx || !canvas) return;
       ctx.clearRect(0, 0, canvas.width, canvas.height);

       // Draw and animate all dots
       dotsRef.current.array.forEach(dot => {
         if (dot instanceof DotClass) {
           dot.create(); // Draw the dot
           dot.animate(); // Update position
         }
       });

       // Draw lines from first dot
       if (dotsRef.current.array.length > 0 && dotsRef.current.array[0] instanceof DotClass) {
         (dotsRef.current.array[0] as DotClass).line();
       }
     };

    // Mouse move handler
    const handleMouseMove = (event: MouseEvent) => {
      mousePositionRef.current.x = event.clientX;
      mousePositionRef.current.y = event.clientY;

      // Make first dot follow mouse if it exists
      if (dotsRef.current.array.length > 0) {
        dotsRef.current.array[0].x = event.clientX;
        dotsRef.current.array[0].y = event.clientY;
      }
    };

    // Scroll handler
    const handleScroll = () => {
      mousePositionRef.current.x = window.innerWidth / 2;
      mousePositionRef.current.y = window.innerHeight / 2;
      
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || 0;
      mousePositionRef.current.y += scrollTop;
    };

         // Resize handler
     const handleResize = () => {
       if (animationRef.current) {
         cancelAnimationFrame(animationRef.current);
       }
       setupCanvas();
       configureDots();
       initializeDots();
       startAnimation();
     };

         // Start animation
     const startAnimation = () => {
       if (animationRef.current) {
         cancelAnimationFrame(animationRef.current);
       }
       
       const animationLoop = () => {
         animate();
         animationRef.current = requestAnimationFrame(animationLoop);
       };
       
       animationLoop();
     };

     // Initialize
     setupCanvas();
     configureDots();
     initializeDots();
     startAnimation();

    // Event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

         // Cleanup
     return () => {
       if (animationRef.current) {
         cancelAnimationFrame(animationRef.current);
       }
       window.removeEventListener('mousemove', handleMouseMove);
       window.removeEventListener('scroll', handleScroll);
       window.removeEventListener('resize', handleResize);
     };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: -1 }}
    />
  );
};

export default NeuralNetwork;
