import React from 'react';
import { motion } from 'framer-motion';

const BackgroundElements = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      overflow: 'hidden',
      pointerEvents: 'none'
    }}>
      {/* Floating Circles */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '300px',
          height: '300px',
          background: 'rgba(34, 211, 238, 0.03)',
          borderRadius: '50%',
          filter: 'blur(80px)',
        }}
      />
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1, 1.5, 1]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: '400px',
          height: '400px',
          background: 'rgba(129, 140, 248, 0.03)',
          borderRadius: '50%',
          filter: 'blur(100px)',
        }}
      />

      {/* Decorative SVG Grid/Dots */}
      <svg style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0.1 }}>
        <defs>
          <pattern id="dotPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="var(--accent-cyan)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dotPattern)" />
      </svg>
      
      {/* Animated SVG Path Lines */}
      <svg style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0.05 }}>
        <motion.path
          d="M -100 200 Q 400 500 900 200 T 1500 400"
          stroke="var(--accent-violet)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        />
      </svg>
    </div>
  );
};

export default BackgroundElements;
