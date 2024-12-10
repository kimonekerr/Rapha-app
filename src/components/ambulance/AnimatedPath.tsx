import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedPath() {
  return (
    <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
      <defs>
        <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C4B5FD" />
          <stop offset="50%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#C4B5FD" />
        </linearGradient>
      </defs>
      
      {/* Background Path */}
      <path
        d="M100,50 C200,50 250,20 300,50 C350,80 400,20 500,50 C600,80 650,20 700,50"
        stroke="#E2E8F0"
        strokeWidth="4"
        fill="none"
        strokeDasharray="8,8"
      />
      
      {/* Animated Highlight */}
      <motion.path
        d="M100,50 C200,50 250,20 300,50 C350,80 400,20 500,50 C600,80 650,20 700,50"
        stroke="url(#pathGradient)"
        strokeWidth="4"
        fill="none"
        strokeDasharray="40,400"
        initial={{ strokeDashoffset: 0 }}
        animate={{ strokeDashoffset: -1000 }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </svg>
  );
}