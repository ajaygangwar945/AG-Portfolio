/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Database, Github, Mail, Code } from 'lucide-react';
import CyberCard from './common/CyberCard';

const Hero = () => {
  const skills = [
    { name: 'Python', icon: Terminal, color: '#3776ab', slug: 'python' },
    { name: 'JavaScript', icon: Code, color: '#f7df1e', slug: 'javascript' },
    { name: 'React', icon: Cpu, color: '#61dafb', slug: 'react' },
    { name: 'AI/ML', icon: Database, color: '#ff6f00', slug: 'tensorflow' },
  ];

  return (
    <section id="home" className="hero" style={{ position: 'relative' }}>
      <div className="hero-grid container">
        {/* Left Column - HUD Interface */}
        <CyberCard
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          padding="2.5rem"
          accentColor="var(--home-accent)"
        >




          <motion.h1
            style={{ 
              fontSize: '2.8rem', 
              marginBottom: '0.8rem', 
              lineHeight: '1.2', 
              fontWeight: '900',
              color: 'var(--text-secondary)'
            }}
          >
            I AM <br/>
            <span className="glitch-flicker" style={{ color: 'var(--home-accent)' }}>AJAY</span> <br/>
            <span className="glitch-flicker" style={{ color: 'var(--home-accent)' }}>GANGWAR</span>
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.5, ease: "steps(20)" }}
            style={{ 
              fontSize: '1.2rem', 
              color: 'var(--home-accent)', 
              fontWeight: '600',
              fontFamily: 'var(--font-body)',
              borderRight: '2px solid var(--home-accent)',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              marginBottom: '1.2rem'
            }}
          >
            <span style={{ color: 'var(--skills-accent)' }}>ASPIRING DATA SCIENTIST</span> | <span style={{ color: 'var(--projects-accent)' }}>AI ENTHUSIAST</span>
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

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + (index * 0.1) }}
                style={{
                  padding: '0.4rem 1rem',
                  background: 'rgba(102, 252, 241, 0.05)',
                  border: '1px solid var(--card-border)',
                  fontSize: '0.7rem',
                  color: skill.color,
                  fontWeight: '700',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <div style={{ width: '12px', height: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img 
                    src={`https://cdn.simpleicons.org/${skill.slug}/${skill.color.replace('#', '')}`} 
                    alt={skill.name} 
                    style={{ width: '12px', height: '12px', objectFit: 'contain' }} 
                    onError={(e) => {
                      e.target.style.display = 'none';
                      const svg = e.target.parentNode.querySelector('svg');
                      if (svg) svg.style.display = 'block';
                    }}
                  />
                  {skill.icon && <skill.icon size={12} style={{ display: 'none' }} />}
                </div>
                {skill.name}
              </motion.div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="https://github.com/ajaygangwar945" target="_blank" rel="noopener noreferrer">
              <button className="btn btn-primary">
                <Github size={18} /> GITHUB
              </button>
            </a>
            <a href="mailto:ajaygangwar945@gmail.com">
              <button className="btn btn-secondary">
                <Mail size={18} /> CONTACT
              </button>
            </a>
          </div>
        </CyberCard>

        {/* Right Column - Schematic Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
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
              width: '450px',
              height: '450px',
              border: '1px dashed var(--hero-accent)',
              borderRadius: '50%',
              opacity: 0.2,
              zIndex: 0
            }}
          />

          <div style={{ position: 'relative', zIndex: 1, display: 'inline-block' }}>
            <CyberCard 
              padding="0.5rem" 
              accentColor="var(--home-accent)"
              style={{ background: 'var(--card-bg)' }}
            >
               <img 
                 src="/profile_plain.png" 
                 alt="Ajay Gangwar"                  style={{ 
                    width: '100%',
                    maxWidth: '300px',
                    height: 'auto',
                    aspectRatio: '1/1',
                    objectFit: 'cover',
                    clipPath: 'polygon(15% 0, 100% 0, 100% 85%, 85% 100%, 0 100%, 0 15%)',

                  }} 
               />
            </CyberCard>
            {/* HUD Callouts */}

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
