import React, { useState, useEffect, useRef } from 'react';

// Prompt prefix — declared at module scope to avoid re-creating on each render
const Prompt = ({ compact = false }) => {
  if (compact) {
    return (
      <span className="term-prompt-prefix">
        <span className="term-prompt-path">~</span>
        <span className="term-prompt-arrow">%</span>
      </span>
    );
  }

  return (
    <span className="term-prompt-prefix">
      <span className="term-prompt-user">ajaygangwar945</span>
      <span className="term-prompt-at">@</span>
      <span className="term-prompt-host">ag-portfolio</span>
      <span className="term-prompt-sep">:</span>
      <span className="term-prompt-path">~</span>
      <span className="term-prompt-arrow">%</span>
    </span>
  );
};

const getInitialHistory = () => {
  const base = [
    { type: 'output', content: 'Last login: ' + new Date().toDateString(), cls: 'dim' },
    { type: 'output', content: ' ', cls: 'dim' },
  ];

  const banner = [
    { type: 'output', content: '  █████╗  ██████╗      ██████╗  ██████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗ ', cls: 'info desktop-banner' },
    { type: 'output', content: ' ██╔══██╗██╔════╝     ██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗', cls: 'info desktop-banner' },
    { type: 'output', content: ' ███████║██║  ███╗    ██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║', cls: 'info desktop-banner' },
    { type: 'output', content: ' ██╔══██║██║   ██║    ██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║', cls: 'info desktop-banner' },
    { type: 'output', content: ' ██║  ██║╚██████╔╝    ██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝', cls: 'info desktop-banner' },
    { type: 'output', content: ' ╚═╝  ╚═╝ ╚═════╝     ╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝ ', cls: 'info desktop-banner' },
    { type: 'output', content: '   █████╗  ██████╗ ', cls: 'info mobile-banner' },
    { type: 'output', content: '  ██╔══██╗██╔════╝ ', cls: 'info mobile-banner' },
    { type: 'output', content: '  ███████║██║  ███╗', cls: 'info mobile-banner' },
    { type: 'output', content: '  ██╔══██║██║   ██║', cls: 'info mobile-banner' },
    { type: 'output', content: '  ██║  ██║╚██████╔╝', cls: 'info mobile-banner' },
    { type: 'output', content: '  ╚═╝  ╚═╝ ╚═════╝ ', cls: 'info mobile-banner' },
    { type: 'output', content: '  ------------------', cls: 'dim mobile-banner' },
  ];

  const details = [
    { type: 'output', content: ' ', cls: 'dim' },
    { type: 'output', content: '  Welcome to AG-Portfolio Terminal  |  Aspiring Data Scientist & AI Engineer', cls: 'heading' },
    { type: 'output', content: '  ─────────────────────────────────────────────────────────────────────────', cls: 'dim desktop-divider' },
    { type: 'output', content: '  --------------------------------', cls: 'dim mobile-divider' },
    { type: 'output', content: '  User     :  Ajay Gangwar', cls: 'output' },
    { type: 'output', content: '  Role     :  Data Scientist · AI/ML Engineer · Full-Stack Developer', cls: 'output' },
    { type: 'output', content: '  Location :  India', cls: 'output' },
    { type: 'output', content: '  GitHub   :  github.com/ajaygangwar945', cls: 'output' },
    { type: 'output', content: '  ─────────────────────────────────────────────────────────────────────────', cls: 'dim desktop-divider' },
    { type: 'output', content: '  --------------------------------', cls: 'dim mobile-divider' },
    { type: 'output', content: ' ', cls: 'dim' },
    { type: 'output', content: '  Type "help" to see all available commands.', cls: 'output' },
    { type: 'output', content: ' ', cls: 'dim' },
  ];

  return [...base, ...banner, ...details];
};

