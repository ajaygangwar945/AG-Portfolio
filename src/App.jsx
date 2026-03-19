import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import BackgroundElements from './components/BackgroundElements';

function App() {
  return (
    <div className="app" style={{ scrollBehavior: 'smooth' }}>
      <BackgroundElements />
      <BackgroundElements />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
      </main>
      
      {/* Footer / Contact Section */}
      <footer style={{ padding: '6rem 0', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
        <div className="container">
          <h2 className="gradient-text" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Let's Connect</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>ajaygangwar945@gmail.com | +91-8283024392</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', color: 'var(--text-dim)', fontSize: '0.9rem' }}>
            <span>© 2026 Ajay Gangwar</span>
            <span>Made with React & Framer Motion</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
