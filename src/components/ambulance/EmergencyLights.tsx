import React from 'react';
import { motion } from 'framer-motion';

export default function EmergencyLights() {
  const lightVariants = {
    flash: {
      opacity: [0, 1, 0],
      scale: [0.8, 1.2, 0.8],
    }
  };

  return (
    <div className="absolute -top-2 left-0 right-0 flex justify-between px-2">
      {/* Red Light */}
      <motion.div
        variants={lightVariants}
        animate="flash"
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="w-3 h-3"
      >
        <div className="w-full h-full bg-red-500 rounded-full shadow-lg shadow-red-500/50" />
        <div className="absolute inset-0 bg-red-400 rounded-full blur-sm" />
      </motion.div>

      {/* Blue Light */}
      <motion.div
        variants={lightVariants}
        animate="flash"
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.4
        }}
        className="w-3 h-3"
      >
        <div className="w-full h-full bg-blue-500 rounded-full shadow-lg shadow-blue-500/50" />
        <div className="absolute inset-0 bg-blue-400 rounded-full blur-sm" />
      </motion.div>
    </div>
  );
}