const TerminalPortfolio = ({ onClose }) => {
  const [input, setInput]       = useState('');
  // 'full' = fullscreen, 'windowed' = centered panel
  const [mode, setMode]         = useState('full');
  const [isCompactViewport, setIsCompactViewport] = useState(() => window.innerWidth <= 820);
  const [isMobileViewport, setIsMobileViewport] = useState(() => window.innerWidth <= 600);
  const [showMaximiseButton, setShowMaximiseButton] = useState(() => window.innerWidth > 820);
  const [history, setHistory] = useState(() => getInitialHistory());

  const bodyRef  = useRef(null);
  const inputRef = useRef(null);

  // Lock body scroll only in fullscreen mode
  useEffect(() => {
    const orig = window.getComputedStyle(document.body).overflow;
    if (mode === 'full') document.body.style.overflow = 'hidden';
    else document.body.style.overflow = orig;
    return () => { document.body.style.overflow = orig; };
  }, [mode]);

  // Auto-scroll & focus on history change
  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    inputRef.current?.focus();
  }, [history]);

  useEffect(() => {
    const onResize = () => {
      setIsCompactViewport(window.innerWidth <= 820);
      setIsMobileViewport(window.innerWidth <= 600);
      setShowMaximiseButton(window.innerWidth > 820);
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    if (!showMaximiseButton && mode === 'windowed') {
      setMode('full');
    }
  }, [showMaximiseButton, mode]);

  // ── Traffic light handlers ──────────────────────────────
  const handleClose    = () => onClose();                        // red  → close entirely
  const handleMinimise = () => onClose();                        // yellow → hide (back to toggle btn)
  const handleMaximise = () => {
    if (isCompactViewport) return;
    setMode(m => m === 'full' ? 'windowed' : 'full');
  }; // green → toggle

  // ── Commands ────────────────────────────────────────────
  const commands = {
    help: () => [
      { content: 'Available Commands:', cls: 'heading' },
      { content: '  about     →  Identity and profile details', cls: 'output' },
      { content: '  projects  →  Technical project logs', cls: 'output' },
      { content: '  edu       →  Academic records', cls: 'output' },
      { content: '  contact   →  Communication protocols', cls: 'output' },
      { content: '  clear     →  Clear terminal', cls: 'output' },
      { content: '  exit      →  Close terminal', cls: 'output' },
    ],
    about: () => [
      { content: 'Profile:', cls: 'heading' },
      { content: '  Name   :  Ajay Gangwar', cls: 'output' },
      { content: '  Status :  Aspiring Data Scientist', cls: 'output' },
      { content: '  Spec   :  AI Frameworks & Big Data Architecture', cls: 'output' },
      { content: '  Node   :  India', cls: 'output' },
      { content: '  Goal   :  Decrypting complex data into neural insights.', cls: 'output' },
    ],
    projects: () => [
      { content: 'Project Logs:', cls: 'heading' },
      { content: '• ATS Resume Score      —  AI engine for resume optimization.', cls: 'bullet' },
      { content: '• MedPath Pro           —  Dijkstra-based healthcare router.', cls: 'bullet' },
      { content: '• Ayush FHIR            —  Healthcare interoperability platform.', cls: 'bullet' },
      { content: '• Cyber Warfare IDS     —  ML network intrusion detection.', cls: 'bullet' },
      { content: '• AI Legal Advisor      —  Gemini AI legal assistant.', cls: 'bullet' },
      { content: '• SoftHub               —  High-performance distribution platform.', cls: 'bullet' },
      { content: '• Global Terrorism      —  Interactive Power BI dashboard.', cls: 'bullet' },
    ],
    edu: () => [
      { content: 'Academic History:', cls: 'heading' },
      { content: '• B.Tech (CS)          —  Lovely Professional University (7.46 CGPA)', cls: 'bullet' },
      { content: '• Higher Secondary     —  Vidya Bhavan Public School (72%)', cls: 'bullet' },
      { content: '• Secondary School     —  Vidya Bhavan Public School (94%)', cls: 'bullet' },
    ],
    contact: () => [
      { content: 'Contact Protocols:', cls: 'heading' },
      { content: '  Email     :  ajaygangwar945@gmail.com', cls: 'output' },
      { content: '  LinkedIn  :  linkedin.com/in/ajaygangwar945', cls: 'output' },
      { content: '  GitHub    :  github.com/ajaygangwar945', cls: 'output' },
      { content: '  Phone     :  +91-8283024392', cls: 'output' },
    ],
    clear: () => { setHistory([]); return null; },
    exit:  () => { onClose(); return null; },
  };

  const handleKeyDown = (e) => {
    if (e.key !== 'Enter') return;
    const clean = input.trim().toLowerCase();
    const newHistory = [...history, { type: 'input', content: input }];

    if (clean === '') { setHistory(newHistory); setInput(''); return; }

    if (commands[clean]) {
      const result = commands[clean]();
      if (result === null) { setInput(''); return; }   // command handled state itself (clear/exit)
      result.forEach(line => newHistory.push({ type: 'output', ...line }));
    } else {
      newHistory.push({ type: 'output', content: `bash: ${clean}: command not found`, cls: 'error' });
    }
    setHistory(newHistory);
    setInput('');
  };

  const isFullscreen = mode === 'full';

  // Windowed: backdrop + centered panel; Fullscreen: fills screen
  const outerStyle = isFullscreen
    ? { position: 'fixed', inset: 0, zIndex: 10000, background: 'var(--terminal-bg)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }
    : { position: 'fixed', inset: 0, zIndex: 10000, background: 'rgba(0,0,0,0.55)', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)', padding: '12px' };

  const innerStyle = isFullscreen
    ? { width: '100%', height: '100%', background: 'var(--terminal-bg)', borderRadius: 0, display: 'flex', flexDirection: 'column', overflow: 'hidden', fontFamily: "'SF Mono','Menlo','Monaco','Consolas','JetBrains Mono',monospace", fontSize: '0.9rem' }
    : {
      width: isCompactViewport ? '100%' : 'min(92vw, 860px)',
      maxWidth: isCompactViewport ? '100%' : 860,
      height: isCompactViewport ? '100%' : 'min(82vh, 560px)',
      maxHeight: isCompactViewport ? '100%' : 'calc(100dvh - 24px)',
      background: 'var(--terminal-bg)',
      borderRadius: isCompactViewport ? 0 : 12,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      fontFamily: "'SF Mono','Menlo','Monaco','Consolas','JetBrains Mono',monospace",
      fontSize: '0.9rem',
      boxShadow: isCompactViewport ? 'none' : '0 32px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.08)'
    };

  return (
    <div className={`terminal-shell ${isFullscreen ? 'full' : 'windowed'}`} style={outerStyle} onClick={() => inputRef.current?.focus()}>
      <div style={innerStyle} onClick={e => e.stopPropagation()}>

        {/* ── Title Bar ── */}
        <div className="terminal-titlebar" style={{ borderRadius: isFullscreen ? 0 : '12px 12px 0 0' }}>
          <div className="terminal-traffic-lights">
            {/* 🔴 Close */}
            <div
              className="traffic-light close"
              title="Close"
              onClick={handleClose}
            />
            {/* 🟡 Minimise / Hide */}
            <div
              className="traffic-light minimise"
              title="Hide Terminal"
              onClick={handleMinimise}
            />
            {/* 🟢 Fullscreen ↔ Windowed */}
            {showMaximiseButton && (
              <div
                className="traffic-light maximise"
                title={isFullscreen ? 'Exit Full Screen' : 'Enter Full Screen'}
                onClick={handleMaximise}
              />
            )}
          </div>
          <span className="terminal-titlebar-title">
            ajaygangwar945@ag-portfolio — bash
            {!isFullscreen && !isCompactViewport && <span style={{ marginLeft: 8, fontSize: '0.7rem', opacity: 0.5 }}>[windowed]</span>}
          </span>
        </div>

        {/* ── Terminal Body ── */}
        <div className="terminal-body-macos" ref={bodyRef}>
          {history.map((entry, i) => (
            <div key={i} className="term-line">
              {entry.type === 'input' ? (
                <>
                  <Prompt compact={isMobileViewport} />
                  <span className="term-input-text">&nbsp;{entry.content}</span>
                </>
              ) : (
                <pre className={`term-output ${entry.cls || 'output'}`}>{entry.content}</pre>
              )}
            </div>
          ))}

          {/* Active input row */}
          <div className="terminal-prompt-row term-line">
            <Prompt compact={isMobileViewport} />
            &nbsp;
            <input
              ref={inputRef}
              type="text"
              className="terminal-input-mac"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
              spellCheck={false}
            />
            <span className="terminal-cursor-mac" />
          </div>
        </div>

        {/* ── Status Bar ── */}
        <div className="terminal-statusbar">
          <span>bash</span>
          <span>UTF-8</span>
          <span style={{ marginLeft: 'auto' }}>{new Date().toLocaleTimeString()}</span>
        </div>

      </div>
    </div>
  );
};

export default TerminalPortfolio;
