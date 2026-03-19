import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Terminal, Cpu, Braces, Database, Palette, Globe, Github, Linkedin, Mail } from 'lucide-react';

const SkillPill = ({ name, icon: Icon, color }) => {
  return (
    <motion.span
      whileHover={{ 
        y: -5,
        scale: 1.08,
        borderColor: color,
        background: `rgba(${parseInt(color.slice(1,3), 16)}, ${parseInt(color.slice(3,5), 16)}, ${parseInt(color.slice(5,7), 16)}, 0.25)`,
        boxShadow: `0 15px 30px -10px ${color}`,
      }}
      whileTap={{ scale: 0.95 }}
      style={{
        padding: '0.6rem 1.25rem',
        borderRadius: '1rem',
        fontSize: '0.9rem',
        fontWeight: '600',
        fontFamily: 'var(--font-heading)',
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        color: 'var(--text-primary)',
        cursor: 'default',
        transition: 'var(--transition-smooth)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.6rem'
      }}
    >
      <Icon size={18} color={color} />
      {name}
    </motion.span>
  );
};

const Hero = () => {
  const skills = [
    { name: 'Python', icon: Terminal, color: '#3776ab' },
    { name: 'JavaScript', icon: Braces, color: '#f7df1e' },
    { name: 'Node.js', icon: Database, color: '#339933' },
    { name: 'Next.JS', icon: Globe, color: '#000000' },
    { name: 'React', icon: Cpu, color: '#61dafb' },
    { name: 'Tailwind', icon: Palette, color: '#38b2ac' },
    { name: 'Java', icon: Code2, color: '#f8981d' },
  ];

  return (
    <section className="hero" style={{ paddingTop: '8rem', paddingBottom: '4rem', position: 'relative' }}>
      <div className="container" style={{ 
        display: 'grid', 
        gridTemplateColumns: '1.2fr 1fr', 
        gap: '8rem', 
        alignItems: 'center',
        textAlign: 'left'
      }}>
        {/* Left Column - Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '3rem', marginBottom: '2.5rem' }}>
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                style={{ 
                  fontSize: '4.5rem', 
                  marginBottom: '1rem', 
                  lineHeight: '1.1', 
                  fontWeight: '800',
                  color: 'var(--text-primary)',
                }}
              >
                I'm <br/><span className="gradient-text" style={{ whiteSpace: 'nowrap' }}>Ajay Gangwar</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                style={{ 
                  fontSize: '1.5rem', 
                  color: 'var(--text-accent-cyan)', 
                  fontWeight: '500',
                  fontFamily: 'var(--font-heading)'
                }}
              >
                Aspiring Data Scientist | AI Enthusiast
              </motion.p>
            </div>

            <motion.div
              initial={{ scale: 0, rotate: 0 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
              whileHover={{ scale: 1.05 }}
              style={{
                width: '180px',
                height: '180px',
                flexShrink: 0,
                borderRadius: '50%',
                overflow: 'hidden',
                border: '2px solid var(--accent-cyan)',
                boxShadow: '0 0 20px rgba(34, 211, 238, 0.3)',
              }}
            >
              <img 
                src="/profile.png" 
                alt="Ajay Gangwar" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{ 
              maxWidth: '550px', 
              marginBottom: '2.5rem', 
              color: 'var(--text-secondary)',
              fontSize: '1.15rem',
              lineHeight: '1.8'
            }}
          >
            I bridge the gap between <span style={{ color: 'var(--text-accent-violet)' }}>complex problems</span> and <span style={{ color: 'var(--text-accent-cyan)' }}>intelligent solutions</span> using modern web technologies and AI/ML.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', marginBottom: '3.5rem' }}
          >
            {skills.map((skill) => (
              <SkillPill key={skill.name} {...skill} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            style={{ display: 'flex', gap: '1.5rem' }}
          >
            <a href="https://github.com/ajaygangwar945" target="_blank" rel="noopener noreferrer">
              <motion.button 
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-github"
              >
                <Github size={20} /> GitHub
              </motion.button>
            </a>
            <a href="https://linkedin.com/in/ajaygangwar945" target="_blank" rel="noopener noreferrer">
              <motion.button 
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-linkedin"
              >
                <Linkedin size={20} /> LinkedIn
              </motion.button>
            </a>
            <a href="mailto:ajaygangwar945@gmail.com">
              <motion.button 
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-contact"
              >
                <Mail size={20} /> Contact Me
              </motion.button>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ position: 'relative' }}
        >
          <motion.div 
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 1, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            style={{ position: 'relative' }}
          >
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '120%',
              height: '120%',
              background: 'var(--primary-gradient)',
              filter: 'blur(100px)',
              opacity: '0.15',
              zIndex: -1
            }} />
            
            <div className="glass-card" style={{
              overflow: 'hidden',
              borderRadius: '2.5rem',
              padding: '1rem',
              background: 'rgba(15, 23, 42, 0.4)',
              boxShadow: '0 30px 60px -15px rgba(0,0,0,0.7)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <img 
                src="/code_ajay.png" 
                alt="Code Abstract" 
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  borderRadius: '1.75rem',
                  display: 'block',
                  filter: 'brightness(1.1) contrast(1.1)'
                }} 
              />
            </div>
            
            {/* Floating Tags */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                background: 'var(--bg-color)',
                border: '1px solid var(--accent-cyan)',
                padding: '0.75rem 1.25rem',
                borderRadius: '1rem',
                fontSize: '0.8rem',
                fontWeight: '700',
                color: 'var(--accent-cyan)',
                boxShadow: '0 10px 20px rgba(0,0,0,0.3)'
              }}
            >
              &lt;Developer /&gt;
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
