import React from 'react';
import { motion } from 'framer-motion';

const CyberCard = ({ 
  children, 
  accentColor = 'var(--primary-accent)', 
  padding = '2rem', 
  className = '', 
  style = {},
  notchedSize = 20,
  notchedOffset = 10,
  notchedBorderWidth = 1,
  disableHover = false,
  ...motionProps 
}) => {
  const { whileHover: userWhileHover, ...restMotion } = motionProps;

  return (
    <motion.div
      className={`cyber-card ${className}`}
      style={{ 
        padding, 
        position: 'relative',
        borderColor: accentColor,
        boxShadow: `0 0 10px color-mix(in srgb, ${accentColor}, transparent 90%)`, // 10% opacity
        ...style 
      }}
      {...restMotion}
      whileHover={
        disableHover
          ? undefined
          : {
              borderColor: accentColor,
              boxShadow: `0 0 20px color-mix(in srgb, ${accentColor}, transparent 70%)`, // 30% opacity
              ...userWhileHover,
            }
      }
    >
      {/* HUD Corner Accents */}
      <div style={{ position: 'absolute', top: `${notchedOffset}px`, left: `${notchedOffset}px`, width: `${notchedSize}px`, height: `${notchedSize}px`, borderTop: `${notchedBorderWidth}px solid ${accentColor}`, borderLeft: `${notchedBorderWidth}px solid ${accentColor}`, zIndex: 10 }} />
      <div style={{ position: 'absolute', bottom: `${notchedOffset}px`, right: `${notchedOffset}px`, width: `${notchedSize}px`, height: `${notchedSize}px`, borderBottom: `${notchedBorderWidth}px solid ${accentColor}`, borderRight: `${notchedBorderWidth}px solid ${accentColor}`, zIndex: 10 }} />
      
      {children}
    </motion.div>
  );
};

export default CyberCard;
