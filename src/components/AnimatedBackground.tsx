import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  const circles = Array.from({ length: 20 });
  
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {circles.map((_, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-purple-500/10"
          initial={{
            width: Math.random() * 100 + 50,
            height: Math.random() * 100 + 50,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: 0
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2
          }}
        />
      ))}
      <svg className="absolute w-full h-full opacity-20">
        <defs>
          <pattern id="health-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M20 0L20 40M0 20L40 20" stroke="currentColor" strokeWidth="0.5" className="text-purple-500" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#health-grid)" />
      </svg>
    </div>
  );
}