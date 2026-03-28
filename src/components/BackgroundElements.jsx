import React from 'react';
import { motion } from 'framer-motion';

const colors = [
  'var(--primary-accent)',
  'var(--about-accent)',
  'var(--education-accent)',
  'var(--skills-accent)',
  'var(--achievements-accent)'
];

const streams = [...Array(15)].map(() => ({
  left: `${Math.random() * 100}%`,
  duration: Math.random() * 10 + 10,
  delay: Math.random() * 5,
  color: colors[Math.floor(Math.random() * colors.length)]
}));

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
      pointerEvents: 'none',
      background: 'var(--bg-color)'
    }}>
      {/* Animated Aurora Glowing Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 0.9, 0.6],
          x: [0, 50, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: 'absolute',
          top: '-10%',
          left: '-10%',
          width: '50vw',
          height: '50vw',
          background: 'radial-gradient(circle, var(--about-accent-alpha) 0%, transparent 60%)',
          filter: 'blur(80px)',
          borderRadius: '50%'
        }}
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.8, 0.5],
          x: [0, -40, 0],
          y: [0, -50, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{
          position: 'absolute',
          bottom: '-20%',
          right: '-10%',
          width: '60vw',
          height: '60vw',
          background: 'radial-gradient(circle, var(--home-accent-alpha) 0%, transparent 60%)',
          filter: 'blur(100px)',
          borderRadius: '50%'
        }}
      />
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.4, 0.7, 0.4],
          x: [0, 30, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        style={{
          position: 'absolute',
          top: '30%',
          right: '20%',
          width: '40vw',
          height: '40vw',
          background: 'radial-gradient(circle, var(--skills-accent-alpha) 0%, transparent 60%)',
          filter: 'blur(90px)',
          borderRadius: '50%'
        }}
      />

      {/* Vertical Data Streams */}
      <div style={{ position: 'absolute', width: '100%', height: '100%', opacity: 'var(--bg-streams-opacity)' }}>
        {streams.map((stream, i) => (
          <motion.div
            key={i}
            initial={{ y: '-100%', left: stream.left }}
            animate={{ y: '100%' }}
            transition={{
              duration: stream.duration,
              repeat: Infinity,
              ease: "linear",
              delay: stream.delay
            }}
            style={{
              position: 'absolute',
              width: '2px',
              height: '40%',
              background: `linear-gradient(to bottom, transparent, ${stream.color}, transparent)`,
              boxShadow: `0 0 10px ${stream.color}`
            }}
          />
        ))}
      </div>

      {/* Large HUD Rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '500px',
          height: '500px',
          border: '1px dashed var(--secondary-accent)',
          borderRadius: '50%',
          opacity: 'var(--bg-rings-opacity)'
        }}
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
        style={{
          position: 'absolute',
          bottom: '-15%',
          left: '-10%',
          width: '600px',
          height: '600px',
          border: '1px solid var(--secondary-accent)',
          borderRadius: '50%',
          opacity: 'var(--bg-rings-opacity-inner)'
        }}
      />

      {/* Hexagon Pattern Overlay */}
      <svg style={{ position: 'absolute', width: '100%', height: '100%', opacity: 'var(--bg-hex-opacity)' }}>
        <defs>
          <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
            <path d="M25 0 L50 14.4 L50 43.4 L25 57.8 L0 43.4 L0 14.4 Z" fill="none" stroke="var(--primary-accent)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexagons)" />
      </svg>
    </div>
  );
};

export default BackgroundElements;
