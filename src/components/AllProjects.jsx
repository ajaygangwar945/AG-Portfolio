import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, ArrowLeft } from 'lucide-react';
import { ProjectCard } from './Projects';
import { allProjects } from '../data/projectsData';
import BackgroundElements from './BackgroundElements';
import Navbar from './Navbar';

const AllProjects = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [theme, setTheme] = useState(document.body.classList.contains('light-mode') ? 'light' : 'dark');
  
  const categories = ['All', 'Full Stack', 'Frontend', 'Data Visualization', 'AI & Data', 'Cybersecurity'];

  const filteredProjects = activeTab === 'All'
    ? allProjects
    : allProjects.filter(project => project.category.includes(activeTab));

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    if (newTheme === 'light') {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  };

  // Ensure we start at the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="app">
      <BackgroundElements />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main>
        <section style={{ padding: '8rem 0 6rem 0', minHeight: '100vh' }}>
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ marginBottom: '4rem' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '1rem', marginBottom: '0.5rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                    <Layers size={24} color="var(--projects-accent)" />
                    <span style={{ fontSize: '0.8rem', color: 'var(--projects-accent)', fontWeight: '800', letterSpacing: '3px' }}>FULL ARCHIVE</span>
                  </div>
                  <h2 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-heading)' }}>
                    All <span style={{ color: 'var(--projects-accent)' }}>Projects</span>
                  </h2>
                </div>
                
                <a href="/" style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem', 
                  color: 'var(--projects-accent)', 
                  fontSize: '0.8rem', 
                  fontWeight: '800',
                  textDecoration: 'none',
                  marginBottom: '1.5rem',
                  letterSpacing: '1px'
                }}>
                  <ArrowLeft size={16} /> BACK TO HOME
                </a>
              </div>
              <div style={{ width: '100%', height: '1px', background: 'var(--card-border)' }} />
            </motion.div>

            {/* Tab Navigation */}
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  style={{
                    background: 'transparent',
                    border: activeTab === cat ? '1px solid var(--projects-accent)' : '1px solid transparent',
                    color: activeTab === cat ? 'var(--projects-accent)' : 'var(--text-dim)',
                    fontSize: '0.65rem',
                    fontWeight: '800',
                    cursor: 'pointer',
                    padding: '0.4rem 1rem',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    fontFamily: 'var(--font-body)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  &gt; {cat}
                </button>
              ))}
            </div>

            <div className="projects-grid">
              <AnimatePresence mode='popLayout'>
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.uid} {...project} />
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AllProjects;
