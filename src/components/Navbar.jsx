import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Layers, GraduationCap, Cpu, Compass, Box, Award, FileText, Mail, Menu, X, ShieldCheck } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = ({ theme, toggleTheme }) => {
  const [activeTab, setActiveTab] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = useMemo(() => [
    { name: 'Home', icon: Home, id: 'home' },
    { name: 'About', icon: Compass, id: 'about' },
    { name: 'Skills', icon: Cpu, id: 'skills' },
    { name: 'Projects', icon: Layers, id: 'projects' },
    { name: 'Certificates', icon: ShieldCheck, id: 'certificates' },
    { name: 'Education', icon: GraduationCap, id: 'education' },
    { name: 'Achievements', icon: Award, id: 'achievements' },
    { name: 'Resume', icon: FileText, id: 'resume' },
    { name: 'Contact', icon: Mail, id: 'contact' },
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.id);
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
      if (window.scrollY < 50) setActiveTab('home');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="navbar"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '0.75rem 0',
        background: 'var(--nav-bg)',
        borderBottom: '2px solid var(--secondary-accent)',
        boxShadow: '0 0 15px rgba(102, 252, 241, 0.1)',
        backdropFilter: 'blur(10px)'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <motion.div 
          whileHover={{ x: 5 }}
          style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.2rem', fontWeight: '900', fontFamily: 'var(--font-heading)', cursor: 'pointer', color: 'var(--primary-accent)' }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div style={{ width: '32px', height: '32px', border: '2px solid var(--primary-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(45deg)' }}>
             <span style={{ transform: 'rotate(-45deg)', fontSize: '0.8rem' }}>AG</span>
          </div>
          <span className="glitch-flicker" style={{ letterSpacing: '0.2rem' }}>PORTFOLIO</span>
        </motion.div>
        
        {/* Desktop Links */}
        <ul className="desktop-menu" style={{ display: 'flex', gap: '0.1rem', alignItems: 'center', listStyle: 'none' }}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <motion.a 
                whileHover={{ 
                  backgroundColor: `var(--${link.id}-accent-alpha, rgba(102, 252, 241, 0.1))`,
                  color: `var(--${link.id}-accent)`
                }}
                href={`#${link.id}`}
                onClick={() => setActiveTab(link.id)}
                style={{
                  color: activeTab === link.id ? `var(--${link.id}-accent)` : 'var(--text-primary)',
                  padding: '0.5rem 0.75rem',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.65rem',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  borderBottom: activeTab === link.id ? `2px solid var(--${link.id}-accent)` : '2px solid transparent',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  transition: '0.2s'
                }}
              >
                <link.icon size={12} />
                <span className={activeTab === link.id ? 'glitch-flicker' : ''}>{link.name}</span>
              </motion.a>
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          
          {/* Mobile Menu Toggle */}
          <div className="mobile-toggle" onClick={toggleMobileMenu} style={{ cursor: 'pointer', color: 'var(--primary-accent)', display: 'none' }}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: 'var(--bg-color)',
              borderBottom: '1px solid var(--card-border)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={`#${link.id}`}
                onClick={() => {
                  setActiveTab(link.id);
                  setIsMobileMenuOpen(false);
                }}
                style={{
                  padding: '1.25rem 2rem',
                  color: activeTab === link.id ? `var(--${link.id}-accent)` : 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  fontSize: '0.9rem',
                  fontWeight: '700',
                  borderLeft: activeTab === link.id ? `4px solid var(--${link.id}-accent)` : '4px solid transparent',
                  background: activeTab === link.id ? `var(--${link.id}-accent-alpha, rgba(102, 252, 241, 0.05))` : 'transparent'
                }}
              >
                <link.icon size={18} />
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @media (max-width: 1100px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;
