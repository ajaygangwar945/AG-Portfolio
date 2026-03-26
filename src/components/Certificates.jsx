import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ExternalLink } from 'lucide-react';
import CyberCard from './common/CyberCard';
import certPlaceholder from '../assets/certificates/placeholder.png';

const CertificateItem = ({ name, issuer, date, color, image }) => (
  <CyberCard 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    padding="0"
    accentColor={color}
    style={{ 
      display: 'flex', 
      flexDirection: 'column',
      overflow: 'hidden',
      background: 'rgba(255, 255, 255, 0.02)',
      height: '100%'
    }}
  >
    {/* Certificate Screenshot Preview */}
    <div style={{ 
      position: 'relative', 
      width: '100%', 
      height: '180px', 
      overflow: 'hidden',
      borderBottom: `2px solid ${color}44`
    }}>
      <img 
        src={image || certPlaceholder} 
        alt={name} 
        style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover',
          transition: 'transform 0.5s ease'
        }}
        onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
      />
      <div style={{ 
        position: 'absolute', 
        top: '10px', 
        right: '10px', 
        background: 'rgba(0,0,0,0.6)', 
        padding: '0.4rem', 
        borderRadius: '50%',
        backdropFilter: 'blur(4px)',
        border: `1px solid ${color}`
      }}>
        <ShieldCheck size={16} color={color} />
      </div>
    </div>

    <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ flex: 1 }}>
        <h4 style={{ 
          color: 'var(--text-secondary)', 
          fontSize: '1rem', 
          fontWeight: '800', 
          fontFamily: 'var(--font-heading)', 
          lineHeight: '1.4',
          marginBottom: '0.5rem'
        }}>
          {name}
        </h4>
        <p style={{ 
          fontSize: '0.75rem', 
          color: 'var(--text-dim)', 
          fontWeight: '600',
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}>
          {issuer} • {date}
        </p>
      </div>

      <motion.button
        whileHover={{ x: 5, color: color }}
        style={{ 
          background: 'transparent', 
          border: 'none', 
          color: 'var(--text-primary)', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.5rem', 
          fontSize: '0.75rem', 
          fontWeight: '700', 
          cursor: 'pointer',
          marginTop: '1.5rem',
          padding: 0
        }}
      >
        VIEW CREDENTIAL <ExternalLink size={14} />
      </motion.button>
    </div>
  </CyberCard>
);

const Certificates = () => {
  const certifications = [
    { name: "Agile Project Management", issuer: "HP", date: "FEB 2026", color: "#3b82f6", image: certPlaceholder },
    { name: "Data Science & Analytics", issuer: "HP", date: "FEB 2026", color: "#3b82f6", image: certPlaceholder },
    { name: "Introduction to Modern AI", issuer: "Cisco", date: "NOV 2025", color: "#66fcf1", image: certPlaceholder },
    { name: "Python for Data Science", issuer: "NPTEL", date: "FEB 2025", color: "#a855f7", image: certPlaceholder },
    { name: "Fundamentals of Network Communication", issuer: "Coursera", date: "SEP 2024", color: "#10b981", image: certPlaceholder },
    { name: "Software Engineering", issuer: "Coursera", date: "MAY 2024", color: "#10b981", image: certPlaceholder }
  ];

  return (
    <section id="certificates" style={{ padding: '6rem 0', background: 'rgba(0,0,0,0.1)' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}
        >
          <ShieldCheck size={32} color="var(--certificates-accent)" />
          <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', color: 'var(--text-secondary)' }}>
            Verified <span style={{ color: 'var(--certificates-accent)' }}>Certifications</span>
          </h2>
        </motion.div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
          gap: '2rem' 
        }}>
          {certifications.map((cert, idx) => (
            <CertificateItem key={idx} {...cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
