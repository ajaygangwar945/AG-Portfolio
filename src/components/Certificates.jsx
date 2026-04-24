import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ExternalLink } from 'lucide-react';
import CyberCard from './common/CyberCard';
import { certificationsData } from '../data/certificatesData';

const CertificateItem = ({ name, issuer, date, image, link, description, Icon }) => (
  <CyberCard
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    padding="0"
    accentColor="var(--certificates-accent)"
    style={{
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      height: '100%'
    }}
  >
    {/* Certificate Screenshot Preview */}
    <div style={{
      position: 'relative',
      width: '100%',
      height: '250px',
      overflow: 'hidden',
      borderBottom: '1px solid var(--certificates-accent)'
    }}>
      <img
        src={image}
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
    </div>

    <div style={{ 
      padding: '1.25rem', 
      display: 'flex', 
      flexDirection: 'column', 
      backgroundColor: 'transparent',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)'
    }}>
      <div>
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-dim)' }}>
          {Icon && <Icon size={12} color="var(--certificates-accent)" />}
          <p style={{
            fontSize: '0.75rem',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            {issuer} • {date}
          </p>
        </div>
        <p style={{
          fontSize: '0.85rem',
          color: 'var(--text-dim)',
          marginTop: '0.75rem',
          lineHeight: '1.5',
          display: '-webkit-box',
          WebkitLineClamp: '2',
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}>
          {description}
        </p>
      </div>

      <motion.a
        href={link || "#"}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ x: 5, color: 'var(--certificates-accent)' }}
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
          textDecoration: 'none',
          width: 'fit-content'
        }}
      >
        VIEW CERTIFICATE <ExternalLink size={14} />
      </motion.a>
    </div>
  </CyberCard>
);

const Certificates = () => {
  return (
    <section id="certificates" style={{ minHeight: '100vh', display: 'flex', alignItems: 'flex-start' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ marginBottom: '2rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
            <ShieldCheck size={24} color="var(--certificates-accent)" />
            <span style={{ fontSize: '0.8rem', color: 'var(--certificates-accent)', fontWeight: '800', letterSpacing: '3px', textTransform: 'uppercase' }}>CERTIFICATES</span>
          </div>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-heading)' }}>
            Verified <span style={{ color: 'var(--certificates-accent)' }}>Certificates</span>
          </h2>
          <div style={{ width: '100%', height: '1px', background: 'var(--card-border)' }} />
        </motion.div>

        <div className="three-col-grid">
          {certificationsData.map((cert, idx) => (
            <CertificateItem key={idx} {...cert} />
          ))}
        </div>

        {/* View All Certificates Link */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem' }}>
          <a 
            href="https://certificates-docs-portal.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary" 
            style={{ 
              padding: '0.8rem 2rem', 
              fontSize: '0.8rem', 
              letterSpacing: '2px',
              background: 'var(--certificates-accent)',
              color: 'var(--bg-color)',
              borderColor: 'transparent',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}
          >
            &gt; VIEW ALL CERTIFICATES <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
