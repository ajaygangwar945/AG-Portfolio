import React from 'react';
import { motion } from 'framer-motion';

const streams = [...Array(10)].map(() => ({
  left: `${Math.random() * 100}%`,
  duration: Math.random() * 10 + 10,
  delay: Math.random() * 5
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
              width: '1px',
              height: '40%',
              background: 'linear-gradient(to bottom, transparent, var(--primary-accent), transparent)'
            }}
          />
        ))}
      </div>

      {/* Large HUD Rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
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
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
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
