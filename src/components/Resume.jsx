import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink, ChevronRight } from 'lucide-react';
import CyberCard from './common/CyberCard';

const Resume = () => {
  const resumeUrl = "https://drive.google.com/file/d/1U33a9q1wRiHgMTr5zBbYTKFZvUsaPnwX/view?usp=sharing";

  return (
    <section id="resume" style={{ padding: '6rem 0' }}>
      <div className="container">
        <CyberCard
          padding="4rem 2rem"
          accentColor="var(--primary-accent)"
          style={{ 
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(10, 12, 16, 0.9) 0%, rgba(26, 28, 35, 0.9) 100%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2rem'
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            style={{ 
              width: '80px', 
              height: '80px', 
              border: '2px dashed var(--primary-accent)', 
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--primary-accent)'
            }}
          >
            <FileText size={40} />
          </motion.div>

          <div>
            <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
              My <span style={{ color: 'var(--primary-accent)' }}>Resume</span>
            </h2>
            <p style={{ color: 'var(--text-dim)', maxWidth: '600px', margin: '0 auto', fontSize: '1rem' }}>
              Download or view my detailed professional resume to learn more about my technical experience, projects, and academic background.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a 
              href={resumeUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary"
            >
              <Download size={18} />
              <span>DOWNLOAD CV</span>
            </a>
            <a 
              href={resumeUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary"
            >
              <ExternalLink size={18} />
              <span>VIEW ONLINE</span>
            </a>
          </div>

          <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-dim)', fontSize: '0.8rem' }}>
            <ChevronRight size={14} />
            <span>LAST UPDATED: MARCH 2026</span>
          </div>
        </CyberCard>
      </div>
    </section>
  );
};

export default Resume;
