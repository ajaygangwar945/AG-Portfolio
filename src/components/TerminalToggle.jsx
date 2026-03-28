import React from 'react';
import { motion } from 'framer-motion';

const TerminalToggle = ({ onClick }) => {
  return (
    <motion.button 
      className="terminal-toggle"
      onClick={onClick}
      aria-label="Try Terminal Version"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 }}
    >
      <span className="terminal-prompt-icon">&gt;_</span>
      <span className="terminal-text">TERMINAL_ACCESS</span>
    </motion.button>
  );
};

export default TerminalToggle;
