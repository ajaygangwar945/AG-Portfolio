import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, User, Layers, GraduationCap } from 'lucide-react';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('home');

  const navLinks = [
    { name: 'Home', icon: Home, color: '#3b82f6', id: 'home' },
    { name: 'About', icon: User, color: '#a5b4fc', id: 'about' },
    { name: 'Skills', icon: Layers, color: '#22d3ee', id: 'skills' },
    { name: 'Projects', icon: Layers, color: '#10b981', id: 'projects' },
    { name: 'Education', icon: GraduationCap, color: '#f59e0b', id: 'education' },
  ];

  // Simple scroll spy to update active tab
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'education'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveTab(section);
          }
        }
      }
      
      // Special case for home at top
      if (window.scrollY < 50) setActiveTab('home');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="navbar"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '1.25rem 0',
        background: 'rgba(2, 6, 23, 0.7)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <motion.div 
          whileHover={{ scale: 1.02 }}
          style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.5rem', fontWeight: '800', fontFamily: 'var(--font-heading)', cursor: 'pointer' }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img src="/favicon.svg" alt="Logo" style={{ width: '32px', height: '32px' }} />
          <span className="gradient-text">AG Portfolio</span>
        </motion.div>
        
        <ul style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', listStyle: 'none' }}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <motion.a 
                whileHover={{ 
                  y: -2,
                  scale: 1.05,
                  filter: 'brightness(1.2)',
                  background: activeTab === link.id ? 'var(--primary-gradient)' : 'rgba(255, 255, 255, 0.15)'
                }}
                whileTap={{ scale: 0.95 }}
                href={`#${link.id}`}
                onClick={() => setActiveTab(link.id)}
                style={{
                  color: activeTab === link.id ? '#020617' : 'var(--text-secondary)',
                  background: activeTab === link.id ? 'var(--primary-gradient)' : 'transparent',
                  padding: '0.6rem 1rem',
                  borderRadius: '0.75rem',
                  fontWeight: activeTab === link.id ? '700' : '500',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.9rem',
                  transition: 'var(--transition-smooth)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <link.icon size={18} color={activeTab === link.id ? '#020617' : link.color} strokeWidth={2.5} />
                <span style={{ display: 'inline' }}>{link.name}</span>
              </motion.a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
