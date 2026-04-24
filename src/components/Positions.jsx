
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Briefcase, Calendar, ShieldCheck, Users, Info } from 'lucide-react';
import CyberCard from './common/CyberCard';
import { positionsData } from '../data/positionsData';

const PositionCard = ({ position, color }) => {
  const { id, title, role, date, description, responsibilities, image } = position;
  
  return (
    <CyberCard
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      padding="0"
      accentColor={color}
      style={{
        borderLeft: `2px solid ${color}`,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        background: 'var(--card-bg)',
        overflow: 'hidden'
      }}
    >
      {/* Image Header */}
      <div style={{ position: 'relative', height: '180px', overflow: 'hidden', borderBottom: `1px solid ${color}44` }}>
        {image ? (
          <img 
            src={image} 
            alt={title} 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              opacity: 0.8
            }} 
          />
        ) : (
          <div style={{ 
            width: '100%', 
            height: '100%', 
            background: `linear-gradient(135deg, ${color}22 0%, #000 100%)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Briefcase size={48} color={color} opacity={0.2} />
          </div>
        )}
        <div style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '0.7rem',
          color: 'var(--text-dim)',
          fontWeight: '700',
          fontFamily: 'var(--font-body)',
          background: 'rgba(0,0,0,0.7)',
          backdropFilter: 'blur(4px)',
          padding: '4px 8px',
          borderRadius: '4px',
          border: `1px solid ${color}44`,
          zIndex: 2
        }}>
          <Calendar size={12} />
          {date}
        </div>
        <div className="scanlines" style={{ position: 'absolute', inset: 0, opacity: 0.1, zIndex: 1 }} />
      </div>

      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', flexGrow: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
          <div style={{
            width: '40px',
            height: '40px',
            background: `${color}22`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: `1px solid ${color}`,
            flexShrink: 0
          }}>
            <Briefcase size={20} color={color} />
          </div>
        </div>


      <div>
        <h4 style={{ 
          color: 'var(--text-secondary)', 
          fontSize: 'clamp(1rem, 3vw, 1.25rem)', 
          fontWeight: '800', 
          fontFamily: 'var(--font-heading)', 
          marginBottom: '0.25rem',
          lineHeight: '1.2' 
        }}>{title}</h4>
        <h5 style={{ 
          color: color, 
          fontSize: '0.85rem', 
          fontWeight: '700', 
          textTransform: 'uppercase',
          letterSpacing: '1px',
          marginBottom: '1rem'
        }}>{role}</h5>
        
        <p style={{ 
          color: 'var(--text-primary)', 
          fontSize: '0.9rem', 
          lineHeight: '1.5',
          marginBottom: '1.5rem',
          opacity: 0.9
        }}>{description}</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
          {responsibilities.slice(0, 2).map((resp, idx) => (
            <div key={idx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <ShieldCheck size={14} color={color} style={{ marginTop: '3px', flexShrink: 0 }} />
              <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', lineHeight: '1.4' }}>{resp}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 'auto' }}>
        <Link 
          to={`/position/${id}`}
          style={{
            width: '100%',
            background: 'transparent',
            border: `1px solid ${color}`,
            color: color,
            padding: '0.6rem',
            fontSize: '0.75rem',
            fontWeight: '800',
            fontFamily: 'var(--font-heading)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            transition: 'all 0.3s ease',
            textDecoration: 'none'
          }}
          className="cyber-button-hover"
        >
          <Info size={14} />
          VIEW MISSION DETAILS
        </Link>
      </div>
      </div>
    </CyberCard>
  );
};

const Positions = () => {
  return (
    <section id="positions" style={{ minHeight: '100vh', display: 'flex', alignItems: 'flex-start' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ marginBottom: '2rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
            <Users size={24} color="var(--positions-accent)" />
            <span style={{ fontSize: '0.8rem', color: 'var(--positions-accent)', fontWeight: '800', letterSpacing: '3px', textTransform: 'uppercase' }}>Leadership</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 8vw, 3.5rem)', marginBottom: '1rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-heading)' }}>
            Positions of <span style={{ color: 'var(--positions-accent)' }}>Responsibility</span>
          </h2>
          <p style={{ color: 'var(--text-dim)', maxWidth: '600px', marginBottom: '2rem' }}>
            Bridging gaps, fostering innovation, and leading student initiatives to create a better campus experience.
          </p>
          <div style={{ width: '100%', height: '1px', background: 'var(--card-border)' }} />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {positionsData.map((item, idx) => (
            <PositionCard 
              key={idx} 
              position={item} 
              color="var(--positions-accent)" 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Positions;
