import React, { useState, useEffect, useRef } from 'react';
import { X, Terminal as TerminalIcon, ChevronRight } from 'lucide-react';

const TerminalPortfolio = ({ onClose }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'output', content: 'WELCOME TO AJAY GANGWAR OS V1.0.0' },
    { type: 'output', content: '---' },
    { type: 'output', content: 'Type "help" to see available commands.' },
    { type: 'output', content: ' ' },
  ]);
  const contentRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
    inputRef.current?.focus();
  }, [history]);

  const commands = {
    help: () => [
      'AVAILABLE COMMANDS:',
      '  about     - Learn more about Ajay',
      '  projects  - View technical project archive',
      '  edu       - Academic background',
      '  contact   - Get contact information',
      '  clear     - Clear terminal screen',
      '  exit      - Close terminal mode',
    ],
    about: () => [
      'AJAY GANGWAR',
      'ROLE: Aspiring Data Scientist | AI Enthusiast',
      'LOCATION: Phagwara / Bareilly, India',
      'BIO: Bridging the gap between complex datasets and intelligent neural solutions.',
    ],
    projects: () => [
      '1. AYUSH Healthcare - Interoperability platform with FHIR R4.',
      '2. ATS Resume Score - Google Gemini-powered AI optimizer.',
      '3. Pet Welfare Hub - Responsive community portal.',
      'Type "projects --open [id]" in future versions...',
    ],
    edu: () => [
      'BACHELOR OF TECHNOLOGY (CS) - LPU (7.46 CGPA)',
      'INTERMEDIATE - Vidya Bhavan (72%)',
      'MATRICULATION - Vidya Bhavan (94%)',
    ],
    contact: () => [
      'EMAIL: ajaygangwar945@gmail.com',
      'LINKEDIN: linkedin.com/in/ajaygangwar945',
      'GITHUB: github.com/ajaygangwar945',
      'PHONE: +91-8283024392',
    ],
    clear: () => {
      setHistory([]);
      return null;
    },
    exit: () => {
      onClose();
      return null;
    },
  };

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cleanInput = input.trim().toLowerCase();
      const newHistory = [...history, { type: 'input', content: input }];

      if (cleanInput === '') {
        setHistory(newHistory);
        setInput('');
        return;
      }

      if (commands[cleanInput]) {
        const result = commands[cleanInput]();
        if (result) {
          result.forEach(line => newHistory.push({ type: 'output', content: line }));
        }
      } else {
        newHistory.push({ type: 'output', content: `Command not found: ${cleanInput}. Type "help" for options.` });
      }

      setHistory(newHistory);
      setInput('');
    }
  };

  return (
    <div className="terminal-window">
      <div className="crt-overlay" />
      
      <div className="terminal-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <TerminalIcon size={14} />
          <span>AG_OS_TERMINAL_SESSION</span>
        </div>
        <button 
          onClick={onClose}
          style={{ background: 'transparent', border: 'none', color: '#008f11', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
        >
          <span style={{ marginRight: '0.5rem' }}>[EXIT]</span>
          <X size={14} />
        </button>
      </div>

      <div className="terminal-content" ref={contentRef} onClick={() => inputRef.current?.focus()}>
        {history.map((entry, i) => (
          <div key={i} style={{ marginBottom: entry.type === 'input' ? '0.2rem' : '0.1rem' }}>
            {entry.type === 'input' ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <ChevronRight size={14} color="#00ff41" />
                <span style={{ color: '#ffffff' }}>{entry.content}</span>
              </div>
            ) : (
              <pre style={{ margin: 0, whiteSpace: 'pre-wrap', fontFamily: 'inherit' }}>{entry.content}</pre>
            )}
          </div>
        ))}
        
        <div className="terminal-prompt">
          <ChevronRight size={14} color="#00ff41" />
          <input
            ref={inputRef}
            type="text"
            className="terminal-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleCommand}
            autoFocus
          />
          <div className="terminal-cursor" />
        </div>
      </div>
    </div>
  );
};

export default TerminalPortfolio;
