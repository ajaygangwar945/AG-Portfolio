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
  notchedBorderWidth = 2,
  ...motionProps 
}) => {
  return (
    <motion.div
      className={`cyber-card ${className}`}
      style={{ 
        padding, 
        position: 'relative',
        borderColor: accentColor,
        boxShadow: `0 0 10px ${accentColor}1a`, // Very subtle glow
        ...style 
      }}
      whileHover={{ 
        borderColor: accentColor,
        boxShadow: `0 0 20px ${accentColor}4d`, // Brighter glow on hover
        ...motionProps.whileHover 
      }}
      {...motionProps}
    >
      {/* HUD Corner Accents */}
      <div style={{ position: 'absolute', top: `${notchedOffset}px`, left: `${notchedOffset}px`, width: `${notchedSize}px`, height: `${notchedSize}px`, borderTop: `${notchedBorderWidth}px solid ${accentColor}`, borderLeft: `${notchedBorderWidth}px solid ${accentColor}` }} />
      <div style={{ position: 'absolute', bottom: `${notchedOffset}px`, right: `${notchedOffset}px`, width: `${notchedSize}px`, height: `${notchedSize}px`, borderBottom: `${notchedBorderWidth}px solid ${accentColor}`, borderRight: `${notchedBorderWidth}px solid ${accentColor}` }} />
      
      {children}
    </motion.div>
  );
};

export default CyberCard;
