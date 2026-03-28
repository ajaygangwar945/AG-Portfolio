/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Database, Github, Mail, Code, Linkedin } from 'lucide-react';
import CyberCard from './common/CyberCard';

const Hero = () => {
  const skills = [
    {
      name: 'Python',
      icon: Terminal,
      color: '#3776ab',
      slug: 'python',
      customLogo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    },
    {
      name: 'JavaScript',
      icon: Code,
      color: '#f7df1e',
      slug: 'javascript',
      customLogo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    },
    {
      name: 'React',
      icon: Cpu,
      color: '#61dafb',
      slug: 'react',
      customLogo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    },
    {
      name: 'AI/ML',
      icon: Database,
      color: '#ff6f00',
      slug: 'tensorflow',
      customLogo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
    },
  ];

  return (
    <section id="home" className="hero" style={{ position: 'relative' }}>
      <div className="hero-grid container">
        {/* Left Column - HUD Interface */}
        <CyberCard
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          accentColor="var(--home-accent)"
          className="hero-main-card"
        >




          <motion.h1
            style={{ 
              fontSize: 'clamp(1.75rem, 8vw, 3.5rem)', 
              marginBottom: '0.8rem', 
              lineHeight: '1.1', 
              fontWeight: '900',
              color: 'var(--text-secondary)'
            }}
          >
            I AM <br/>
            <span className="glitch-flicker" style={{ color: 'var(--home-accent)' }}>AJAY</span> <br/>
            <span className="glitch-flicker" style={{ color: 'var(--home-accent)' }}>GANGWAR</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{ 
              fontSize: 'clamp(0.8rem, 3.5vw, 1.1rem)', 
              color: 'var(--home-accent)', 
              fontWeight: '600',
              fontFamily: 'var(--font-body)',
              borderLeft: '3px solid var(--home-accent)',
              paddingLeft: '0.75rem',
              whiteSpace: 'normal',
              marginBottom: '1.5rem',
              display: 'block',
              maxWidth: '100%',
              lineHeight: '1.4'
            }}
          >
            <span style={{ color: 'var(--skills-accent)' }}>ASPIRING DATA SCIENTIST</span> <br className="mobile-break" /> 
            <span className="hide-mobile"> | </span>
            <span style={{ color: 'var(--projects-accent)' }}>AI ENTHUSIAST</span>
          </motion.div>

          <p style={{ 
            marginBottom: '1.5rem', 
            color: 'var(--text-primary)',
            fontSize: '1rem',
            lineHeight: '1.8',
            fontFamily: 'var(--font-body)'
          }}>
            I specialize in bridging the gap between complex datasets and intelligent neural solutions using state-of-the-art AI/ML architectures.
          </p>

          <div className="hero-skills">
            {skills.map((skill, index) => {
              const logoUrl =
                skill.customLogo ||
                (skill.slug
                  ? `https://cdn.simpleicons.org/${skill.slug}`
                  : null);
              const Icon = skill.icon;
              return (
                <CyberCard
                  key={skill.name}
                  disableHover
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  accentColor={skill.color}
                  notchedSize={8}
                  notchedOffset={5}
                  notchedBorderWidth={1}
                  className="hero-skill-card cyber-card-compact"
                  padding="0.65rem"
                  style={{
                    '--accent-color': skill.color,
                    position: 'relative',
                    borderColor: skill.color,
                    boxShadow: `0 0 10px color-mix(in srgb, ${skill.color} 10%, transparent)`,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    background: 'var(--card-bg)',
                    flex: '0 0 auto'
                  }}
                >
                  <div className="skill-card-icon-box">
                    <img
                      src={logoUrl}
                      alt={skill.name}
                      style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        objectFit: 'contain',
                        filter: skill.color.startsWith('var')
                          ? 'var(--logo-icon-filter)'
                          : 'none',
                      }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        const next = e.target.nextSibling;
                        if (next && next.style) next.style.display = 'block';
                      }}
                    />
                    {Icon && (
                      <Icon
                        size={14}
                        color={skill.color}
                        style={{ display: 'none' }}
                      />
                    )}
                  </div>
                  <h4 className="skill-card-name">{skill.name}</h4>
                </CyberCard>
              );
            })}
          </div>

          <div className="hero-btns">
            <a href="https://github.com/ajaygangwar945" target="_blank" rel="noopener noreferrer">
              <button className="btn btn-primary">
                <Github size={18} /> GITHUB
              </button>
            </a>
            <a href="https://linkedin.com/in/ajaygangwar945" target="_blank" rel="noopener noreferrer">
              <button className="btn btn-primary">
                <Linkedin size={18} /> LINKEDIN
              </button>
            </a>
            <a href="mailto:ajaygangwar945@gmail.com">
              <button className="btn btn-secondary">
                <Mail size={18} /> CONTACT
              </button>
            </a>
          </div>
        </CyberCard>

        {/* Right Column - Schematic Display (Profile Image) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hero-image-container"
          style={{ position: 'relative', textAlign: 'center' }}
        >
          {/* HUD Reticle */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 'min(380px, 80vw)',
              height: 'min(380px, 80vw)',
              border: '1px dashed var(--home-accent)',
              borderRadius: '50%',
              opacity: 0.2,
              zIndex: 0
            }}
          />

          <div style={{ position: 'relative', zIndex: 1, display: 'inline-block' }}>
            <CyberCard 
              padding="0.5rem" 
              accentColor="var(--home-accent)"
              style={{ background: 'var(--card-bg)', margin: '0 auto' }}
            >
               <img 
                 src="/profile_plain.png" 
                 alt="Ajay Gangwar" 
                 style={{ 
                    width: '100%',
                    maxWidth: 'min(280px, 65vw)',
                    height: 'auto',
                    aspectRatio: '1/1',
                    objectFit: 'cover',
                    clipPath: 'polygon(15% 0, 100% 0, 100% 85%, 85% 100%, 0 100%, 0 15%)',
                  }} 
               />
            </CyberCard>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
