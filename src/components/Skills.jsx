/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Cpu, Activity, Shield, Box, Code, Globe, Database, Terminal, Layers, Laptop, PenTool, Server, GitBranch, Github as GithubIcon, Image as ImageIcon } from 'lucide-react';
import CyberCard from './common/CyberCard';

const SkillCard = ({ name, percentage, color, category, icon: Icon, slug, customLogo }) => {
  const logoUrl = customLogo || (slug ? `https://cdn.simpleicons.org/${slug}` : null);

  return (
    <CyberCard
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      padding="1.5rem"
      accentColor={color}
      style={{
        '--card-border': color.startsWith('#') ? `${color}33` : `rgba(var(--primary-accent-rgb), 0.2)`,
        '--primary-accent': color
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ 
            padding: '0.4rem', 
            background: `${color.startsWith('#') ? color + '15' : 'rgba(var(--primary-accent-rgb), 0.1)'}`, 
            border: `1px solid ${color}`, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            width: '28px', 
            height: '28px' 
          }}>
            <img 
              src={logoUrl} 
              alt={name} 
              style={{ 
                width: '18px', 
                height: '18px', 
                objectFit: 'contain',
                filter: color.startsWith('var') ? 'var(--logo-icon-filter)' : 'none'
              }} 
              onError={(e) => {
                e.target.style.display = 'none';
                const sibling = e.target.nextSibling;
                if (sibling && sibling.style) sibling.style.display = 'block';
              }}
            />
            {Icon && <Icon size={16} color={color} style={{ display: 'none' }} />}
          </div>
          <div>
            <h4 style={{ 
              fontSize: '1rem', 
              fontWeight: '700', 
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-heading)'
            }}>{name}</h4>
            <span style={{ fontSize: '0.6rem', color: color, fontWeight: '800', letterSpacing: '1px' }}>{category.toUpperCase()}</span>
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ fontSize: '0.9rem', fontWeight: '800', color: color }}>{percentage}%</span>
        </div>
      </div>

      <div style={{ height: '4px', background: 'rgba(255, 255, 255, 0.05)', position: 'relative', overflow: 'hidden' }}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ height: '100%', background: color, boxShadow: `0 0 10px ${color}` }}
        />
      </div>
      
      <div style={{ marginTop: '0.5rem', display: 'flex', justifyContent: 'space-between' }}>
         <div style={{ width: '2px', height: '4px', background: color }} />
         <div style={{ width: '2px', height: '4px', background: color }} />
      </div>
    </CyberCard>
  );
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState('All');
  const categories = ['All', 'Languages', 'Frontend', 'Backend', 'Tools'];

  const allSkills = [
    { name: 'Python', percentage: 75, color: '#3776ab', category: 'Languages', slug: 'python', icon: Terminal, customLogo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'JavaScript', percentage: 90, color: '#f7df1e', category: 'Languages', slug: 'javascript', icon: Zap, customLogo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'C', percentage: 70, color: '#a8b9cc', category: 'Languages', slug: 'c', icon: Cpu },
    { name: 'C++', percentage: 75, color: '#00599c', category: 'Languages', slug: 'cplusplus', icon: Cpu, customLogo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    { name: 'Java', percentage: 85, color: '#ed8b00', category: 'Languages', slug: 'openjdk', icon: Code, customLogo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    
    { name: 'HTML5', percentage: 90, color: '#e34f26', category: 'Frontend', slug: 'html5', icon: Globe, customLogo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', percentage: 85, color: '#1572b6', category: 'Frontend', slug: 'css3', icon: Globe, customLogo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'Tailwind CSS', percentage: 80, color: '#06b6d4', category: 'Frontend', slug: 'tailwindcss', icon: Globe, customLogo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'React', percentage: 90, color: '#61dafb', category: 'Frontend', slug: 'react', icon: Layers, customLogo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },

    { name: 'Node.js', percentage: 80, color: '#339933', category: 'Backend', slug: 'nodedotjs', icon: Database, customLogo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express.js', percentage: 80, color: 'var(--express-accent)', category: 'Backend', slug: 'express', icon: Server, customLogo: 'https://cdn.simpleicons.org/express' },
    { name: 'MySQL', percentage: 85, color: '#4479A1', category: 'Backend', slug: 'mysql', icon: Database, customLogo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'MongoDB', percentage: 80, color: '#47A248', category: 'Backend', slug: 'mongodb', icon: Database, customLogo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },

    { name: 'Figma', percentage: 75, color: '#f24e1e', category: 'Tools', slug: 'figma', icon: PenTool, customLogo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'Canva', percentage: 80, color: '#00c4cc', category: 'Tools', slug: 'canva', icon: ImageIcon, customLogo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg' },
    { name: 'MS Excel', percentage: 80, color: '#217346', category: 'Tools', slug: 'microsoftexcel', icon: Activity, customLogo: 'https://img.icons8.com/color/144/microsoft-excel-2019--v1.png' },
    { name: 'Power BI', percentage: 70, color: '#f2c811', category: 'Tools', slug: 'powerbi', icon: Activity, customLogo: 'https://img.icons8.com/color/144/power-bi.png' },
    { name: 'Git', percentage: 85, color: '#f05032', category: 'Tools', slug: 'git', icon: GitBranch, customLogo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', percentage: 90, color: 'var(--github-accent)', category: 'Tools', slug: 'github', icon: GithubIcon, customLogo: 'https://cdn.simpleicons.org/github' },
    { name: 'Linux', percentage: 80, color: '#fcc624', category: 'Tools', slug: 'linux', icon: Terminal, customLogo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' }
  ];

  const filteredSkills = activeTab === 'All' 
    ? allSkills 
    : allSkills.filter(skill => skill.category === activeTab);

  return (
    <section id="skills" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        <div style={{ marginBottom: '4rem' }}>
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
          gap: '1.5rem'
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
            '--primary-accent': 'var(--skills-accent)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--skills-accent)', marginBottom: '1.5rem' }}>
            <Zap size={20} className="glitch-flicker" />
            <span style={{ fontWeight: '800', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Learning Journey</span>
          </div>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', fontFamily: 'var(--font-body)', fontSize: '0.9rem', fontWeight: '500' }}>
            {[
              { name: 'Docker', color: '#2496ed', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
              { name: 'AWS', color: '#ff9900', logo: 'https://img.icons8.com/color/144/amazon-web-services.png' },
              { name: 'Spring Boot', color: '#6db33f', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
              { name: 'TypeScript', color: '#3178c6', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' }
            ].map((tech) => (
              <CyberCard 
                key={tech.name}
                className="cyber-card-compact"
                padding="0.6rem 1.2rem"
                accentColor={tech.color}
                notchedSize={6}
                notchedOffset={3}
                whileHover={{ scale: 1.05 }}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.75rem', 
                  color: 'var(--text-primary)',
                  background: 'var(--badge-bg)',
                  border: `1px solid ${tech.color.startsWith('#') ? 
                    `rgba(${parseInt(tech.color.slice(1,3), 16)}, ${parseInt(tech.color.slice(3,5), 16)}, ${parseInt(tech.color.slice(5,7), 16)}, var(--badge-border-alpha))` : 
                    tech.color}`,
                  cursor: 'default'
                }}
              >
                <img 
                  src={tech.logo} 
                  alt={tech.name} 
                  style={{ 
                    width: '18px', 
                    height: '18px', 
                    objectFit: 'contain',
                    filter: tech.color.startsWith('var') ? 'var(--logo-icon-filter)' : 'none'
                  }} 
                />
                <span style={{ fontSize: '0.8rem', fontWeight: '600', letterSpacing: '0.5px' }}>{tech.name}</span>
              </CyberCard>
            ))}
          </div>
        </CyberCard>
      </div>
    </section>
  );
};

export default Skills;
