import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Activity, ScanLine, Heart, Box, Layers, Terminal, Globe, AppWindow, Cpu, Database, ShieldAlert, CloudRain, Scale, Map } from 'lucide-react';
import CyberCard from './common/CyberCard';
import { allProjects } from '../data/projectsData';

export const ProjectCard = ({ title, description, tech, github, live, icon: Icon, image, color }) => (
  <CyberCard
    layout
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    padding="0"
    accentColor={color || "var(--projects-accent)"}
    style={{
      overflow: 'hidden',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    {/* Image / Schematic Header */}
    <div style={{ position: 'relative', height: '200px', overflow: 'hidden', borderBottom: `1px solid ${color || 'var(--card-border)'}` }}>
      {image ? (
        <img
          src={image}
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      ) : (
        <div style={{
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at center, var(--card-bg) 0%, #000 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: 0.7
        }}>
          <Icon size={64} color={color || "var(--projects-accent)"} opacity={0.3} />
        </div>
      )}
      <div style={{ 
        position: 'absolute', 
        inset: 0, 
        background: 'linear-gradient(to bottom, transparent 60%, var(--bg-color) 100%)',
        zIndex: 1
      }} />
      
      {/* Scanline Overlay */}
      <div className="scanlines" style={{ position: 'absolute', inset: 0, opacity: 0.1, zIndex: 2 }} />

      {/* Featured Badge */}



    </div>

    {/* Content */}
    <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
        <Icon size={16} color={color || "var(--projects-accent)"} />
        <h3 style={{
          fontSize: '1.2rem',
          color: color || 'var(--text-secondary)',
          fontFamily: 'var(--font-heading)',
          margin: 0,
          opacity: 0.95
        }}>{title}</h3>
      </div>

      <p style={{
        color: color || 'var(--text-dim)',
        opacity: 0.8,
        fontSize: '0.85rem',
        lineHeight: '1.6',
        marginBottom: '1.5rem',
        flexGrow: 1,
        fontFamily: 'var(--font-body)'
      }}>
        &gt; {description}
      </p>

      {/* Tech Stack */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
        {tech.map((t) => (
          <CyberCard 
            key={t}
            className="cyber-card-compact"
            padding="0.25rem 0.61rem"
            accentColor={color || 'var(--projects-accent)'}
            notchedSize={6}
            notchedOffset={3}
            style={{
              fontSize: '0.65rem',
              color: color || 'var(--projects-accent)',
              background: 'var(--badge-bg)',
              border: `1px solid ${color || 'var(--projects-accent)'}`, 
              opacity: 1,
              fontWeight: '700',
              fontFamily: 'var(--font-body)',
              cursor: 'default',
              display: 'inline-flex'
            }}
          >
            {t.toUpperCase()}
          </CyberCard>
        ))}
      </div>

      {/* Links */}
      <div style={{
        display: 'flex',
        gap: '1rem',
        paddingTop: '1rem',
        borderTop: `1px solid ${color || 'var(--card-border)'}`
      }}>
        <a href={github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ 
          padding: '0.4rem 0.8rem', 
          fontSize: '0.7rem', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.4rem',
          borderColor: color || 'var(--projects-accent)',
          color: color || 'var(--projects-accent)',
          background: 'transparent'
        }}>
          <Github size={14} /> Source Code
        </a>
        {live && (
          <a href={live} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ 
            padding: '0.4rem 0.8rem', 
            fontSize: '0.7rem', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.4rem',
            background: color || 'var(--projects-accent)',
            color: 'var(--bg-color)',
            borderColor: 'transparent'
          }}>
            <ExternalLink size={14} /> Live Demo
          </a>
        )}
      </div>
    </div>
  </CyberCard>
);

const Projects = () => {
  const [activeTab, setActiveTab] = useState('All');
  const categories = ['All', 'Full Stack', 'Frontend', 'Data Visualization', 'AI & Data', 'Cybersecurity'];

  const filteredProjects = activeTab === 'All'
    ? allProjects.slice(0, 6)
    : allProjects.filter(project => project.category.includes(activeTab));

  return (
    <section id="projects" style={{ padding: '4rem 0', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          style={{ marginBottom: '2rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
            <Layers size={24} color="var(--projects-accent)" />
            <span style={{ fontSize: '0.8rem', color: 'var(--projects-accent)', fontWeight: '800', letterSpacing: '3px' }}>PROJECT ARCHIVE</span>
          </div>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-heading)' }}>
            Featured <span style={{ color: 'var(--projects-accent)' }}>Projects</span>
          </h2>
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

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.uid} {...project} />
            ))}
          </AnimatePresence>
        </div>

        {activeTab === 'All' && allProjects.length > 6 && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem' }}>
            <a href="/projects" className="btn btn-primary" style={{ 
              padding: '0.8rem 2rem', 
              fontSize: '0.8rem', 
              letterSpacing: '2px',
              background: 'var(--projects-accent)',
              color: 'var(--bg-color)',
              borderColor: 'transparent'
            }}>
              &gt; VIEW ALL PROJECTS
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
