import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Activity, ScanLine, Heart } from 'lucide-react';

// Import project images
import projectAyush from '../assets/project-ayush.png';
import projectAts from '../assets/project-ats.png';
import projectPet from '../assets/project-pet.png';

const ProjectCard = ({ title, description, tech, github, live, icon: Icon, color, image, category, featured }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    whileHover={{ y: -10 }}
    className="glass-card"
    style={{
      overflow: 'hidden',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: 'rgba(15, 23, 42, 0.3)',
      border: '1px solid rgba(255, 255, 255, 0.05)',
    }}
  >
    {/* Image Container */}
    <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
      <img
        src={image}
        alt={title}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'transform 0.5s ease'
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      />

      {/* Top Banner for Featured */}
      {featured && (
        <div style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          background: 'var(--primary-gradient)',
          color: '#020617',
          padding: '0.3rem 0.8rem',
          borderRadius: '2rem',
          fontSize: '0.75rem',
          fontWeight: '800',
          boxShadow: '0 4px 12px rgba(34, 211, 238, 0.3)',
          zIndex: 2
        }}>
          Featured
        </div>
      )}

      {/* Overlaid Category Badges */}
      <div style={{
        position: 'absolute',
        bottom: '1rem',
        left: '1rem',
        display: 'flex',
        gap: '0.5rem',
        zIndex: 2
      }}>
        {category.split(',').map((cat, i) => (cat.trim() && (
          <span key={i} style={{
            background: 'rgba(15, 23, 42, 0.8)',
            backdropFilter: 'blur(8px)',
            color: 'white',
            padding: '0.3rem 0.8rem',
            borderRadius: '0.5rem',
            fontSize: '0.7rem',
            fontWeight: '600',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            {cat.trim()}
          </span>
        )))}
      </div>
    </div>

    {/* Content */}
    <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
        <div style={{
          width: '44px',
          height: '44px',
          display: 'grid',
          placeItems: 'center',
          borderRadius: '1rem',
          background: `${color}15`,
          border: `1px solid ${color}30`,
          flexShrink: 0
        }}>
          <Icon size={22} color={color} strokeWidth={2.5} />
        </div>
        <h3 style={{
          fontSize: '1.35rem',
          color: 'var(--text-primary)',
          fontWeight: '700',
          lineHeight: '1.2',
          margin: 0
        }}>{title}</h3>
      </div>

      <p style={{
        color: 'var(--text-secondary)',
        fontSize: '0.9rem',
        lineHeight: '1.6',
        marginBottom: '1.5rem',
        flexGrow: 1
      }}>
        {description}
      </p>

      {/* Tech Stack */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '1.5rem' }}>
        {tech.map((t) => (
          <span key={t} style={{
            fontSize: '0.7rem',
            color: 'var(--text-accent-cyan)',
            background: 'rgba(34, 211, 238, 0.05)',
            border: '1px solid rgba(34, 211, 238, 0.2)',
            padding: '0.3rem 0.8rem',
            borderRadius: '2rem',
            fontWeight: '600',
            letterSpacing: '0.02em',
            transition: 'all 0.3s ease'
          }}>
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div style={{
        display: 'flex',
        gap: '1.5rem',
        paddingTop: '1.2rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)'
      }}>
        <a href={github} target="_blank" rel="noopener noreferrer" style={{
          color: 'var(--text-primary)',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '0.9rem',
          fontWeight: '600',
          transition: 'color 0.3s ease',
          lineHeight: '1'
        }}
          onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-cyan)'}
          onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-primary)'}>
          <Github size={18} /> Code
        </a>
        <a href={live} target="_blank" rel="noopener noreferrer" style={{
          color: 'var(--text-primary)',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '0.9rem',
          fontWeight: '600',
          transition: 'color 0.3s ease',
          lineHeight: '1'
        }}
          onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-cyan)'}
          onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-primary)'}>
          <ExternalLink size={18} /> Live Demo
        </a>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const [activeTab, setActiveTab] = useState('All');
  const categories = ['All', 'Full Stack', 'Frontend', 'Data Visualization', 'AI & Data'];

  const allProjects = [
    {
      title: "Ayush Healthcare Platform",
      description: "Platform integrating traditional Ayush systems with global standards (FHIR R4, ICD-11) for secure data exchange.",
      tech: ["FastAPI", "React", "HL7 FHIR", "WHO API"],
      github: "https://github.com/ajaygangwar945",
      live: "https://ajay-gangwar-portfolio.netlify.app",
      icon: Activity,
      color: "#ef4444",
      image: projectAyush,
      category: "Full Stack, Data Visualization",
      featured: true
    },
    {
      title: "ATS Resume Score",
      description: "AI-driven application using Google Gemini to analyze resumes and optimize alignment with job descriptions.",
      tech: ["Python", "Streamlit", "Gemini AI", "NLP"],
      github: "https://github.com/ajaygangwar945",
      live: "https://ajay-gangwar-portfolio.netlify.app",
      icon: ScanLine,
      color: "#22d3ee",
      image: projectAts,
      category: "AI & Data",
      featured: true
    },
    {
      title: "Pet Adoption & Welfare",
      description: "Developed a responsive platform to facilitate pet adoption and raise welfare awareness through interactive listings and community resources.",
      tech: ["JavaScript", "CSS3", "Swiper.js", "Netlify"],
      github: "https://github.com/ajaygangwar945",
      live: "https://ajay-gangwar-portfolio.netlify.app",
      icon: Heart,
      color: "#f472b6",
      image: projectPet,
      category: "Frontend",
      featured: false
    }
  ];

  const filteredProjects = activeTab === 'All'
    ? allProjects
    : allProjects.filter(project => project.category.includes(activeTab));

  return (
    <section id="projects" style={{ padding: '2rem 0 4rem' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{ fontSize: '4rem', marginBottom: '1rem' }}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '1.1rem',
            maxWidth: '650px',
            margin: '0 auto 2.5rem',
            lineHeight: '1.6'
          }}>
            A showcase of my work spanning healthcare interoperability, AI integrations, and responsive interfaces.
          </p>
          <div style={{ width: '80px', height: '6px', background: 'var(--primary-gradient)', margin: '0 auto 3rem', borderRadius: '10px' }}></div>

          {/* Filters */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '4rem',
            flexWrap: 'wrap'
          }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                style={{
                  background: activeTab === cat ? 'rgba(34, 211, 238, 0.1)' : 'rgba(255, 255, 255, 0.03)',
                  border: `1px solid ${activeTab === cat ? 'var(--accent-cyan)' : 'rgba(255, 255, 255, 0.1)'}`,
                  color: activeTab === cat ? 'var(--text-primary)' : 'var(--text-secondary)',
                  padding: '0.6rem 1.5rem',
                  borderRadius: '2rem',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2.5rem'
          }}
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
