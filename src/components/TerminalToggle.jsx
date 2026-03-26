import React from 'react';
import { Terminal } from 'lucide-react';

const TerminalToggle = ({ onClick }) => {
  return (
    <button 
      className="terminal-toggle"
      onClick={onClick}
      aria-label="Try Terminal Version"
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <Terminal size={16} />
        <span>TRY TERMINAL_V1.0</span>
      </div>
    </button>
  );
};

export default TerminalToggle;
