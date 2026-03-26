import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Resume from './components/Resume';
import Contact from './components/Contact';
import BackgroundElements from './components/BackgroundElements';
import TerminalPortfolio from './components/TerminalPortfolio';
import TerminalToggle from './components/TerminalToggle';
import AllProjects from './components/AllProjects';

const HomePage = ({ theme, toggleTheme, terminalOpen, setTerminalOpen }) => (
  <>
    <BackgroundElements />
    <Navbar theme={theme} toggleTheme={toggleTheme} />
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Achievements />
      <Education />
      <Resume />
      <Contact />
    </main>
    <TerminalToggle onClick={() => setTerminalOpen(true)} />
    {terminalOpen && (
      <TerminalPortfolio onClose={() => setTerminalOpen(false)} />
    )}
  </>
);

function App() {
  const [theme, setTheme] = useState(document.body.classList.contains('light-mode') ? 'light' : 'dark');
  const [terminalOpen, setTerminalOpen] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    if (newTheme === 'light') {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={
            <HomePage 
              theme={theme} 
              toggleTheme={toggleTheme} 
              terminalOpen={terminalOpen} 
              setTerminalOpen={setTerminalOpen} 
            />
          } />
          <Route path="/projects" element={<AllProjects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


