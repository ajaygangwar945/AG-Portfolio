import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Cpu, Activity, Shield, Box, Code, Globe, Database, Terminal, Layers, Laptop, PenTool, Server, GitBranch, Github as GithubIcon, Image as ImageIcon } from 'lucide-react';
import CyberCard from './common/CyberCard';
import { allSkills, categories, learningJourney } from '../data/skillsData';

const SkillCard = ({ name, color, slug, percentage, category, customLogo, icon: Icon }) => {
  const logoUrl = customLogo || (slug ? `https://cdn.simpleicons.org/${slug}` : null);

  return (
    <CyberCard
      layout
      disableHover
      className="skill-card-main cyber-card-compact"
      accentColor={color}
      padding="1.25rem"
      notchedSize={14}
      notchedOffset={10}
      notchedBorderWidth={1.5}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      style={{
        '--accent-color': color,
        background: 'var(--card-bg)',
        borderColor: color,
      }}
    >
      <div className="skill-card-scanline" aria-hidden />
      <div className="skill-card-top">
        <div className="skill-card-icon-box">
          <img 
            src={logoUrl} 
            alt={name} 
            style={{ 
              filter: color.startsWith('var') ? 'var(--logo-icon-filter)' : 'none'
            }} 
            onError={(e) => {
              e.target.style.display = 'none';
              const sibling = e.target.nextSibling;
              if (sibling && sibling.style) sibling.style.display = 'block';
            }}
          />
          {Icon && <Icon size={18} color={color} style={{ display: 'none' }} />}
        </div>
        
        <div className="skill-card-info">
          <h4 className="skill-card-name">{name}</h4>
          <span className="skill-card-category">{category}</span>
        </div>
        
        <div className="skill-card-percent">{percentage}%</div>
      </div>
      
      <div className="skill-progress-wrapper">
        <motion.div 
          className="skill-progress-bar"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        />
      </div>
    </CyberCard>
  );
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filteredSkills = activeTab === 'All' 
    ? allSkills 
    : allSkills.filter(skill => skill.category === activeTab);

  return (
    <section id="skills" style={{ minHeight: '100vh', display: 'flex', alignItems: 'flex-start' }}>
      <div className="container">
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
            <Cpu size={24} color="var(--skills-accent)" />
            <span style={{ fontSize: '0.8rem', color: 'var(--skills-accent)', fontWeight: '800', letterSpacing: '3px' }}>CORE SKILLS</span>
          </div>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-heading)' }}>
            Technical <span style={{ color: 'var(--skills-accent)' }}>Skills</span>
          </h2>
          <div style={{ width: '100%', height: '1px', background: 'var(--card-border)' }} />
        </div>

        {/* Tab Navigation */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              style={{
                background: activeTab === cat ? 'var(--skills-accent)' : 'transparent',
                border: '1px solid var(--skills-accent)',
                color: activeTab === cat ? 'var(--bg-color)' : 'var(--skills-accent)',
                fontSize: '0.7rem',
                fontWeight: '900',
                cursor: 'pointer',
                padding: '0.5rem 1.5rem',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0 100%)'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
          gap: '1.25rem'
        }}>
          <AnimatePresence mode='popLayout'>
            {filteredSkills.map((skill) => (
              <SkillCard key={skill.name} {...skill} />
            ))}
          </AnimatePresence>
        </div>

        {/* Learning Journey Footer */}
        <CyberCard
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          padding="2rem"
          accentColor="var(--skills-accent)"
          style={{ 
            marginTop: '4rem',
            '--card-border': 'var(--skills-accent-alpha)',
            '--primary-accent': 'var(--skills-accent)',
            background: 'var(--card-bg)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--skills-accent)', marginBottom: '1.5rem' }}>
            <Zap size={20} className="glitch-flicker" />
            <span style={{ fontWeight: '800', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Learning Journey</span>
          </div>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', fontFamily: 'var(--font-body)', fontSize: '0.9rem', fontWeight: '500' }}>
            {/* Learning Journey Items */}
            {learningJourney.map((tech) => (
              <CyberCard
                key={tech.name}
                disableHover
                className="skill-card-journey cyber-card-compact"
                accentColor={tech.color}
                padding="0.65rem"
                notchedSize={9}
                notchedOffset={6}
                notchedBorderWidth={1.25}
                style={{
                  '--accent-color': tech.color,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  background: 'var(--card-bg)',
                  borderColor: tech.color,
                }}
              >
                <div className="skill-card-icon-box">
                  <img 
                    src={tech.logo} 
                    alt={tech.name} 
                    style={{ 
                      filter: tech.color.startsWith('var') ? 'var(--logo-icon-filter)' : 'none'
                    }} 
                  />
                </div>
                <span style={{ fontSize: '0.8rem', fontWeight: '600', letterSpacing: '0.5px', color: 'var(--text-primary)' }}>{tech.name}</span>
              </CyberCard>
            ))}
          </div>
        </CyberCard>
      </div>
    </section>
  );
};

export default Skills;
