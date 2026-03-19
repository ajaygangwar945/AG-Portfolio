import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap } from 'lucide-react';
import pythonLogo from '../assets/Python-logo.svg';

const SkillCard = ({ name, percentage, image, color, category }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="skill-card-cyber"
      style={{
        padding: '2rem',
        borderRadius: '1.5rem',
        background: 'rgba(15, 23, 42, 0.4)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        boxShadow: '0 15px 35px rgba(0,0,0,0.4)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      {/* Animated Cyber Border */}
      <motion.div
        className="cyber-border"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        style={{
          position: 'absolute',
          inset: 0,
          border: `2px solid ${color}`,
          borderRadius: '1.5rem',
          pointerEvents: 'none',
          boxShadow: `inset 0 0 15px ${color}33, 0 0 20px ${color}44`,
          zIndex: 1
        }}
      />

      <div style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <div style={{
            width: '52px',
            height: '52px',
            borderRadius: '1.25rem',
            background: 'rgba(255, 255, 255, 0.03)',
            display: 'grid',
            placeItems: 'center',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: `0 0 20px ${color}11`,
            overflow: 'hidden',
            padding: '0.6rem'
          }}>
            <img src={image} alt={name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', display: 'block' }} />
          </div>
          <div style={{ textAlign: 'right' }}>
            <span style={{ 
              fontSize: '1.5rem', 
              fontWeight: '800', 
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-heading)',
              letterSpacing: '-0.02em'
            }}>
              {percentage}%
            </span>
          </div>
        </div>

        <h4 style={{ 
          fontSize: '1.25rem', 
          fontWeight: '700', 
          color: 'var(--text-primary)',
          marginBottom: '0.25rem'
        }}>{name}</h4>
        <p style={{ 
          fontSize: '0.7rem', 
          color: color, 
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          fontWeight: '700',
          opacity: 0.8
        }}>
          {category}
        </p>
      </div>

      <div style={{ position: 'relative', zIndex: 2, marginTop: '1.5rem' }}>
        <div style={{ 
          height: '8px', 
          background: 'rgba(255, 255, 255, 0.03)', 
          borderRadius: '4px',
          overflow: 'hidden',
          padding: '2px'
        }}>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${percentage}%` }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ 
              height: '100%', 
              background: `linear-gradient(90deg, transparent 0%, ${color} 100%)`,
              borderRadius: '2px',
              position: 'relative'
            }}
          >
            {/* Glow Head */}
            <div style={{
              position: 'absolute',
              right: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              width: '4px',
              height: '12px',
              background: color,
              boxShadow: `0 0 15px ${color}, 0 0 5px ${color}`
            }} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState('All');
  const categories = ['All', 'Languages', 'Frontend', 'Backend', 'Tools'];

  const allSkills = [
    { 
      name: 'Python', 
      percentage: 75, 
      image: pythonLogo, 
      color: '#3776ab', 
      category: 'Languages' 
    },
    { 
      name: 'Java', 
      percentage: 85, 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', 
      color: '#f8981d', 
      category: 'Languages' 
    },
    { 
      name: 'C++', 
      percentage: 75, 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', 
      color: '#00599c', 
      category: 'Languages' 
    },
    { 
      name: 'C', 
      percentage: 70, 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg', 
      color: '#a8b9cc', 
      category: 'Languages' 
    },
    { 
      name: 'JavaScript', 
      percentage: 90, 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', 
      color: '#f7df1e', 
      category: 'Languages' 
    },
    { 
      name: 'React', 
      percentage: 90, 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', 
      color: '#61dafb', 
      category: 'Frontend' 
    },
    { 
      name: 'HTML5', 
      percentage: 95, 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', 
      color: '#e34f26', 
      category: 'Frontend' 
    },
    { 
      name: 'CSS3', 
      percentage: 85, 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', 
      color: '#1572b6', 
      category: 'Frontend' 
    },
    { 
      name: 'Tailwind CSS', 
      percentage: 80, 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', 
      color: '#38b2ac', 
      category: 'Frontend' 
    },
    { 
      name: 'Node.js', 
      percentage: 85, 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', 
      color: '#339933', 
      category: 'Backend' 
    },
    { 
      name: 'MySQL', 
      percentage: 85, 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', 
      color: '#4479a1', 
      category: 'Backend' 
    },
    { 
      name: 'GitHub', 
      percentage: 90, 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', 
      color: '#ffffff', 
      category: 'Tools' 
    },
    { 
      name: 'Git', 
      percentage: 90, 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', 
      color: '#f05032', 
      category: 'Tools' 
    },
    { 
      name: 'Linux', 
      percentage: 80, 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', 
      color: '#fcc624', 
      category: 'Tools' 
    },
    { 
      name: 'Figma', 
      percentage: 75, 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', 
      color: '#f24e1e', 
      category: 'Tools' 
    },
  ];

  const filteredSkills = activeTab === 'All' 
    ? allSkills 
    : allSkills.filter(skill => skill.category === activeTab);

  return (
    <section id="skills" style={{ padding: '5rem 0 2rem', position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{ 
              fontSize: '4rem', 
              fontWeight: '900', 
              letterSpacing: '-0.03em',
              marginBottom: '1rem',
              textTransform: 'uppercase'
            }}
          >
            Technical <span className="gradient-text">Arsenal</span>
          </motion.h2>
          <div style={{ 
            width: '60px', 
            height: '4px', 
            background: 'var(--primary-gradient)', 
            margin: '0 auto 2rem',
            borderRadius: '2px'
          }} />
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', fontWeight: '500' }}>
            Mastering the core technologies of modern software development.
          </p>
        </div>

        {/* Tab Navigation */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '1.5rem', 
          marginBottom: '5rem',
          flexWrap: 'wrap'
        }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              style={{
                background: 'transparent',
                border: 'none',
                color: activeTab === cat ? 'var(--text-primary)' : 'var(--text-dim)',
                fontSize: '1rem',
                fontWeight: '700',
                cursor: 'pointer',
                padding: '0.5rem 1rem',
                position: 'relative',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                transition: 'all 0.3s ease'
              }}
            >
              {activeTab === cat && (
                <motion.div
                  layoutId="activeTabCyber"
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'var(--primary-gradient)'
                  }}
                />
              )}
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
          gap: '2rem'
        }}>
          <AnimatePresence mode='popLayout'>
            {filteredSkills.map((skill) => (
              <SkillCard key={skill.name} {...skill} />
            ))}
          </AnimatePresence>
        </div>

        {/* Learning Journey Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            marginTop: '4rem',
            textAlign: 'center',
            padding: '2.5rem',
            borderRadius: '2rem',
            background: 'rgba(15, 23, 42, 0.2)',
            border: '1px solid rgba(255, 255, 255, 0.03)'
          }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-accent-cyan)', marginBottom: '1.5rem' }}>
            <Zap size={20} />
            <span style={{ fontWeight: '800', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Current Exploration</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', flexWrap: 'wrap' }}>
            {[
              { name: 'Docker', logo: 'https://skillicons.dev/icons?i=docker' },
              { name: 'AWS', logo: 'https://skillicons.dev/icons?i=aws' },
              { name: 'SpringBoot', logo: 'https://skillicons.dev/icons?i=spring' },
              { name: 'TypeScript', logo: 'https://skillicons.dev/icons?i=ts' }
            ].map((tech) => (
              <div 
                key={tech.name}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: 'var(--text-secondary)',
                  opacity: 0.8,
                  transition: 'all 0.3s ease'
                }}
              >
                <img src={tech.logo} alt={tech.name} style={{ width: '24px', height: '24px', objectFit: 'contain' }} />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
